import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Link, Search } from 'lucide-react';

const KnowledgeBase: React.FC = () => {
    const categories = [
        {
            name: 'Product Documentation',
            icon: FileText,
            items: 24,
            color: 'text-cyan-400',
            bgColor: 'bg-cyan-500/10',
            borderColor: 'border-cyan-500/20',
        },
        {
            name: 'Training Videos',
            icon: Video,
            items: 18,
            color: 'text-purple-400',
            bgColor: 'bg-purple-500/10',
            borderColor: 'border-purple-500/20',
        },
        {
            name: 'Best Practices',
            icon: BookOpen,
            items: 32,
            color: 'text-green-400',
            bgColor: 'bg-green-500/10',
            borderColor: 'border-green-500/20',
        },
        {
            name: 'External Resources',
            icon: Link,
            items: 15,
            color: 'text-orange-400',
            bgColor: 'bg-orange-500/10',
            borderColor: 'border-orange-500/20',
        },
    ];

    const recentDocs = [
        {
            title: 'Q4 2025 Strategy Playbook',
            category: 'Strategy',
            lastUpdated: '2 days ago',
            views: 156,
        },
        {
            title: 'API Integration Guide v3.2',
            category: 'Technical',
            lastUpdated: '1 week ago',
            views: 89,
        },
        {
            title: 'Customer Onboarding Process',
            category: 'Operations',
            lastUpdated: '3 days ago',
            views: 234,
        },
        {
            title: 'Sales Playbook 2026',
            category: 'Sales',
            lastUpdated: '5 days ago',
            views: 178,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-7xl mx-auto"
        >
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Knowledge Base</h1>
                <p className="text-lg text-gray-400">Company documentation and resources</p>
            </div>

            {/* Search */}
            <div className="mb-8">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search documentation..."
                        className="w-full pl-12 pr-4 py-3 rounded-xl glass-card border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                </div>
            </div>

            {/* Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`glass-card rounded-xl p-6 border ${category.borderColor} hover:border-opacity-50 transition-all cursor-pointer group`}
                    >
                        <div className={`w-12 h-12 rounded-lg ${category.bgColor} border ${category.borderColor} flex items-center justify-center mb-4`}>
                            <category.icon className={`w-6 h-6 ${category.color}`} />
                        </div>
                        <h3 className={`text-lg font-semibold text-white mb-2 group-hover:${category.color} transition-colors`}>
                            {category.name}
                        </h3>
                        <p className="text-sm text-gray-500">{category.items} documents</p>
                    </motion.div>
                ))}
            </div>

            {/* Recent Documents */}
            <div>
                <h2 className="text-2xl font-bold text-white mb-4">Recently Updated</h2>
                <div className="space-y-3">
                    {recentDocs.map((doc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card rounded-xl p-5 border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer group"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 flex-1">
                                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                        <FileText className="w-6 h-6 text-cyan-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                            {doc.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <span className="px-2 py-1 rounded bg-white/5 text-xs">{doc.category}</span>
                                            <span>Updated {doc.lastUpdated}</span>
                                            <span>{doc.views} views</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">
                                    Open
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default KnowledgeBase;
