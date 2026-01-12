import { motion } from 'framer-motion';
import { Slack, Github, Trello, Figma, Calendar, Mail, Plus } from 'lucide-react';

const Integrations: React.FC = () => {
    const connectedIntegrations = [
        {
            name: 'Slack',
            icon: Slack,
            status: 'connected',
            lastSync: '2 min ago',
            color: 'text-purple-400',
            bgColor: 'bg-purple-500/10',
            borderColor: 'border-purple-500/20',
        },
        {
            name: 'GitHub',
            icon: Github,
            status: 'connected',
            lastSync: '5 min ago',
            color: 'text-gray-400',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-gray-500/20',
        },
        {
            name: 'Google Calendar',
            icon: Calendar,
            status: 'connected',
            lastSync: '1 min ago',
            color: 'text-blue-400',
            bgColor: 'bg-blue-500/10',
            borderColor: 'border-blue-500/20',
        },
        {
            name: 'Gmail',
            icon: Mail,
            status: 'connected',
            lastSync: '3 min ago',
            color: 'text-red-400',
            bgColor: 'bg-red-500/10',
            borderColor: 'border-red-500/20',
        },
    ];

    const availableIntegrations = [
        {
            name: 'Trello',
            icon: Trello,
            description: 'Project management and task tracking',
            color: 'text-blue-400',
            bgColor: 'bg-blue-500/10',
            borderColor: 'border-blue-500/20',
        },
        {
            name: 'Figma',
            icon: Figma,
            description: 'Design collaboration platform',
            color: 'text-pink-400',
            bgColor: 'bg-pink-500/10',
            borderColor: 'border-pink-500/20',
        },
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
                    <h1 className="text-4xl font-bold text-white mb-2">Integrations</h1>
                    <p className="text-lg text-gray-400">Connected services and tools</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-colors">
                    <Plus className="w-5 h-5" />
                    Add Integration
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="glass-card rounded-xl p-4 border border-white/5">
                    <div className="text-sm text-gray-500 mb-1">Connected</div>
                    <div className="text-3xl font-mono font-bold text-green-400">4</div>
                </div>
                <div className="glass-card rounded-xl p-4 border border-white/5">
                    <div className="text-sm text-gray-500 mb-1">Available</div>
                    <div className="text-3xl font-mono font-bold text-cyan-400">12</div>
                </div>
                <div className="glass-card rounded-xl p-4 border border-white/5">
                    <div className="text-sm text-gray-500 mb-1">Data Synced</div>
                    <div className="text-3xl font-mono font-bold text-purple-400">2.4K</div>
                </div>
                <div className="glass-card rounded-xl p-4 border border-white/5">
                    <div className="text-sm text-gray-500 mb-1">Last Sync</div>
                    <div className="text-3xl font-mono font-bold text-orange-400">1m</div>
                </div>
            </div>

            {/* Connected Integrations */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Connected Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {connectedIntegrations.map((integration, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className={`glass-card rounded-xl p-5 border ${integration.borderColor} hover:border-opacity-50 transition-all cursor-pointer group`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded-lg ${integration.bgColor} border ${integration.borderColor} flex items-center justify-center`}>
                                        <integration.icon className={`w-6 h-6 ${integration.color}`} />
                                    </div>
                                    <div>
                                        <h3 className={`text-lg font-semibold text-white group-hover:${integration.color} transition-colors`}>
                                            {integration.name}
                                        </h3>
                                        <p className="text-xs text-gray-500">Last sync: {integration.lastSync}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-xs text-green-400 font-semibold">Active</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button className="flex-1 px-3 py-2 rounded-lg bg-white/5 text-gray-300 text-sm font-semibold hover:bg-white/10 transition-colors">
                                    Configure
                                </button>
                                <button className="px-3 py-2 rounded-lg bg-red-500/10 text-red-400 text-sm font-semibold hover:bg-red-500/20 transition-colors border border-red-500/20">
                                    Disconnect
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Available Integrations */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-4">Available Integrations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {availableIntegrations.map((integration, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className={`glass-card rounded-xl p-5 border ${integration.borderColor} hover:border-opacity-50 transition-all cursor-pointer group`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded-lg ${integration.bgColor} border ${integration.borderColor} flex items-center justify-center`}>
                                        <integration.icon className={`w-6 h-6 ${integration.color}`} />
                                    </div>
                                    <div>
                                        <h3 className={`text-lg font-semibold text-white group-hover:${integration.color} transition-colors`}>
                                            {integration.name}
                                        </h3>
                                        <p className="text-xs text-gray-500">{integration.description}</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full px-3 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">
                                Connect
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Integrations;
