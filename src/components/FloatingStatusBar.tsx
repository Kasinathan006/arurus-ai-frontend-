import { CheckCircle, Zap, Clock } from 'lucide-react';

interface FloatingStatusBarProps { }

const FloatingStatusBar: React.FC<FloatingStatusBarProps> = () => {
    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="glass-effect rounded-full px-8 py-4 flex items-center gap-8 neon-glow-cyan">
                <StatusItem icon={CheckCircle} label="Completed" value="24" color="text-neon-green" />
                <div className="w-px h-8 bg-white/10" />
                <StatusItem icon={Zap} label="Velocity" value="87%" color="text-neon-cyan" />
                <div className="w-px h-8 bg-white/10" />
                <StatusItem icon={Clock} label="Focus" value="6.2h" color="text-neon-purple" />
            </div>
        </div>
    );
};

interface StatusItemProps {
    icon: React.ElementType;
    label: string;
    value: string;
    color: string;
}

const StatusItem: React.FC<StatusItemProps> = ({ icon: Icon, label, value, color }) => {
    return (
        <div className="flex items-center gap-3">
            <Icon className={`w-5 h-5 ${color}`} />
            <div className="flex items-baseline gap-2">
                <span className="text-xs text-gray-400 font-medium">{label}</span>
                <span className={`text-sm font-bold ${color}`}>{value}</span>
            </div>
        </div>
    );
};

export default FloatingStatusBar;
