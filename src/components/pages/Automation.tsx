import { motion } from 'framer-motion';
import { Bot, Zap, Settings, TrendingUp } from 'lucide-react';

const Automation: React.FC = () => {
    const agents = [
        {
            name: 'Email Assistant',
            icon: '📧',
            status: 'active',
            tasksCompleted: 156,
            efficiency: 94,
            description: 'Auto-drafts responses, schedules follow-ups',
        },
        {
            name: 'Meeting Scheduler',
            icon: '📅',
            status: 'active',
            tasksCompleted: 89,
            efficiency: 87,
            description: 'Finds optimal meeting times, sends invites',
        },
        {
            name: 'Document Analyzer',
            icon: '📄',
            status: 'active',
            tasksCompleted: 234,
            efficiency: 91,
            description: 'Extracts insights, generates summaries',
        },
        {
            name: 'Task Prioritizer',
            icon: '🎯',
            status: 'paused',
            tasksCompleted: 67,
            efficiency: 78,
            description: 'Ranks tasks by urgency and impact',
        },
        {
            name: 'Slack Monitor',
            icon: '💬',
            status: 'active',
            tasksCompleted: 412,
            efficiency: 96,
            description: 'Flags critical messages, suggests responses',
        },
        {
            name: 'Report Generator',
            icon: '📊',
            status: 'active',
            tasksCompleted: 45,
            efficiency: 89,
            description: 'Creates weekly summaries and dashboards',
        },
    ];

    const recentActions = [
        { action: 'Drafted email to investor', time: '5 min ago', agent: 'Email Assistant' },
        { action: 'Rescheduled 1:1 with Marcus', time: '12 min ago', agent: 'Meeting Scheduler' },
        { action: 'Summarized Q4 report', time: '1 hour ago', agent: 'Document Analyzer' },
        { action: 'Flagged urgent Slack from Sarah', time: '2 hours ago', agent: 'Slack Monitor' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-7xl mx-auto"
        >
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Automation</h1>
                <p className="text-lg text-gray-400">Desktop Agents working for you</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="glass-card rounded-xl p-4 border border-white/5">
                    <div className="text-sm text-gray-500 mb-1">Active Agents</div>
                    <div className="text-3xl font-mono font-bold text-cyan-400">5</div>
                </div>
                <div className="glass-card rounded-xl p-4 border border-white/5">
                    <div className="text-sm text-gray-500 mb-1">Tasks Today</div>
                    <div className="text-3xl font-mono font-bold text-green-400">47</div>
                </div>
                <div className="glass-card rounded-xl p-4 border border-white/5">
                    <div className="text-sm text-gray-500 mb-1">Time Saved</div>
                    <div className="text-3xl font-mono font-bold text-purple-400">12.3h</div>
                </div>
                <div className="glass-card rounded-xl p-4 border border-white/5">
                    <div className="text-sm text-gray-500 mb-1">Avg Efficiency</div>
                    <div className="text-3xl font-mono font-bold text-orange-400">89%</div>
                </div>
            </div>

            {/* Agents Grid */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Your Agents</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {agents.map((agent, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card rounded-xl p-5 border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer group"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="text-3xl">{agent.icon}</div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                            {agent.name}
                                        </h3>
                                        <p className="text-xs text-gray-500">{agent.description}</p>
                                    </div>
                                </div>
                                <div
                                    className={`w-2 h-2 rounded-full ${agent.status === 'active' ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
                                        }`}
                                />
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="p-3 rounded-lg bg-white/5">
                                    <div className="flex items-center gap-1 mb-1">
                                        <Zap className="w-3 h-3 text-cyan-400" />
                                        <span className="text-xs text-gray-500">Tasks</span>
                                    </div>
                                    <div className="text-lg font-mono font-bold text-white">{agent.tasksCompleted}</div>
                                </div>
                                <div className="p-3 rounded-lg bg-white/5">
                                    <div className="flex items-center gap-1 mb-1">
                                        <TrendingUp className="w-3 h-3 text-green-400" />
                                        <span className="text-xs text-gray-500">Efficiency</span>
                                    </div>
                                    <div className="text-lg font-mono font-bold text-green-400">{agent.efficiency}%</div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2">
                                <button className="flex-1 px-3 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">
                                    View Logs
                                </button>
                                <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                    <Settings className="w-4 h-4 text-gray-400" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Recent Actions */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-4">Recent Actions</h2>
                <div className="glass-card rounded-xl p-5 border border-white/5">
                    <div className="space-y-3">
                        {recentActions.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <Bot className="w-5 h-5 text-cyan-400" />
                                    <div>
                                        <p className="text-sm text-white font-medium">{item.action}</p>
                                        <p className="text-xs text-gray-500">{item.agent}</p>
                                    </div>
                                </div>
                                <span className="text-xs text-gray-500">{item.time}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Automation;
