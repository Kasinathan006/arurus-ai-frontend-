import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageSquare, Settings, Activity } from 'lucide-react';

const LiaisonDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg glass-effect hover:bg-white/5 transition-all border border-cyan-500/20"
            >
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-sm font-medium text-cyan-400">Liaison AI</span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-30"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 top-full mt-2 w-64 glass-card border border-white/10 rounded-xl overflow-hidden z-40"
                        >
                            <div className="p-2">
                                <DropdownItem
                                    icon={MessageSquare}
                                    label="Ask Liaison (Chat)"
                                    onClick={() => {
                                        console.log('Opening chat...');
                                        setIsOpen(false);
                                    }}
                                />
                                <DropdownItem
                                    icon={Settings}
                                    label="Configure Personality"
                                    onClick={() => {
                                        console.log('Opening personality config...');
                                        setIsOpen(false);
                                    }}
                                />
                                <DropdownItem
                                    icon={Activity}
                                    label="View Activity Log"
                                    onClick={() => {
                                        console.log('Opening activity log...');
                                        setIsOpen(false);
                                    }}
                                />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

interface DropdownItemProps {
    icon: React.ElementType;
    label: string;
    onClick: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ icon: Icon, label, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors text-left"
        >
            <Icon className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">{label}</span>
        </button>
    );
};

export default LiaisonDropdown;
