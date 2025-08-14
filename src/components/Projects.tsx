import React from 'react';
import { Eye, Github, Calendar, Trophy } from 'lucide-react';
import { projects } from '../data/portfolio';

interface ProjectsProps {
    isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className={`${isDarkMode ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40' : 'bg-white/50 border-blue-200 hover:border-blue-300'} rounded-xl p-6 border backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-105 group`}>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="text-4xl">{project.image}</div>
                                    <div className="flex gap-2">
                                        <a
                                            href={project.demoUrl}
                                            className="p-2 bg-purple-500/20 text-purple-400 rounded-full hover:bg-purple-500/30 transition-colors duration-300"
                                            title="Live Demo"
                                        >
                                            <Eye size={16} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            className="p-2 bg-cyan-500/20 text-cyan-400 rounded-full hover:bg-cyan-500/30 transition-colors duration-300"
                                            title="GitHub Repository"
                                        >
                                            <Github size={16} />
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 leading-relaxed`}>
                                        {project.description}
                                    </p>
                                </div>

                                {/* Project Highlights */}
                                <div className="space-y-2">
                                    {project.highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <Trophy size={14} className="text-yellow-400" />
                                            <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm hover:bg-purple-500/30 transition-colors duration-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm flex items-center gap-2`}>
                                    <Calendar size={16} />
                                    {project.period || project.status}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;