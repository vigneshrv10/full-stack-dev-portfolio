import SectionWrapper from "../components/SectionWrapper";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";

const Education = () => {
    return (
        <SectionWrapper id="education" className="bg-secondary/30">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                    My <span className="text-accent">Education</span>
                </h2>
            </div>

            <div className="flex flex-col gap-8 max-w-3xl mx-auto">
                {EDUCATION.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-6 items-start p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-accent/30 transition-all hover:bg-white/10"
                    >
                        <div className="mt-1 p-2 bg-white rounded-lg w-16 h-16 flex items-center justify-center shrink-0 overflow-hidden">
                            {edu.logo ? <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" /> : <FaUserGraduate size={24} className="text-primary" />}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                            <p className="text-accent font-medium mb-1">{edu.degree}</p>
                            <div className="flex justify-between items-center text-gray-400 text-sm w-full gap-10">
                                <span>{edu.year}</span>
                                <span className="font-semibold text-gray-300">{edu.grade}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Education;
