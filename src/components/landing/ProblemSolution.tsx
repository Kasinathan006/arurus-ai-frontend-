import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Zap, TrendingUp, Shield, Clock } from 'lucide-react';

const ProblemSolution: React.FC = () => {
    return (
        <section className="py-24 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
                >
                    The Problem vs. The Solution
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* The Chaos (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl border border-red-500/20 bg-red-500/5"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <AlertCircle className="w-8 h-8 text-red-400" />
                            <h3 className="text-2xl font-bold text-red-400">The Chaos</h3>
                        </div>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 mt-1">•</span>
                                <span><strong>Manual meeting minutes</strong> that take hours to write and distribute</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 mt-1">•</span>
                                <span><strong>Lost Jira tickets</strong> buried in Slack threads and email chains</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 mt-1">•</span>
                                <span><strong>Endless follow-ups</strong> to check if tasks are actually done</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 mt-1">•</span>
                                <span><strong>Fragmented tools</strong> across Notion, Asana, Linear, and 12 other apps</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-400 mt-1">•</span>
                                <span><strong>Zero visibility</strong> into what's blocking your team's velocity</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* The AURAS Way (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle className="w-8 h-8 text-cyan-400" />
                            <h3 className="text-2xl font-bold text-cyan-400">The AURAS Way</h3>
                        </div>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span><strong>Auto-capture</strong> every decision, action item, and blocker from meetings</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span><strong>Instant task sync</strong> to Jira, Linear, or Asana—no manual entry</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span><strong>Autonomous agent execution</strong> that follows up and updates status automatically</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span><strong>Unified view</strong> of all projects, sprints, and team health in one dashboard</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span><strong>Real-time insights</strong> into velocity, burnout risk, and execution gaps</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const BuiltForYou: React.FC = () => {
    const personas = [
        {
            title: 'Product Teams',
            description: 'No more manual updates. ATLAS auto-syncs sprint progress from your meetings.',
            icon: Zap,
            color: 'cyan',
        },
        {
            title: 'Founders',
            description: 'Track burn rate & velocity in real-time. Know exactly where your team stands.',
            icon: TrendingUp,
            color: 'purple',
        },
        {
            title: 'Enterprise',
            description: 'SSO, Audit Logs, On-Prem deployment. Built for security and compliance.',
            icon: Shield,
            color: 'green',
        },
        {
            title: 'Individuals',
            description: 'Reclaim 7 hours/week. Let AI handle the busywork while you create.',
            icon: Clock,
            color: 'orange',
        },
    ];

    const getColorClasses = (color: string) => {
        const colors = {
            cyan: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-400',
            purple: 'border-purple-500/20 bg-purple-500/5 text-purple-400',
            green: 'border-green-500/20 bg-green-500/5 text-green-400',
            orange: 'border-orange-500/20 bg-orange-500/5 text-orange-400',
        };
        return colors[color as keyof typeof colors] || colors.cyan;
    };

    return (
        <section className="py-24 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
                >
                    Built For You
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {personas.map((persona, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className={`glass-card p-6 rounded-2xl border ${getColorClasses(persona.color)} cursor-pointer transition-all`}
                        >
                            <persona.icon className={`w-12 h-12 mb-4 ${getColorClasses(persona.color).split(' ')[2]}`} />
                            <h3 className="text-xl font-bold text-white mb-3">{persona.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{persona.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { ProblemSolution, BuiltForYou };
