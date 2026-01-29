import SectionWrapper from "../components/SectionWrapper";
import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <SectionWrapper id="skills" className="bg-primary">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Technical <span className="text-accent">Skills</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {SKILLS.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-accent/40 transition-all hover:scale-[1.02]"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2 inline-block">
                            {category.category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {category.items.map((skill, idx) => {
                                const Icon = skill.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 px-3 py-2 text-sm bg-secondary rounded-lg text-gray-300 hover:text-white hover:bg-accent/20 transition-colors cursor-default border border-white/5"
                                    >
                                        {Icon && <Icon className="text-accent text-lg" />}
                                        <span>{skill.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
