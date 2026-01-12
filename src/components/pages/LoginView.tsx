import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, Zap } from 'lucide-react';
import { useState } from 'react';
import authService from '../../services/authService';

interface LoginViewProps {
    onLoginSuccess: () => void;
    onRequestAccess: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLoginSuccess, onRequestAccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        setError(null);

        try {
            // In production, this would trigger Google OAuth flow
            // For now, simulate with a test token
            // await authService.googleLogin('google-oauth-token');

            // Temporary: Simulate successful login
            await new Promise(resolve => setTimeout(resolve, 1500));
            onLoginSuccess();
        } catch (err: any) {
            setError(err.message || 'Google login failed');
        } finally {
            setIsLoading(false);
        }
    };

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            // Real API call to Auth Service (Port 3001)
            await authService.login({ email, password });
            onLoginSuccess();
        } catch (err: any) {
            setError(err.message || 'Login failed. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="min-h-screen bg-[#050505] flex items-center justify-center p-6"
        >
            {/* Split Screen Layout */}
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden glass-card border border-white/10">

                {/* Left Pane - Visual/Branding */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden lg:flex flex-col items-center justify-center p-16 bg-gradient-to-br from-[#050505] via-[#0a0a0f] to-[#050505] relative overflow-hidden"
                >
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    </div>

                    {/* Logo */}
                    <div className="relative z-10 mb-8">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                            <Zap className="w-12 h-12 text-white" fill="currentColor" />
                        </div>
                    </div>

                    {/* Brand Text */}
                    <h2 className="relative z-10 text-4xl font-bold text-white mb-4 text-center">
                        AURAS AI
                    </h2>
                    <p className="relative z-10 text-xl text-gray-300 text-center max-w-md leading-relaxed">
                        "Automating execution for high-velocity teams."
                    </p>

                    {/* Decorative Elements */}
                    <div className="relative z-10 mt-12 flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-200"></div>
                        <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse delay-500"></div>
                    </div>
                </motion.div>

                {/* Right Pane - Auth Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col justify-center p-12 lg:p-16 bg-[#08080c]"
                >
                    {/* Header */}
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
                        <p className="text-gray-400 text-lg">Sign in to your Liaison workspace.</p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                        >
                            {error}
                        </motion.div>
                    )}

                    {/* Social Auth - Google */}
                    <button
                        onClick={handleGoogleLogin}
                        disabled={isLoading}
                        className="w-full py-4 px-6 rounded-xl bg-white hover:bg-gray-50 text-gray-900 font-semibold text-base flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed mb-6"
                    >
                        {isLoading ? (
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                        ) : (
                            <>
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Continue with Google
                            </>
                        )}
                    </button>

                    {/* Divider */}
                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-[#08080c] text-gray-500">Or continue with email</span>
                        </div>
                    </div>

                    {/* Email/Password Form */}
                    <form onSubmit={handleEmailLogin} className="space-y-5">
                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@company.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-12 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                                Forgot password?
                            </button>
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Signing in...
                                </span>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-400">
                            Don't have an account?{' '}
                            <button
                                onClick={onRequestAccess}
                                className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                            >
                                Request Access
                            </button>
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LoginView;
