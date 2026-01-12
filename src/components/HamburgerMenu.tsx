import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Monitor, BarChart, LayoutDashboard, Users, Settings, CheckSquare, Video, BookOpen, Puzzle } from 'lucide-react';

interface HamburgerMenuProps {
    onNavigate: (page: string) => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavigation = (page: string) => {
        onNavigate(page);
        setIsOpen(false);
    };

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Menu"
            >
                <Menu className="w-6 h-6 text-gray-300" />
            </button>

            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleMenu}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                    />
                )}
            </AnimatePresence>

            {/* Slide-out Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: -320 }}
                        animate={{ x: 0 }}
                        exit={{ x: -320 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed left-0 top-0 h-screen w-80 glass-card border-r border-white/10 z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                                    <span className="text-xl font-bold">A</span>
                                </div>
                                <span className="text-xl font-bold tracking-tight">AURAS AI</span>
                            </div>
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-400" />
                            </button>
                        </div>

                        {/* Navigation Content */}
                        <div className="flex-1 overflow-y-auto p-4">
                            {/* LAYERS Section */}
                            <div className="mb-6">
                                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                                    Layers
                                </div>
                                <div className="space-y-1">
                                    <NavItem
                                        icon={Monitor}
                                        label="Automation"
                                        subtitle="Desktop Agents"
                                        onClick={() => handleNavigation('automation')}
                                    />
                                    <NavItem
                                        icon={BarChart}
                                        label="ATLAS"
                                        subtitle="Execution, Mapped"
                                        onClick={() => handleNavigation('strategy')}
                                    />
                                </div>
                            </div>

                            {/* NAVIGATION Section */}
                            <div>
                                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                                    Navigation
                                </div>
                                <div className="space-y-1">
                                    <NavItem
                                        icon={LayoutDashboard}
                                        label="Dashboard"
                                        onClick={() => handleNavigation('dashboard')}
                                        active
                                    />
                                    <NavItem
                                        icon={CheckSquare}
                                        label="My Tasks"
                                        onClick={() => handleNavigation('tasks')}
                                        badge="12"
                                    />
                                    <NavItem
                                        icon={Users}
                                        label="Team View"
                                        onClick={() => handleNavigation('teams')}
                                    />
                                    <NavItem
                                        icon={Video}
                                        label="Meetings"
                                        onClick={() => handleNavigation('meetings')}
                                        badge="3"
                                    />
                                    <NavItem
                                        icon={BookOpen}
                                        label="Knowledge Base"
                                        onClick={() => handleNavigation('knowledge')}
                                    />
                                    <NavItem
                                        icon={Puzzle}
                                        label="Integrations"
                                        onClick={() => handleNavigation('integrations')}
                                        statusDot
                                    />
                                    <NavItem
                                        icon={Settings}
                                        label="Settings"
                                        onClick={() => handleNavigation('settings')}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* User Profile Section */}
                        <div className="p-4 border-t border-white/10">
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center font-bold text-white text-lg flex-shrink-0">
                                    JD
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-semibold text-white">James Davidson</div>
                                    <div className="text-xs text-gray-400">Chief Executive Officer</div>
                                    <div className="text-xs text-gray-500 mt-0.5">Board Review</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

interface NavItemProps {
    icon: React.ElementType;
    label: string;
    subtitle?: string;
    onClick: () => void;
    active?: boolean;
    badge?: string;
    statusDot?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, subtitle, onClick, active, badge, statusDot }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full px-3 py-2.5 rounded-lg transition-all text-left flex items-center gap-3 ${active
                ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
                : 'hover:bg-white/5 text-gray-300'
                }`}
        >
            <Icon className={`w-5 h-5 ${active ? 'text-cyan-400' : 'text-gray-400'}`} />
            <div className="flex-1">
                <div className={`text-sm font-medium ${active ? 'text-cyan-400' : 'text-gray-300'}`}>
                    {label}
                </div>
                {subtitle && (
                    <div className={`text-xs ${active ? 'text-cyan-400/70' : 'text-gray-500'}`}>
                        {subtitle}
                    </div>
                )}
            </div>
            {badge && (
                <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-xs font-bold border border-red-500/30">
                    {badge}
                </span>
            )}
            {statusDot && (
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            )}
        </button>
    );
};

export default HamburgerMenu;
