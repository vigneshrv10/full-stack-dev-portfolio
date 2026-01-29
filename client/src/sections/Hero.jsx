import { motion } from "framer-motion";
import { PERSONAL_DETAILS } from "../constants";
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <section id="hero" className="relative w-full h-screen mx-auto flex items-center justify-center overflow-hidden bg-grid-white/[0.02]">
            {/* Abstract Background Gradient - optional */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary via-primary to-secondary opacity-90 z-0" />
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[100px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[100px]" />

            <div className="relative z-10 max-w-7xl px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 text-center md:text-left">
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-accent font-medium tracking-wide mb-2"
                    >
                        Hello, I'm
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
                    >
                        {PERSONAL_DETAILS.name}
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 mb-6"
                    >
                        {PERSONAL_DETAILS.role}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto md:mx-0 mb-8"
                    >
                        {PERSONAL_DETAILS.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4 justify-center md:justify-start"
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 rounded-full bg-accent text-primary font-bold hover:bg-white hover:scale-105 transition-all cursor-pointer shadow-lg shadow-accent/20"
                        >
                            View Projects
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-accent hover:text-accent hover:scale-105 transition-all cursor-pointer"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                </div>

                {/* Image/3D Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex-1 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-tr from-accent to-purple-600 shadow-2xl shadow-accent/20">
                        <div className="w-full h-full rounded-full bg-secondary overflow-hidden flex items-center justify-center border-4 border-primary">
                            <img
                                src={PERSONAL_DETAILS.profileImg}
                                alt={PERSONAL_DETAILS.name}
                                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                                onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML = '<span class="text-6xl">👨‍💻</span>'; }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
            >
                <div className="w-[30px] h-[50px] rounded-3xl border-2 border-gray-500 flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                        className="w-2 h-2 bg-gray-500 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
