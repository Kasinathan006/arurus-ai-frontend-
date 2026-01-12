import { motion } from 'framer-motion';
import { Brain, Target, TrendingUp } from 'lucide-react';

const FeatureGrid: React.FC = () => {
    const features = [
        {
            icon: Brain,
            title: 'Intelligent Capture',
            description: 'AI extracts action items from meetings automatically',
            color: 'cyan',
        },
        {
            icon: Target,
            title: 'Auto-Assignment',
            description: 'Tasks assigned based on context and team capacity',
            color: 'purple',
        },
        {
            icon: TrendingUp,
            title: 'Velocity Tracking',
            description: 'Real-time sprint metrics and team performance',
            color: 'green',
        },
    ];

    const getColorClasses = (color: string) => {
        switch (color) {
            case 'cyan':
                return {
                    bg: 'bg-cyan-500/10',
                    border: 'border-cyan-500/20',
                    text: 'text-cyan-400',
                    hover: 'group-hover:border-cyan-500/50',
                };
            case 'purple':
                return {
                    bg: 'bg-purple-500/10',
                    border: 'border-purple-500/20',
                    text: 'text-purple-400',
                    hover: 'group-hover:border-purple-500/50',
                };
            case 'green':
                return {
                    bg: 'bg-green-500/10',
                    border: 'border-green-500/20',
                    text: 'text-green-400',
                    hover: 'group-hover:border-green-500/50',
                };
            default:
                return {
                    bg: 'bg-gray-500/10',
                    border: 'border-gray-500/20',
                    text: 'text-gray-400',
                    hover: 'group-hover:border-gray-500/50',
                };
        }
    };

    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Features</h2>
                    <p className="text-xl text-gray-400">Everything you need to automate your workflow</p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const colors = getColorClasses(feature.color);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className={`glass-card rounded-2xl p-8 border ${colors.border} ${colors.hover} transition-all cursor-pointer group`}
                            >
                                {/* Icon */}
                                <div className={`w-16 h-16 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-6`}>
                                    <feature.icon className={`w-8 h-8 ${colors.text}`} />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>

                                {/* Description */}
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
