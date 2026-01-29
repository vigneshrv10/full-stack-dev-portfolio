import SectionWrapper from "../components/SectionWrapper";
import { TUTORIALS } from "../constants";
import { motion } from "framer-motion";
import { FaBookOpen, FaGithub } from "react-icons/fa";

const Tutorials = () => {
    return (
        <SectionWrapper id="tutorials" className="bg-primary">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Tutorials & <span className="text-accent">Guides</span>
                </h2>
                <p className="text-gray-400">Resources created for coders and job seekers.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TUTORIALS.map((tutorial, index) => (
                    <motion.a
                        key={index}
                        href={tutorial.github}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.03 }}
                        className="block p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-white/10 hover:border-accent/50 group"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <FaBookOpen className="text-accent text-2xl group-hover:text-white transition-colors" />
                            <FaGithub className="text-gray-500 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{tutorial.title}</h3>
                        <p className="text-gray-400 text-sm">{tutorial.description}</p>
                    </motion.a>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Tutorials;
