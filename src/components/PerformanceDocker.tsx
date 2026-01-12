import { CheckCircle, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const PerformanceDocker: React.FC = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', damping: 20 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
            <div className="glass-effect rounded-full px-8 py-4 flex items-center gap-8 border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                <DockerItem
                    icon={CheckCircle}
                    label="Completed"
                    value="24"
                    color="text-green-400"
                />

                <div className="w-px h-8 bg-white/10" />

                <DockerItem
                    icon={Zap}
                    label="Velocity"
                    value="87%"
                    color="text-cyan-400"
                />

                <div className="w-px h-8 bg-white/10" />

                <DockerItem
                    icon={Target}
                    label="Focus"
                    value="6.2h"
                    color="text-purple-400"
                />
            </div>
        </motion.div>
    );
};

interface DockerItemProps {
    icon: React.ElementType;
    label: string;
    value: string;
    color: string;
}

const DockerItem: React.FC<DockerItemProps> = ({ icon: Icon, label, value, color }) => {
    return (
        <div className="flex items-center gap-3">
            <Icon className={`w-5 h-5 ${color}`} />
            <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-medium">{label}</span>
                <span className={`text-2xl font-mono font-bold ${color} tracking-tight`}>
                    {value}
                </span>
            </div>
        </div>
    );
};

export default PerformanceDocker;
