import { motion } from 'framer-motion';
import { Video, Plus, UserPlus, BarChart, LayoutDashboard, CheckSquare, Users } from 'lucide-react';

const DashboardMockup: React.FC = () => {
    return (
        <section className="py-20 px-6">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-6xl mx-auto"
            >
                {/* Browser Window Frame */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    {/* Browser Controls */}
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-3 flex items-center gap-2 border-b border-white/10">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 mx-4">
                            <div className="bg-gray-700/50 rounded-lg px-4 py-1.5 text-xs text-gray-400 flex items-center gap-2">
                                <div className="w-3 h-3 text-gray-500">🔒</div>
                                <span>app.auras.ai</span>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="bg-gradient-to-br from-[#0a0a0f] to-[#0f0f1a] flex min-h-[600px]">
                        {/* Sidebar */}
                        <div className="w-64 border-r border-white/10 p-6">
                            {/* Logo */}
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                                    <span className="text-sm font-bold">A</span>
                                </div>
                                <span className="text-lg font-bold text-white">AURAS AI</span>
                            </div>

                            {/* Navigation */}
                            <div className="space-y-2">
                                {/* ATLAS - Active */}
                                <div className="px-3 py-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                                    <div className="flex items-center gap-3">
                                        <BarChart className="w-5 h-5 text-cyan-400" />
                                        <div>
                                            <div className="text-sm font-semibold text-cyan-400">ATLAS</div>
                                            <div className="text-xs text-cyan-400/70">Execution, Mapped</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Dashboard */}
                                <div className="px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <LayoutDashboard className="w-5 h-5 text-gray-400" />
                                        <div className="text-sm text-gray-300">Dashboard</div>
                                    </div>
                                </div>

                                {/* My Tasks */}
                                <div className="px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <CheckSquare className="w-5 h-5 text-gray-400" />
                                        <div className="flex-1 text-sm text-gray-300">My Tasks</div>
                                        <span className="px-2 py-0.5 rounded-full bg-gray-700 text-gray-400 text-xs">0</span>
                                    </div>
                                </div>

                                {/* Team View */}
                                <div className="px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <Users className="w-5 h-5 text-gray-400" />
                                        <div className="text-sm text-gray-300">Team View</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area - Empty State */}
                        <div className="flex-1 p-12 flex flex-col items-center justify-center">
                            {/* Header */}
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold text-white mb-3">ATLAS</h2>
                                <p className="text-lg text-gray-400">
                                    Let's map your execution. You have no active sprints yet.
                                </p>
                            </div>

                            {/* Action Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                                {/* Upload First Meeting */}
                                <motion.div
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    className="p-8 rounded-xl border-2 border-dashed border-gray-600 hover:border-cyan-500/50 transition-all cursor-pointer group"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                                            <Video className="w-8 h-8 text-cyan-400" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Upload First Meeting</h3>
                                        <p className="text-sm text-gray-400">AI will generate tasks automatically</p>
                                    </div>
                                </motion.div>

                                {/* Create Project */}
                                <motion.div
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    className="p-8 rounded-xl border-2 border-dashed border-gray-600 hover:border-purple-500/50 transition-all cursor-pointer group"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
                                            <Plus className="w-8 h-8 text-purple-400" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Create Project</h3>
                                        <p className="text-sm text-gray-400">Define your first sprint</p>
                                    </div>
                                </motion.div>

                                {/* Invite Team */}
                                <motion.div
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    className="p-8 rounded-xl border-2 border-dashed border-gray-600 hover:border-green-500/50 transition-all cursor-pointer group"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                                            <UserPlus className="w-8 h-8 text-green-400" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Invite Team</h3>
                                        <p className="text-sm text-gray-400">Add members to assign tasks</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default DashboardMockup;
