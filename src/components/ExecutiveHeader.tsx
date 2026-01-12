import HamburgerMenu from './HamburgerMenu';

interface ExecutiveHeaderProps {
    onNavigate: (page: string) => void;
}

const ExecutiveHeader: React.FC<ExecutiveHeaderProps> = ({ onNavigate }) => {
    return (
        <header className="fixed top-0 left-0 right-0 h-16 glass-card border-b border-white/5 z-30">
            <div className="h-full px-6 flex items-center justify-between">
                {/* Left: Hamburger Menu */}
                <div className="flex items-center gap-4">
                    <HamburgerMenu onNavigate={onNavigate} />
                </div>

                {/* Center/Right: Top Stats Ticker - Fixed (No Hover) */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Sprint Velocity:</span>
                        <span className="text-sm font-mono font-bold text-cyan-400">87%</span>
                    </div>

                    <span className="text-gray-600">/</span>

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Burnout Risk:</span>
                        <span className="text-sm font-mono font-bold text-green-400">Low</span>
                    </div>

                    <span className="text-gray-600">/</span>

                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Active Agents:</span>
                        <span className="text-sm font-mono font-bold text-cyan-400">12</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default ExecutiveHeader;
