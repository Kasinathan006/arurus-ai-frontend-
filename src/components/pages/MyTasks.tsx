import { motion } from 'framer-motion';
import { CheckCircle, Clock, AlertCircle, Filter, Plus } from 'lucide-react';
import { useState, useEffect } from 'react';
import coreService from '../../services/coreService';
import type { Task } from '../../services/coreService';

interface TaskDisplay extends Omit<Task, 'dueDate'> {
    dueDate: string;
    assignee: string;
}

const MyTasks: React.FC = () => {
    const [tasks, setTasks] = useState<TaskDisplay[]>([
        {
            id: '1',
            title: 'Review Q4 Budget Proposal',
            description: '',
            priority: 'high',
            status: 'in_progress',
            dueDate: 'Today',
            assignee: 'You',
            projectId: 'finance',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        },
    ]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const data = await coreService.getTasks();
                if (data && data.length > 0) {
                    setTasks(data.map(task => ({
                        ...task,
                        assignee: task.assignee || 'You',
                        dueDate: task.dueDate ? formatDueDate(task.dueDate) : 'No due date',
                    })));
                }
            } catch (error) {
                console.error('Failed to fetch tasks:', error);
                // Keep default data on error
            } finally {
                // Loading complete
            }
        };

        fetchTasks();
    }, []);

    const formatDueDate = (dateString: string) => {
        const date = new Date(dateString);
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        if (date < today) return 'Overdue';
        if (date.toDateString() === today.toDateString()) return 'Today';
        if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';

        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    const stats = [
        { label: 'Total Tasks', value: tasks.length.toString(), color: 'text-cyan-400' },
        { label: 'In Progress', value: tasks.filter(t => t.status === 'in_progress').length.toString(), color: 'text-yellow-400' },
        { label: 'Completed Today', value: tasks.filter(t => t.status === 'completed').length.toString(), color: 'text-green-400' },
        { label: 'Blocked', value: tasks.filter(t => t.status === 'blocked').length.toString(), color: 'text-red-400' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-7xl mx-auto"
        >
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-bold text-white mb-2">My Tasks</h1>
                    <p className="text-lg text-gray-400">Your personal task dashboard</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors">
                    <Plus className="w-5 h-5" />
                    New Task
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                    <div key={index} className="glass-card rounded-xl p-4 border border-white/5">
                        <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
                        <div className={`text-3xl font-mono font-bold ${stat.color}`}>{stat.value}</div>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="flex items-center gap-3 mb-6">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg glass-effect hover:bg-white/5 transition-colors">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-300">All Tasks</span>
                </button>
                <button className="px-4 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm text-gray-400">
                    High Priority
                </button>
                <button className="px-4 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm text-gray-400">
                    Due Today
                </button>
            </div>

            {/* Task List */}
            <div className="space-y-3">
                {tasks.map((task, index) => (
                    <motion.div
                        key={task.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="glass-card rounded-xl p-5 border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer group"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-start gap-4 flex-1">
                                {/* Status Icon */}
                                <div className="mt-1">
                                    {task.status === 'completed' ? (
                                        <CheckCircle className="w-5 h-5 text-green-400" />
                                    ) : task.status === 'blocked' ? (
                                        <AlertCircle className="w-5 h-5 text-red-400" />
                                    ) : (
                                        <Clock className="w-5 h-5 text-yellow-400" />
                                    )}
                                </div>

                                {/* Task Info */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                        {task.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-400">
                                        <span className="px-2 py-1 rounded bg-white/5 text-xs">
                                            {task.projectId}
                                        </span>
                                        <span>Assigned to: {task.assignee}</span>
                                        <span className={task.dueDate === 'Overdue' ? 'text-red-400 font-semibold' : ''}>
                                            Due: {task.dueDate}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Priority Badge */}
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-bold ${task.priority === 'high'
                                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                    : task.priority === 'medium'
                                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                        : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                                    }`}
                            >
                                {task.priority.toUpperCase()}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default MyTasks;
