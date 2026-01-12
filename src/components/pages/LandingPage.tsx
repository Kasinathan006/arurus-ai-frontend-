import Navigation from '../landing/Navigation';
import HeroSection from '../landing/HeroSection';
import DashboardMockup from '../landing/DashboardMockup';
import { BuiltForYou } from '../landing/ProblemSolution';
import FeatureGrid from '../landing/FeatureGrid';
import Footer from '../landing/Footer';

interface LandingPageProps {
    onRequestAccess: () => void;
    onLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onRequestAccess, onLogin }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#050505] via-[#0a0a0f] to-[#050505]">
            <Navigation onRequestAccess={onRequestAccess} onLogin={onLogin} />
            <main>
                <section id="home">
                    <HeroSection onRequestAccess={onRequestAccess} />
                </section>

                {/* Dashboard Mockup Preview */}
                <DashboardMockup />

                {/* Built For You */}
                <BuiltForYou />

                {/* Features */}
                <section id="features">
                    <FeatureGrid />
                </section>

                {/* How it Works */}
                <section id="how-it-works" className="py-24 px-6 border-t border-white/5">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">How It Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { step: 1, title: 'Connect', desc: 'Link your Zoom, Meet, or upload recordings' },
                                { step: 2, title: 'Capture', desc: 'AI extracts tasks, decisions, and blockers' },
                                { step: 3, title: 'Execute', desc: 'Auto-sync to your tools and track progress' },
                            ].map((item) => (
                                <div key={item.step} className="glass-card p-8 rounded-2xl border border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl text-white font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About & Vision */}
                <section id="about" className="py-24 px-6 border-t border-white/5 bg-[#08080c]">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">About & Vision</h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-6">
                            Our vision is to eliminate administrative busywork and empower pure creation through autonomous AI.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Founded by a team of ex-Google, Meta, and OpenAI engineers, AURAS AI is on a mission
                            to unlock human potential by automating the mundane and amplifying the creative.
                        </p>
                    </div>
                </section>

                {/* Contact */}
                <section id="contact" className="py-24 px-6 border-t border-white/5">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Interested in early access? Have questions? We'd love to hear from you.
                        </p>
                        <div className="glass-card p-8 rounded-2xl border border-white/10">
                            <form className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
                                />
                                <textarea
                                    placeholder="Your message..."
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
                                />
                                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default LandingPage;
