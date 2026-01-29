import SectionWrapper from "../components/SectionWrapper";
import { EXPERIENCE } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <SectionWrapper id="experience" className="bg-secondary/30">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Professional <span className="text-accent">Experience</span>
                </h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-white/10" />

                {EXPERIENCE.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }} // Adjusted for entering from sides
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`relative flex items-center justify-between gap-8 mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                            }`}
                    >
                        {/* Center Line Dot */}
                        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full z-10 box-content border-4 border-primary shadow-[0_0_15px_rgba(56,189,248,0.5)]" />

                        {/* Content Card (45%) */}
                        <div className={`w-full md:w-[45%] pl-12 md:pl-0 text-left`}>
                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-accent/30 transition-all hover:shadow-xl hover:shadow-accent/5 group">
                                <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{exp.role}</h3>
                                <h4 className="text-xl text-gray-300 mb-2">{exp.company}</h4>
                                <p className="text-accent text-sm mb-4 font-mono">{exp.year} | {exp.location}</p>
                                <ul className="list-disc list-inside text-gray-400 space-y-2">
                                    {exp.description.map((desc, i) => (
                                        <li key={i} className="text-base leading-relaxed">{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Logo Space (45%) */}
                        <div className="hidden md:flex w-[45%] justify-center items-center">
                            {exp.logo && (
                                <div className="p-4 bg-white/90 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                                    <img
                                        src={exp.logo}
                                        alt={exp.company}
                                        className="h-24 w-auto object-contain"
                                    />
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Experience;
