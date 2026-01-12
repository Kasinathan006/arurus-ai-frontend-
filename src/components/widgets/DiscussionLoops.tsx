import { motion } from 'framer-motion';
import { MessageSquare, AlertCircle, Clock, CheckCircle2 } from 'lucide-react';

const DiscussionLoops: React.FC = () => {
    const loops = [
        {
            topic: 'API Strategy',
            status: 'STALLED',
            statusColor: 'red',
            discussions: 4,
            tasksClosed: 0,
            icon: AlertCircle,
        },
        {
            topic: 'Budget Reallocation',
            status: 'CIRCLING',
            statusColor: 'yellow',
            discussions: 3,
            tasksClosed: null,
            icon: Clock,
        },
        {
            topic: 'Hiring Pipeline',
            status: 'RESOLVED',
            statusColor: 'blue',
            discussions: 2,
            tasksClosed: 5,
            icon: CheckCircle2,
        },
    ];

    const getStatusColors = (color: string) => {
        const colors = {
            red: {
                bg: 'bg-red-500/10',
                border: 'border-red-500/30',
                text: 'text-red-400',
            },
            yellow: {
                bg: 'bg-yellow-500/10',
                border: 'border-yellow-500/30',
                text: 'text-yellow-400',
            },
            blue: {
                bg: 'bg-blue-500/10',
                border: 'border-blue-500/30',
                text: 'text-blue-400',
            },
        };
        return colors[color as keyof typeof colors] || colors.blue;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-2xl p-6 border border-white/10 relative overflow-hidden group hover:border-purple-500/30 transition-all"
        >
            {/* Corner Icon */}
            <div className="absolute top-4 right-4">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-purple-400" />
                </div>
            </div>

            {/* Header */}
            <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">Discussion Loops</h3>
                <p className="text-sm text-gray-400">Recurring meeting topics</p>
            </div>

            {/* Loop Items */}
            <div className="space-y-3">
                {loops.map((loop, index) => {
                    const colors = getStatusColors(loop.statusColor);
                    const Icon = loop.icon;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <Icon className={`w-5 h-5 ${colors.text}`} />
                                    <div>
                                        <div className="text-sm font-semibold text-white">{loop.topic}</div>
                                    </div>
                                </div>
                                <span className={`px-2 py-1 rounded-md text-xs font-bold ${colors.bg} ${colors.border} ${colors.text} border`}>
                                    {loop.status}
                                </span>
                            </div>

                            <div className="flex items-center gap-4 text-xs text-gray-400">
                                <span>Discussed {loop.discussions}x</span>
                                {loop.tasksClosed !== null && (
                                    <>
                                        <span>•</span>
                                        <span className={loop.tasksClosed === 0 ? 'text-red-400' : 'text-green-400'}>
                                            {loop.tasksClosed} Tasks Closed
                                        </span>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Footer Insight */}
            <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-xs text-gray-500">
                    <span className="text-purple-400 font-semibold">Insight:</span> API Strategy needs executive decision
                </div>
            </div>
        </motion.div>
    );
};

export default DiscussionLoops;
