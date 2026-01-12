import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface KPICardsProps { }

const KPICards: React.FC<KPICardsProps> = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <KPICard
                title="Revenue YTD"
                value="$4.2M"
                change="+23%"
                changeLabel="vs last year"
                trend="up"
            />
            <KPICard
                title="Active Users"
                value="142K"
                change="+12%"
                changeLabel="this month"
                trend="up"
            />
            <KPICard
                title="Team Efficiency"
                value="94%"
                change="Stable"
                changeLabel=""
                trend="stable"
            />
        </div>
    );
};

interface KPICardProps {
    title: string;
    value: string;
    change: string;
    changeLabel: string;
    trend: 'up' | 'down' | 'stable';
}

const KPICard: React.FC<KPICardProps> = ({ title, value, change, changeLabel, trend }) => {
    const getTrendIcon = () => {
        switch (trend) {
            case 'up':
                return <TrendingUp className="w-4 h-4" />;
            case 'down':
                return <TrendingDown className="w-4 h-4" />;
            case 'stable':
                return <Minus className="w-4 h-4" />;
        }
    };

    const getTrendColor = () => {
        switch (trend) {
            case 'up':
                return 'text-neon-green';
            case 'down':
                return 'text-red-500';
            case 'stable':
                return 'text-yellow-500';
        }
    };

    return (
        <div className="glass-card rounded-xl p-6 hover:border-neon-cyan/30 transition-all duration-300 group">
            <div className="flex flex-col gap-4">
                <div className="text-sm font-medium text-gray-400">{title}</div>
                <div className="text-4xl font-bold text-white group-hover:text-gradient-cyan transition-all">
                    {value}
                </div>
                <div className={`flex items-center gap-2 text-sm font-semibold ${getTrendColor()}`}>
                    {getTrendIcon()}
                    <span>{change}</span>
                    {changeLabel && <span className="text-gray-500 font-normal">{changeLabel}</span>}
                </div>
            </div>
        </div>
    );
};

export default KPICards;
