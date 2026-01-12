import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface NavigationProps {
    onRequestAccess: () => void;
    onLogin: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onRequestAccess, onLogin }) => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10"
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                            <Zap className="w-6 h-6 text-white" fill="currentColor" />
                        </div>
                        <span className="text-2xl font-bold text-white tracking-tight">AURAS AI</span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#home" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                            Home
                        </a>
                        <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                            Features
                        </a>
                        <a href="#how-it-works" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                            How It Works
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                            About
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                            Contact
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-3">
                        {/* Login Button - Ghost Style */}
                        <button
                            onClick={onLogin}
                            className="px-6 py-2.5 rounded-lg bg-transparent border border-white/20 text-white font-semibold transition-all text-sm hover:bg-white/5 hover:border-white/30 hover:shadow-lg hover:shadow-white/10"
                        >
                            Login
                        </button>

                        {/* Request Access Button */}
                        <button
                            onClick={onRequestAccess}
                            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 text-sm hover:scale-105"
                        >
                            Request Access
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navigation;
