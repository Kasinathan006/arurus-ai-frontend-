import { motion } from 'framer-motion';
import { Bot, FileText, Bell, CheckSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import reportsService from '../../services/reportsService';

const GhostActions: React.FC = () => {
    const [autonomyLevel, setAutonomyLevel] = useState(75);
    const [actions, setActions] = useState([
        {
            action: 'Generated Weekly Summary',
            time: '2h ago',
            icon: FileText,
            color: 'cyan',
        },
        {
            action: 'Nudged Sarah re: Q3 Report',
            time: '3 days late',
            icon: Bell,
            color: 'orange',
        },
        {
            action: 'Auto-updated Jira Ticket #402',
            time: '1h ago',
            icon: CheckSquare,
            color: 'green',
        },
    ]);

    useEffect(() => {
        const fetchGhostActions = async () => {
            try {
                const data = await reportsService.getGhostActions(5);
                if (data && data.length > 0) {
                    const formattedActions = data.map((item: any) => ({
                        action: item.action,
                        time: getTimeAgo(item.timestamp),
                        icon: getIconForType(item.type),
                        color: getColorForType(item.type),
                    }));
                    setActions(formattedActions);
                }
            } catch (error) {
                console.error('Failed to fetch ghost actions:', error);
                // Keep default data on error
            }
        };

        fetchGhostActions();
    }, []);

    const getTimeAgo = (timestamp: string) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        if (hours < 1) return 'Just now';
        if (hours < 24) return `${hours}h ago`;
        const days = Math.floor(hours / 24);
        return `${days}d ago`;
    };

    const getIconForType = (type: string) => {
        const icons: any = {
            nudge: Bell,
            update: CheckSquare,
            summary: FileText,
            escalation: Bell,
        };
        return icons[type] || FileText;
    };

    const getColorForType = (type: string) => {
        const colors: any = {
            nudge: 'orange',
            update: 'green',
            summary: 'cyan',
            escalation: 'orange',
        };
        return colors[type] || 'cyan';
    };

    const getIconColors = (color: string) => {
        const colors = {
            cyan: 'text-cyan-400 bg-cyan-500/10',
            orange: 'text-orange-400 bg-orange-500/10',
            green: 'text-green-400 bg-green-500/10',
        };
        return colors[color as keyof typeof colors] || colors.cyan;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 border border-white/10 relative overflow-hidden group hover:border-cyan-500/30 transition-all"
        >
            {/* Corner Icon */}
            <div className="absolute top-4 right-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-cyan-400" />
                </div>
            </div>

            {/* Header */}
            <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">Ghost Actions</h3>
                <p className="text-sm text-gray-400">AI autonomous execution</p>
            </div>

            {/* Timeline */}
            <div className="space-y-4 mb-6">
                {actions.map((item, index) => {
                    const Icon = item.icon;
                    const colors = getIconColors(item.color);

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="flex items-start gap-3"
                        >
                            <div className={`w-10 h-10 rounded-lg ${colors} border border-white/10 flex items-center justify-center flex-shrink-0`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-medium text-white mb-1">{item.action}</div>
                                <div className="text-xs text-gray-500">{item.time}</div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Autonomy Control */}
            <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-white">Autonomy Level</span>
                    <span className="text-2xl font-bold text-cyan-400">{autonomyLevel}%</span>
                </div>

                <div className="relative">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={autonomyLevel}
                        onChange={(e) => setAutonomyLevel(Number(e.target.value))}
                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                            background: `linear-gradient(to right, #06b6d4 0%, #06b6d4 ${autonomyLevel}%, rgba(255,255,255,0.1) ${autonomyLevel}%, rgba(255,255,255,0.1) 100%)`,
                        }}
                    />
                </div>

                <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <span>Manual</span>
                    <span>Full Auto</span>
                </div>
            </div>
        </motion.div>
    );
};

export default GhostActions;
