import { Monitor, BarChart, LayoutDashboard, CheckSquare, Users, Video, BookOpen, Puzzle, Zap } from 'lucide-react';

interface SidebarProps { }

const Sidebar: React.FC<SidebarProps> = () => {
    return (
        <div className="fixed left-0 top-0 h-screen w-64 glass-card border-r border-dark-border flex flex-col">
            {/* Logo */}
            <div className="p-6 border-b border-dark-border">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-cyan to-blue-600 flex items-center justify-center neon-glow-cyan">
                        <Zap className="w-6 h-6 text-white" fill="white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">AURAS AI</span>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto scrollbar-hide p-4">
                {/* LAYERS Section */}
                <div className="mb-6">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                        Layers
                    </div>
                    <div className="space-y-1">
                        <div className="px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <Monitor className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan transition-colors" />
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                        Automation
                                    </div>
                                    <div className="text-xs text-gray-500">Desktop Agents</div>
                                </div>
                            </div>
                        </div>

                        <div className="px-3 py-2.5 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 cursor-pointer group">
                            <div className="flex items-center gap-3">
                                <BarChart className="w-5 h-5 text-neon-cyan" />
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-neon-cyan">
                                        ATLAS
                                    </div>
                                    <div className="text-xs text-neon-cyan/70">Execution, Mapped</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NAVIGATION Section */}
                <div>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
                        Navigation
                    </div>
                    <div className="space-y-1">
                        <NavItem icon={LayoutDashboard} label="Dashboard" active />
                        <NavItem icon={CheckSquare} label="My Tasks" badge="12" />
                        <NavItem icon={Users} label="Team View" />
                        <NavItem icon={Video} label="Meetings" badge="3" />
                        <NavItem icon={BookOpen} label="Knowledge Base" />
                        <NavItem icon={Puzzle} label="Integrations" statusDot />
                    </div>
                </div>
            </div>

            {/* User Profile */}
            <div className="p-4 border-t border-dark-border">
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-purple to-pink-600 flex items-center justify-center font-bold text-sm">
                        JD
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white truncate">James Davidson</div>
                        <div className="text-xs text-gray-500">CEO</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface NavItemProps {
    icon: React.ElementType;
    label: string;
    active?: boolean;
    badge?: string;
    statusDot?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, active, badge, statusDot }) => {
    return (
        <div
            className={`px-3 py-2.5 rounded-lg transition-all cursor-pointer group flex items-center gap-3 ${active ? 'bg-white/10 text-white' : 'hover:bg-white/5 text-gray-400'
                }`}
        >
            <Icon className={`w-5 h-5 ${active ? 'text-white' : 'group-hover:text-white'} transition-colors`} />
            <span className={`text-sm font-medium flex-1 ${active ? 'text-white' : 'group-hover:text-white'} transition-colors`}>
                {label}
            </span>
            {badge && (
                <span className="px-2 py-0.5 rounded-full bg-neon-cyan/20 text-neon-cyan text-xs font-semibold">
                    {badge}
                </span>
            )}
            {statusDot && (
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
            )}
        </div>
    );
};

export default Sidebar;
