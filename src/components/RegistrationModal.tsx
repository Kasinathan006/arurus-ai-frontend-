import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, User, Briefcase } from 'lucide-react';
import { useState } from 'react';

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onComplete: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, onComplete }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'Founder',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsLoading(false);
        onComplete();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="glass-card w-full max-w-md rounded-2xl p-8 border border-white/10 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-400" />
                            </button>

                            {/* Header */}
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-white mb-2">Join the Waitlist</h2>
                                <p className="text-gray-400">Get early access to AURAS AI and transform your workflow.</p>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Full Name
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Work Email
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="you@company.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Role Dropdown */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Role
                                    </label>
                                    <div className="relative">
                                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                                        <select
                                            value={formData.role}
                                            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg pl-11 pr-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-colors appearance-none cursor-pointer"
                                        >
                                            <option value="Founder" className="bg-[#0a0a0f]">Founder</option>
                                            <option value="PM" className="bg-[#0a0a0f]">Product Manager</option>
                                            <option value="Engineer" className="bg-[#0a0a0f]">Engineer</option>
                                            <option value="Designer" className="bg-[#0a0a0f]">Designer</option>
                                            <option value="Other" className="bg-[#0a0a0f]">Other</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden"
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Processing...
                                        </span>
                                    ) : (
                                        'Enter Workspace'
                                    )}
                                </button>
                            </form>

                            {/* Footer */}
                            <p className="text-xs text-gray-500 text-center mt-6">
                                By joining, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default RegistrationModal;
