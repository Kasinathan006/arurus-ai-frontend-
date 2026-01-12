import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import reportsService from '../../services/reportsService';

const ExecutionHealth: React.FC = () => {
    const [healthData, setHealthData] = useState({
        sprintProgress: 58,
        healthy: 40,
        atRisk: 18,
        blocked: 42,
        velocityAlert: 'Velocity dropped 15% due to API blockers.'
    });

    useEffect(() => {
        const fetchHealthData = async () => {
            try {
                const data = await reportsService.getExecutionHealth();
                setHealthData({
                    sprintProgress: data.sprintProgress || 58,
                    healthy: data.healthy || 40,
                    atRisk: data.atRisk || 18,
                    blocked: data.blocked || 42,
                    velocityAlert: data.velocityAlert || 'Velocity dropped 15% due to API blockers.'
                });
            } catch (error) {
                console.error('Failed to fetch execution health:', error);
                // Keep default data on error
            } finally {
                // Loading complete
            }
        };

        fetchHealthData();
    }, []);

    const data = [
        { name: 'Healthy', value: healthData.healthy, color: '#22c55e' },
        { name: 'At Risk', value: healthData.atRisk, color: '#eab308' },
        { name: 'Blocked', value: healthData.blocked, color: '#ef4444' },
    ];

    const percentage = healthData.sprintProgress;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-6 border border-white/10 relative overflow-hidden group hover:border-cyan-500/30 transition-all"
        >
            {/* Corner Icon */}
            <div className="absolute top-4 right-4">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
            </div>

            {/* Header */}
            <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">Execution Health</h3>
                <p className="text-sm text-gray-400">Sprint progress overview</p>
            </div>

            {/* Donut Chart */}
            <div className="relative h-48 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={2}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* Center Text */}
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="text-4xl font-bold text-white">{percentage}%</div>
                    <div className="text-xs text-gray-400">Overall</div>
                </div>
            </div>

            {/* Legend */}
            <div className="space-y-2 mb-4">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                            <span className="text-gray-300">{item.name}</span>
                        </div>
                        <span className="font-mono font-bold text-white">{item.value}%</span>
                    </div>
                ))}
            </div>

            {/* Warning Banner */}
            <div className="mt-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                    <div className="text-sm font-semibold text-yellow-400 mb-1">Velocity Alert</div>
                    <div className="text-xs text-gray-300">{healthData.velocityAlert}</div>
                </div>
            </div>
        </motion.div>
    );
};

export default ExecutionHealth;
