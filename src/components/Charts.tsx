import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartsProps { }

const performanceData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 72 },
    { month: 'Mar', value: 68 },
    { month: 'Apr', value: 78 },
    { month: 'May', value: 85 },
    { month: 'Jun', value: 92 },
];

const Charts: React.FC<ChartsProps> = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Quarterly Performance Chart */}
            <div className="lg:col-span-2 glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Quarterly Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" />
                        <XAxis
                            dataKey="month"
                            stroke="#6b7280"
                            style={{ fontSize: '12px' }}
                        />
                        <YAxis
                            stroke="#6b7280"
                            style={{ fontSize: '12px' }}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#0a0a0a',
                                border: '1px solid #1a1a1a',
                                borderRadius: '8px',
                                color: '#fff',
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#06b6d4"
                            strokeWidth={3}
                            dot={{ fill: '#06b6d4', r: 5 }}
                            activeDot={{ r: 7, fill: '#06b6d4' }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Department Breakdown */}
            <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-6">Department Breakdown</h3>
                <div className="space-y-6">
                    <DepartmentBar label="Engineering" value={89} color="bg-blue-500" />
                    <DepartmentBar label="Product" value={76} color="bg-neon-purple" />
                    <DepartmentBar label="Marketing" value={92} color="bg-neon-green" />
                    <DepartmentBar label="Sales" value={68} color="bg-neon-orange" />
                </div>
            </div>
        </div>
    );
};

interface DepartmentBarProps {
    label: string;
    value: number;
    color: string;
}

const DepartmentBar: React.FC<DepartmentBarProps> = ({ label, value, color }) => {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{label}</span>
                <span className="font-bold text-white">{value}%</span>
            </div>
            <div className="w-full h-2 bg-dark-border rounded-full overflow-hidden">
                <div
                    className={`h-full ${color} rounded-full transition-all duration-500`}
                    style={{ width: `${value}%` }}
                />
            </div>
        </div>
    );
};

export default Charts;
