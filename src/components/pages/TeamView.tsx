import { motion } from 'framer-motion';
import { TrendingUp, Activity } from 'lucide-react';

const TeamView: React.FC = () => {
    const teamMembers = [
        {
            name: 'Sarah Chen',
            role: 'VP Engineering',
            avatar: 'SC',
            status: 'online',
            tasks: 12,
            velocity: 94,
            department: 'Engineering',
        },
        {
            name: 'Marcus Johnson',
            role: 'Head of Product',
            avatar: 'MJ',
            status: 'online',
            tasks: 8,
            velocity: 87,
            department: 'Product',
        },
        {
            name: 'Emily Rodriguez',
            role: 'Marketing Director',
            avatar: 'ER',
            status: 'away',
            tasks: 15,
            velocity: 92,
            department: 'Marketing',
        },
        {
            name: 'David Kim',
            role: 'Sales Lead',
            avatar: 'DK',
            status: 'online',
            tasks: 10,
            velocity: 78,
            department: 'Sales',
        },
        {
            name: 'Lisa Anderson',
            role: 'Customer Success',
            avatar: 'LA',
            status: 'offline',
            tasks: 6,
            velocity: 85,
            department: 'CS',
        },
        {
            name: 'Alex Thompson',
            role: 'Design Lead',
            avatar: 'AT',
            status: 'online',
            tasks: 9,
            velocity: 91,
            department: 'Design',
        },
    ];

    const departments = [
        { name: 'Engineering', members: 24, velocity: 89, color: 'bg-blue-500' },
        { name: 'Product', members: 12, velocity: 76, color: 'bg-purple-500' },
        { name: 'Marketing', members: 18, velocity: 92, color: 'bg-green-500' },
        { name: 'Sales', members: 15, velocity: 68, color: 'bg-orange-500' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-7xl mx-auto"
        >
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Team View</h1>
                <p className="text-lg text-gray-400">Organization-wide performance overview</p>
            </div>

            {/* Department Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {departments.map((dept, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card rounded-xl p-5 border border-white/5"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className={`w-3 h-3 rounded-full ${dept.color}`} />
                            <h3 className="text-lg font-semibold text-white">{dept.name}</h3>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-2xl font-mono font-bold text-cyan-400">{dept.members}</div>
                                <div className="text-xs text-gray-500">Members</div>
                            </div>
                            <div>
                                <div className="text-2xl font-mono font-bold text-green-400">{dept.velocity}%</div>
                                <div className="text-xs text-gray-500">Velocity</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Team Members Grid */}
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-4">Leadership Team</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="glass-card rounded-xl p-5 border border-white/5 hover:border-cyan-500/30 transition-all cursor-pointer group"
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-white">
                                        {member.avatar}
                                    </div>
                                    <div
                                        className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-dark ${member.status === 'online'
                                            ? 'bg-green-400'
                                            : member.status === 'away'
                                                ? 'bg-yellow-400'
                                                : 'bg-gray-400'
                                            }`}
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-sm text-gray-400">{member.role}</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 rounded-lg bg-white/5">
                                <div className="flex items-center gap-2 mb-1">
                                    <Activity className="w-4 h-4 text-cyan-400" />
                                    <span className="text-xs text-gray-500">Tasks</span>
                                </div>
                                <div className="text-xl font-mono font-bold text-white">{member.tasks}</div>
                            </div>
                            <div className="p-3 rounded-lg bg-white/5">
                                <div className="flex items-center gap-2 mb-1">
                                    <TrendingUp className="w-4 h-4 text-green-400" />
                                    <span className="text-xs text-gray-500">Velocity</span>
                                </div>
                                <div className="text-xl font-mono font-bold text-green-400">{member.velocity}%</div>
                            </div>
                        </div>

                        {/* Department Badge */}
                        <div className="mt-4">
                            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
                                {member.department}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default TeamView;
