import { motion } from 'framer-motion';
import { User, Bell, Shield, Palette, Zap, Globe, Moon, Sun, Volume2, Mail, Smartphone } from 'lucide-react';
import { useState } from 'react';

const Settings: React.FC = () => {
    const [darkMode, setDarkMode] = useState(true);
    const [notifications, setNotifications] = useState(true);
    const [emailAlerts, setEmailAlerts] = useState(true);
    const [soundEffects, setSoundEffects] = useState(false);
    const [autoJoinMeetings, setAutoJoinMeetings] = useState(true);
    const [aiAutonomy, setAiAutonomy] = useState(75);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-7xl mx-auto"
        >
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
                <p className="text-lg text-gray-400">Customize your Executive OS experience</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Profile & Account */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Profile Section */}
                    <div className="glass-card rounded-xl p-6 border border-white/5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                <User className="w-5 h-5 text-cyan-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Profile</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-bold text-2xl text-white">
                                    JD
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-white">James Davidson</h3>
                                    <p className="text-sm text-gray-400">CEO, AURAS AI</p>
                                    <p className="text-sm text-gray-500">james.davidson@auras.ai</p>
                                </div>
                                <button className="px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">
                                    Edit Profile
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="p-4 rounded-lg bg-white/5">
                                    <div className="text-sm text-gray-500 mb-1">Role</div>
                                    <div className="text-lg font-semibold text-white">Chief Executive Officer</div>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5">
                                    <div className="text-sm text-gray-500 mb-1">Department</div>
                                    <div className="text-lg font-semibold text-white">Executive</div>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5">
                                    <div className="text-sm text-gray-500 mb-1">Location</div>
                                    <div className="text-lg font-semibold text-white">San Francisco, CA</div>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5">
                                    <div className="text-sm text-gray-500 mb-1">Timezone</div>
                                    <div className="text-lg font-semibold text-white">PST (UTC-8)</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Preferences Section */}
                    <div className="glass-card rounded-xl p-6 border border-white/5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                                <Palette className="w-5 h-5 text-purple-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Preferences</h2>
                        </div>

                        <div className="space-y-6">
                            {/* Dark Mode */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {darkMode ? (
                                        <Moon className="w-5 h-5 text-cyan-400" />
                                    ) : (
                                        <Sun className="w-5 h-5 text-yellow-400" />
                                    )}
                                    <div>
                                        <div className="text-sm font-semibold text-white">Dark Mode</div>
                                        <div className="text-xs text-gray-500">Use dark theme across the app</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setDarkMode(!darkMode)}
                                    className={`relative w-14 h-7 rounded-full transition-colors ${darkMode ? 'bg-cyan-500' : 'bg-gray-600'
                                        }`}
                                >
                                    <div
                                        className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${darkMode ? 'translate-x-8' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                            </div>

                            {/* Sound Effects */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Volume2 className="w-5 h-5 text-purple-400" />
                                    <div>
                                        <div className="text-sm font-semibold text-white">Sound Effects</div>
                                        <div className="text-xs text-gray-500">Play sounds for notifications</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSoundEffects(!soundEffects)}
                                    className={`relative w-14 h-7 rounded-full transition-colors ${soundEffects ? 'bg-purple-500' : 'bg-gray-600'
                                        }`}
                                >
                                    <div
                                        className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${soundEffects ? 'translate-x-8' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                            </div>

                            {/* Auto-join Meetings */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-green-400" />
                                    <div>
                                        <div className="text-sm font-semibold text-white">Auto-join Meetings</div>
                                        <div className="text-xs text-gray-500">Automatically join scheduled meetings</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setAutoJoinMeetings(!autoJoinMeetings)}
                                    className={`relative w-14 h-7 rounded-full transition-colors ${autoJoinMeetings ? 'bg-green-500' : 'bg-gray-600'
                                        }`}
                                >
                                    <div
                                        className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${autoJoinMeetings ? 'translate-x-8' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                            </div>

                            {/* AI Autonomy Level */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <Zap className="w-5 h-5 text-cyan-400" />
                                        <div>
                                            <div className="text-sm font-semibold text-white">AI Autonomy Level</div>
                                            <div className="text-xs text-gray-500">How much freedom AI agents have</div>
                                        </div>
                                    </div>
                                    <span className="text-lg font-mono font-bold text-cyan-400">{aiAutonomy}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={aiAutonomy}
                                    onChange={(e) => setAiAutonomy(Number(e.target.value))}
                                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                                    style={{
                                        background: `linear-gradient(to right, #06b6d4 0%, #06b6d4 ${aiAutonomy}%, #374151 ${aiAutonomy}%, #374151 100%)`,
                                    }}
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-1">
                                    <span>Manual</span>
                                    <span>Autonomous</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security Section */}
                    <div className="glass-card rounded-xl p-6 border border-white/5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                <Shield className="w-5 h-5 text-red-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">Security</h2>
                        </div>

                        <div className="space-y-4">
                            <button className="w-full p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm font-semibold text-white">Change Password</div>
                                        <div className="text-xs text-gray-500">Last changed 30 days ago</div>
                                    </div>
                                    <div className="text-cyan-400">→</div>
                                </div>
                            </button>

                            <button className="w-full p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm font-semibold text-white">Two-Factor Authentication</div>
                                        <div className="text-xs text-green-400">✓ Enabled</div>
                                    </div>
                                    <div className="text-cyan-400">→</div>
                                </div>
                            </button>

                            <button className="w-full p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm font-semibold text-white">Active Sessions</div>
                                        <div className="text-xs text-gray-500">3 devices currently logged in</div>
                                    </div>
                                    <div className="text-cyan-400">→</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column - Notifications & Quick Actions */}
                <div className="space-y-6">
                    {/* Notifications */}
                    <div className="glass-card rounded-xl p-6 border border-white/5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                                <Bell className="w-5 h-5 text-orange-400" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Notifications</h2>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Bell className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-white">Push Notifications</span>
                                </div>
                                <button
                                    onClick={() => setNotifications(!notifications)}
                                    className={`relative w-12 h-6 rounded-full transition-colors ${notifications ? 'bg-orange-500' : 'bg-gray-600'
                                        }`}
                                >
                                    <div
                                        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${notifications ? 'translate-x-7' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-white">Email Alerts</span>
                                </div>
                                <button
                                    onClick={() => setEmailAlerts(!emailAlerts)}
                                    className={`relative w-12 h-6 rounded-full transition-colors ${emailAlerts ? 'bg-orange-500' : 'bg-gray-600'
                                        }`}
                                >
                                    <div
                                        className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${emailAlerts ? 'translate-x-7' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Smartphone className="w-4 h-4 text-gray-400" />
                                    <span className="text-sm text-white">SMS Alerts</span>
                                </div>
                                <button className="relative w-12 h-6 rounded-full bg-gray-600">
                                    <div className="absolute top-1 w-4 h-4 rounded-full bg-white translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Language & Region */}
                    <div className="glass-card rounded-xl p-6 border border-white/5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                <Globe className="w-5 h-5 text-blue-400" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Region</h2>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <label className="text-xs text-gray-500 mb-1 block">Language</label>
                                <select className="w-full p-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500/50">
                                    <option>English (US)</option>
                                    <option>English (UK)</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 mb-1 block">Date Format</label>
                                <select className="w-full p-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500/50">
                                    <option>MM/DD/YYYY</option>
                                    <option>DD/MM/YYYY</option>
                                    <option>YYYY-MM-DD</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 mb-1 block">Time Format</label>
                                <select className="w-full p-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500/50">
                                    <option>12-hour</option>
                                    <option>24-hour</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="glass-card rounded-xl p-6 border border-white/5">
                        <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
                        <div className="space-y-2">
                            <button className="w-full px-4 py-3 rounded-lg bg-cyan-500/10 text-cyan-400 text-sm font-semibold hover:bg-cyan-500/20 transition-colors border border-cyan-500/20">
                                Export Data
                            </button>
                            <button className="w-full px-4 py-3 rounded-lg bg-purple-500/10 text-purple-400 text-sm font-semibold hover:bg-purple-500/20 transition-colors border border-purple-500/20">
                                Download Reports
                            </button>
                            <button className="w-full px-4 py-3 rounded-lg bg-red-500/10 text-red-400 text-sm font-semibold hover:bg-red-500/20 transition-colors border border-red-500/20">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Settings;
