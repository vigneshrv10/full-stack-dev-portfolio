import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../constants";

const Projects = () => {
    return (
        <SectionWrapper id="projects" className="bg-primary">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Featured <span className="text-accent">Projects</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A collection of my work ranging from AI-driven applications to interactive games and web platforms.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
