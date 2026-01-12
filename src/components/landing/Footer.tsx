import { Zap, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-white/5 bg-[#08080c] py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Left: Logo & Tagline */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                                <Zap className="w-6 h-6 text-white" fill="currentColor" />
                            </div>
                            <span className="text-2xl font-bold text-white">AURAS AI</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Eliminate administrative busywork and empower pure creation through autonomous AI.
                        </p>
                        <p className="text-xs text-gray-500 italic">
                            Our vision is to eliminate administrative busywork and empower pure creation through autonomous AI.
                        </p>
                    </div>

                    {/* Middle: Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#privacy" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#terms" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right: Social Icons */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 flex items-center justify-center transition-all group"
                            >
                                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 flex items-center justify-center transition-all group"
                            >
                                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 flex items-center justify-center transition-all group"
                            >
                                <Github className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-lg bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-500/50 flex items-center justify-center transition-all group"
                            >
                                <Mail className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="pt-8 border-t border-white/5 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; 2026 AURAS AI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
