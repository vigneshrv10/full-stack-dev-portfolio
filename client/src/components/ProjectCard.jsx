import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 group hover:shadow-lg hover:shadow-accent/10"
        >
            {/* Thumbnail */}
            <div className="h-48 w-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                {project.live ? (
                    <img
                        src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(project.live)}?w=600&h=400`}
                        alt={project.title}
                        className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <span className="text-4xl">🚀</span>
                    </div>
                )}

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-colors text-white backdrop-blur-sm"
                    >
                        <FaGithub size={20} />
                    </a>
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 bg-white/10 rounded-full hover:bg-accent hover:text-primary transition-colors text-white backdrop-blur-sm"
                        >
                            <FaExternalLinkAlt size={20} />
                        </a>
                    )}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>
                {/* <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech && project.tech.map((tag, idx) => (
                        <span
                            key={idx}
                            className="text-xs font-medium px-3 py-1 rounded-full bg-primary/50 text-accent border border-accent/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div> */}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
