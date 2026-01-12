import React from 'react';
import { motion } from 'framer-motion';
import ExecutionHealth from '../widgets/ExecutionHealth';
import DiscussionLoops from '../widgets/DiscussionLoops';
import MeetingHub from '../widgets/MeetingHub';

const AtlasView: React.FC = () => {
    return (
        <div className="w-full space-y-8 p-6">
            {/* Main Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold text-white tracking-tight">ATLAS</h1>
                <p className="text-gray-400 mt-1">Execution, Mapped</p>

                {/* Specific Stats Line as requested */}
                <div className="mt-4 flex items-center gap-2 text-sm font-mono text-cyan-400/80 bg-cyan-900/10 px-3 py-1.5 rounded-md w-fit border border-cyan-500/10">
                    <span className="font-semibold text-cyan-300">Sprint Velocity: 87%</span>
                    <span className="text-white/20">/</span>
                    <span className="font-semibold text-green-400">Burnout Risk: Low</span>
                </div>
            </motion.div>

            {/* Widgets Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Execution Health - Donut Chart */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="col-span-1"
                >
                    <ExecutionHealth />
                </motion.div>

                {/* Discussion Loops - List */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="col-span-1"
                >
                    <DiscussionLoops />
                </motion.div>

                {/* Meeting Hub - Audio Waveform */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="col-span-1 lg:col-span-2 xl:col-span-1"
                >
                    <MeetingHub />
                </motion.div>
            </div>
        </div>
    );
};

export default AtlasView;
