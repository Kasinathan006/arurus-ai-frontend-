import { ChevronDown } from 'lucide-react';

interface TopBarProps { }

const TopBar: React.FC<TopBarProps> = () => {
    return (
        <div className="fixed top-0 left-64 right-0 h-16 glass-card border-b border-dark-border flex items-center justify-between px-6 z-10">
            {/* Stats */}
            <div className="flex items-center gap-8">
                <StatItem label="Sprint Velocity" value="87%" color="cyan" />
                <StatItem label="Burnout Risk" value="Low" color="green" />
                <StatItem label="Active Agents" value="12" color="purple" />
            </div>

            {/* Dropdown */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-lg glass-effect hover:bg-white/5 transition-all cursor-pointer">
                <span className="text-sm font-medium">Liaison AI</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
        </div>
    );
};

interface StatItemProps {
    label: string;
    value: string;
    color: 'cyan' | 'green' | 'purple';
}

const StatItem: React.FC<StatItemProps> = ({ label, value, color }) => {
    const colorClasses = {
        cyan: 'text-neon-cyan',
        green: 'text-neon-green',
        purple: 'text-neon-purple',
    };

    return (
        <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">{label}:</span>
            <span className={`text-sm font-bold ${colorClasses[color]}`}>{value}</span>
        </div>
    );
};

export default TopBar;
