import { motion } from 'framer-motion';
import { Video, Clock } from 'lucide-react';

const MeetingHub: React.FC = () => {
    // Waveform animation data
    const bars = Array.from({ length: 20 }, (_, i) => i);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-2xl p-6 border border-white/10 relative overflow-hidden group hover:border-blue-500/30 transition-all"
        >
            {/* Corner Icon */}
            <div className="absolute top-4 right-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Video className="w-5 h-5 text-blue-400" />
                </div>
            </div>

            {/* Header */}
            <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">Meeting Hub</h3>
                <p className="text-sm text-gray-400">Live operations center</p>
            </div>

            {/* Animated Waveform */}
            <div className="mb-6 h-24 flex items-end justify-center gap-1">
                {bars.map((bar) => (
                    <motion.div
                        key={bar}
                        className="w-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-full"
                        animate={{
                            height: [
                                `${20 + Math.random() * 60}%`,
                                `${20 + Math.random() * 60}%`,
                                `${20 + Math.random() * 60}%`,
                            ],
                        }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: bar * 0.05,
                        }}
                    />
                ))}
            </div>

            {/* Next Meeting Info */}
            <div className="mb-6 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Next Meeting</span>
                </div>
                <div className="text-sm font-semibold text-white mb-1">Sprint Planning</div>
                <div className="text-xs text-gray-400">Starts in 2 minutes</div>
            </div>

            {/* Auto-Join Button with Pulsating Effect */}
            <motion.button
                animate={{
                    boxShadow: [
                        '0 0 0px rgba(59, 130, 246, 0)',
                        '0 0 30px rgba(59, 130, 246, 0.6)',
                        '0 0 0px rgba(59, 130, 246, 0)',
                    ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg shadow-2xl hover:scale-105 transition-transform relative overflow-hidden group"
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    <Video className="w-5 h-5" />
                    Auto-Join Meeting
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>

            {/* Footer Stats */}
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <div className="text-gray-500">
                    <span className="text-white font-semibold">3</span> meetings today
                </div>
                <div className="text-gray-500">
                    <span className="text-green-400 font-semibold">87%</span> attendance
                </div>
            </div>
        </motion.div>
    );
};

export default MeetingHub;
