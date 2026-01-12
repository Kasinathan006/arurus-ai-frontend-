import { motion } from 'framer-motion';
import { DollarSign, Calendar, TrendingUp, AlertTriangle, Users } from 'lucide-react';

const AtlasView: React.FC = () => {
    const kpis = [
        {
            label: 'Revenue',
            value: '$234K',
            change: '+12%',
            changeType: 'positive',
            icon: DollarSign,
            color: 'green',
        },
        {
            label: 'Runway',
            value: '18 Months',
            change: '-2 months',
            changeType: 'negative',
            icon: Calendar,
            color: 'orange',
        },
        {
            label: 'Team Velocity',
            value: '87%',
            change: '+5%',
            changeType: 'positive',
            icon: TrendingUp,
            color: 'cyan',
        },
    ];

    const teamMembers = [
        { name: 'Sarah', workload: 'high', avatar: 'S', color: 'from-red-500 to-pink-600', risk: 'High Risk' },
        { name: 'Alex', workload: 'medium', avatar: 'A', color: 'from-yellow-500 to-orange-600', risk: 'Moderate' },
        { name: 'Mike', workload: 'safe', avatar: 'M', color: 'from-green-500 to-emerald-600', risk: 'Safe' },
        { name: 'Emma', workload: 'safe', avatar: 'E', color: 'from-green-500 to-emerald-600', risk: 'Safe' },
        { name: 'David', workload: 'high', avatar: 'D', color: 'from-red-500 to-pink-600', risk: 'High Risk' },
        { name: 'Lisa', workload: 'medium', avatar: 'L', color: 'from-yellow-500 to-orange-600', risk: 'Moderate' },
    ];

    const getKPIColors = (color: string) => {
        const colors = {
            green: { bg: 'bg-green-500/10', border: 'border-green-500/20', text: 'text-green-400' },
            orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', text: 'text-orange-400' },
            cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400' },
        };
        return colors[color as keyof typeof colors] || colors.cyan;
    };

    return (
        <div className="w-full space-y-6">
            {/* KPI Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {kpis.map((kpi, index) => {
                    const colors = getKPIColors(kpi.color);
                    const Icon = kpi.icon;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass-card rounded-2xl p-6 border ${colors.border} ${colors.bg}`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                                    <Icon className={`w-6 h-6 ${colors.text}`} />
                                </div>
                                <span className={`text-xs font-semibold ${kpi.changeType === 'positive' ? 'text-green-400' : 'text-red-400'}`}>
                                    {kpi.change}
                                </span>
                            </div>
                            <div className="text-sm text-gray-400 mb-1">{kpi.label}</div>
                            <div className={`text-3xl font-bold ${colors.text}`}>{kpi.value}</div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Burnout Risk Heatmap */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="glass-card rounded-2xl p-6 border border-white/10"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                            <AlertTriangle className="w-5 h-5 text-red-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Burnout Risk Heatmap</h3>
                            <p className="text-sm text-gray-400">Team workload analysis</p>
                        </div>
                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-3 gap-4">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + index * 0.05 }}
                                className="flex flex-col items-center"
                            >
                                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold text-xl mb-2 shadow-lg`}>
                                    {member.avatar}
                                </div>
                                <div className="text-sm font-semibold text-white mb-1">{member.name}</div>
                                <div className={`text-xs px-2 py-1 rounded-full ${member.workload === 'high' ? 'bg-red-500/20 text-red-400' :
                                        member.workload === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                            'bg-green-500/20 text-green-400'
                                    }`}>
                                    {member.risk}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Legend */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-6 text-xs">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-gray-400">Safe</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <span className="text-gray-400">Moderate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <span className="text-gray-400">High Risk</span>
                        </div>
                    </div>
                </motion.div>

                {/* Meeting ROI Analysis */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="glass-card rounded-2xl p-6 border border-white/10"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                            <Users className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white">Meeting ROI Analysis</h3>
                            <p className="text-sm text-gray-400">This week's efficiency</p>
                        </div>
                    </div>

                    {/* ROI Metrics */}
                    <div className="space-y-6">
                        <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                            <div className="text-sm text-gray-400 mb-2">Cost of Meetings</div>
                            <div className="text-4xl font-bold text-red-400">$12,400</div>
                            <div className="text-xs text-gray-500 mt-1">Based on team hourly rates</div>
                        </div>

                        <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                            <div className="text-sm text-gray-400 mb-2">Tasks Created</div>
                            <div className="text-4xl font-bold text-green-400">47</div>
                            <div className="text-xs text-gray-500 mt-1">From 12 meetings</div>
                        </div>

                        <div className="p-4 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-gray-400 mb-1">ROI Score</div>
                                    <div className="text-2xl font-bold text-cyan-400">3.8x</div>
                                </div>
                                <div className="text-xs text-gray-500 text-right">
                                    Tasks/Meeting<br />Ratio
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AtlasView;
