import { motion } from 'framer-motion';

interface HeroSectionProps {
    onRequestAccess: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onRequestAccess }) => {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                {/* Headline with Gradient on "ai" in Liaison AND standalone "AI" */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
                >
                    Li
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                        ai
                    </span>
                    son: Your AI Product Manager
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto"
                >
                    Automate your workflows end-to-end. Transform meeting recordings into executed tasks instantly.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex items-center justify-center gap-4"
                >
                    <button
                        onClick={onRequestAccess}
                        className="px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all hover:scale-105"
                    >
                        Request Early Access
                    </button>
                    <button className="px-10 py-4 rounded-xl border-2 border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all">
                        Watch Demo
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
