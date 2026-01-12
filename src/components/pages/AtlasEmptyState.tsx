import { motion } from 'framer-motion';
import { Video, Zap, Users, Send, Mic } from 'lucide-react';

const AtlasEmptyState: React.FC = () => {
    return (
        <div className="flex-1 w-full bg-[#050505] flex flex-col">
            {/* Main Content Area */}
            <div className="flex-1 max-w-7xl mx-auto px-8 pt-12 pb-24 flex flex-col items-center justify-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Day 1 Setup
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Liaison</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
                        Execution, Mapped. Let's set up your first workspace.
                    </p>
                </motion.div>

                {/* Action Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
                    {/* Card 1: Sync Meetings */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group cursor-pointer relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative glass-card bg-[#0a0a0f] border border-white/10 p-8 rounded-2xl h-full flex flex-col items-center text-center hover:border-cyan-500/50 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Video className="w-8 h-8 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Sync Meetings</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Upload recording to start capturing execution signals instantly.
                            </p>
                            <div className="mt-auto">
                                <span className="text-cyan-400 text-sm font-medium group-hover:underline underline-offset-4">Connect Integration &rarr;</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Create First Sprint */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group cursor-pointer relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative glass-card bg-[#0a0a0f] border border-white/10 p-8 rounded-2xl h-full flex flex-col items-center text-center hover:border-purple-500/50 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Zap className="w-8 h-8 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Create First Sprint</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Define your goals and set velocity targets.
                            </p>
                            <div className="mt-auto">
                                <span className="text-purple-400 text-sm font-medium group-hover:underline underline-offset-4">Start Planning &rarr;</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Invite Team */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="group cursor-pointer relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative glass-card bg-[#0a0a0f] border border-white/10 p-8 rounded-2xl h-full flex flex-col items-center text-center hover:border-green-500/50 transition-colors">
                            <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-8 h-8 text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Invite Team</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Collaborate on ATLAS and delegate tasks.
                            </p>
                            <div className="mt-auto">
                                <span className="text-green-400 text-sm font-medium group-hover:underline underline-offset-4">Add Members &rarr;</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* AI Chat Interface (Bottom) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="w-full max-w-4xl"
                >
                    <div className="glass-card px-6 py-4 rounded-2xl border border-white/10 flex items-center gap-4 shadow-2xl backdrop-blur-md">
                        <input
                            type="text"
                            placeholder="Ask Liaison to analyze your sprint..."
                            className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
                        />
                        <div className="flex items-center gap-2">
                            <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 flex items-center justify-center transition-all group">
                                <Mic className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                            </button>
                            <button className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center transition-all hover:scale-105 shadow-lg shadow-cyan-500/25">
                                <Send className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default AtlasEmptyState;
