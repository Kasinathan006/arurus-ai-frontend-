import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, PieChart, Activity } from 'lucide-react';

const StrategyDashboard: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-7xl mx-auto"
        >
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">ATLAS</h1>
                <p className="text-lg text-gray-400">Execution, Mapped</p>
            </div>

            {/* Placeholder Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Chart Placeholder 1 */}
                <div className="glass-card rounded-2xl p-8 border border-white/5">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <BarChart3 className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Revenue Analytics</h3>
                            <p className="text-sm text-gray-500">Quarterly breakdown</p>
                        </div>
                    </div>
                    <div className="h-64 flex items-center justify-center bg-white/5 rounded-lg border border-white/5">
                        <p className="text-gray-500">Chart visualization here</p>
                    </div>
                </div>

                {/* Chart Placeholder 2 */}
                <div className="glass-card rounded-2xl p-8 border border-white/5">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Growth Metrics</h3>
                            <p className="text-sm text-gray-500">YoY comparison</p>
                        </div>
                    </div>
                    <div className="h-64 flex items-center justify-center bg-white/5 rounded-lg border border-white/5">
                        <p className="text-gray-500">Chart visualization here</p>
                    </div>
                </div>

                {/* Chart Placeholder 3 */}
                <div className="glass-card rounded-2xl p-8 border border-white/5">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                            <PieChart className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Market Share</h3>
                            <p className="text-sm text-gray-500">Distribution analysis</p>
                        </div>
                    </div>
                    <div className="h-64 flex items-center justify-center bg-white/5 rounded-lg border border-white/5">
                        <p className="text-gray-500">Chart visualization here</p>
                    </div>
                </div>

                {/* Chart Placeholder 4 */}
                <div className="glass-card rounded-2xl p-8 border border-white/5">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                            <Activity className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Team Performance</h3>
                            <p className="text-sm text-gray-500">Efficiency scores</p>
                        </div>
                    </div>
                    <div className="h-64 flex items-center justify-center bg-white/5 rounded-lg border border-white/5">
                        <p className="text-gray-500">Chart visualization here</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default StrategyDashboard;
