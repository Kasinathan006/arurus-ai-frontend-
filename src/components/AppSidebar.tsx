import { Monitor, Brain, Map, LayoutDashboard, CheckSquare, Users, Video, Puzzle, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

interface AppSidebarProps {
    currentView: string;
    onNavigate: (view: string) => void;
}

const AppSidebar: React.FC<AppSidebarProps> = ({ currentView, onNavigate }) => {
    return (
        <div className="fixed left-0 top-0 h-screen w-64 glass-card border-r border-white/10 flex flex-col z-40">
            {/* Header */}
            <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                        <span className="text-xl font-bold">A</span>
                    </div>
                    <span className="text-xl font-bold text-white">AURAS AI</span>
                </div>
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
                            onClick={() => onNavigate('automation')}
                            active={currentView === 'automation'}
                        />

                        {/* LIAISON - With Pulse Animation */}
                        <motion.div
                            animate={{
                                boxShadow: [
                                    '0 0 0px rgba(168, 85, 247, 0)',
                                    '0 0 20px rgba(168, 85, 247, 0.4)',
                                    '0 0 0px rgba(168, 85, 247, 0)',
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            className="rounded-lg"
                        >
                            <NavItem
                                icon={Brain}
                                label="LIAISON"
                                subtitle="AI Agent"
                                onClick={() => onNavigate('liaison')}
                                active={currentView === 'liaison'}
                                special="purple"
                            />
                        </motion.div>

                        <NavItem
                            icon={Map}
                            label="ATLAS"
                            subtitle="Execution, Mapped"
                            onClick={() => onNavigate('atlas')}
                            active={currentView === 'atlas'}
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
                            onClick={() => onNavigate('dashboard')}
                            active={currentView === 'dashboard'}
                        />
                        <NavItem
                            icon={CheckSquare}
                            label="My Tasks"
                            onClick={() => onNavigate('tasks')}
                            badge="12"
                        />
                        <NavItem
                            icon={Users}
                            label="Team View"
                            onClick={() => onNavigate('teams')}
                        />
                        <NavItem
                            icon={Video}
                            label="Meetings"
                            onClick={() => onNavigate('meetings')}
                            badge="3"
                        />
                        <NavItem
                            icon={Puzzle}
                            label="Integrations"
                            onClick={() => onNavigate('integrations')}
                            statusDot
                        />
                        <NavItem
                            icon={Settings}
                            label="Settings"
                            onClick={() => onNavigate('settings')}
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
                        <div className="text-xs text-gray-400">CEO</div>
                    </div>
                </div>
            </div>
        </div>
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
    special?: 'purple';
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, subtitle, onClick, active, badge, statusDot, special }) => {
    const isPurple = special === 'purple';

    return (
        <button
            onClick={onClick}
            className={`w-full px-3 py-2.5 rounded-lg transition-all text-left flex items-center gap-3 ${active
                ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
                : isPurple
                    ? 'bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20'
                    : 'hover:bg-white/5 text-gray-300'
                }`}
        >
            <Icon className={`w-5 h-5 ${active ? 'text-cyan-400' : isPurple ? 'text-purple-400' : 'text-gray-400'}`} />
            <div className="flex-1">
                <div className={`text-sm font-medium ${active ? 'text-cyan-400' : isPurple ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400' : 'text-gray-300'}`}>
                    {label}
                </div>
                {subtitle && (
                    <div className={`text-xs ${active ? 'text-cyan-400/70' : isPurple ? 'text-purple-400/70' : 'text-gray-500'}`}>
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

export default AppSidebar;
