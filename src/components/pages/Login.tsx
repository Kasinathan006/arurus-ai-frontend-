import { motion } from 'framer-motion';
import { ArrowLeft, Zap } from 'lucide-react';
import { useState } from 'react';

interface LoginProps {
    onLogin: () => void;
    onBack: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onBack }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin();
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 relative overflow-hidden"
        >
            {/* Background Ambience */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
                <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px]" />
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Back Link */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back to Home</span>
                </button>

                {/* Login Card */}
                <div className="glass-card rounded-2xl p-8 border border-white/10 shadow-2xl backdrop-blur-xl">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-cyan-500/20">
                            <Zap className="w-6 h-6 text-white" fill="currentColor" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                        <p className="text-gray-400 text-sm">Sign in to access your Executive OS</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                placeholder="you@company.com"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1.5">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 mt-2"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <a href="#" className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">
                            Forgot your password?
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Login;
