import React, { useState } from 'react';
import { Eye, Github, Calendar, Trophy, Building, User } from 'lucide-react';
import { projects } from '../data/portfolio';

// Updated interface to include url property
export interface Project {
    title: string;
    description: string;
    tech: string[];
    status?: string;
    period?: string;
    image: string;
    demoUrl?: string; // Made optional
    githubUrl?: string; // Made optional
    url?: string; // New optional URL property
    highlights: string[];
    category: 'professional' | 'personal';
    company?: string;
    role?: string;
}

interface ProjectsProps {
    isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
    const [activeTab, setActiveTab] = useState<'professional' | 'personal'>('personal');

    const professionalProjects = projects.filter(project => project.category === 'professional');
    const personalProjects = projects.filter(project => project.category === 'personal');
    const currentProjects = activeTab === 'professional' ? professionalProjects : personalProjects;

    const renderProject = (project: any, index: number, keyPrefix: string) => (
        <div
            key={`${keyPrefix}-${index}`}
            className={`${isDarkMode ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40' : 'bg-white/50 border-blue-200 hover:border-blue-300'} 
            rounded-xl p-6 border backdrop-blur-sm transition-all duration-300 hover:scale-105 group
            flex-shrink-0 w-80 mx-4`}
        >
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="text-4xl">{project.image}</div>
                        {project.category === 'professional' && (
                            <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
                                <Building size={12} />
                                <span>{project.company}</span>
                            </div>
                        )}
                        {project.category === 'personal' && (
                            <div className="flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                                <User size={12} />
                                <span>Personal</span>
                            </div>
                        )}
                    </div>
                    <div className="flex gap-2">
                        {/* Live Demo / URL Button */}
                        {project.url ? (
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-purple-500/20 text-purple-400 rounded-full hover:bg-purple-500/30 transition-colors duration-300"
                                title="Visit Project"
                            >
                                <Eye size={16} />
                            </a>
                        ) : project.demoUrl ? (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-purple-500/20 text-purple-400 rounded-full hover:bg-purple-500/30 transition-colors duration-300"
                                title="Live Demo"
                            >
                                <Eye size={16} />
                            </a>
                        ) : (
                            <div className="relative group/demo">
                                <div
                                    className="p-2 bg-gray-500/20 text-gray-500 rounded-full cursor-not-allowed hover:bg-gray-500/30 transition-colors duration-300"
                                    title="Deploying soon..."
                                >
                                    <Eye size={16} />
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover/demo:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50 before:content-[''] before:absolute before:bottom-full before:left-1/2 before:transform before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-gray-900">
                                        Deploying soon...
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* GitHub Button */}
                        {project.githubUrl && project.githubUrl !== '#' ? (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-cyan-500/20 text-cyan-400 rounded-full hover:bg-cyan-500/30 transition-colors duration-300"
                                title="GitHub Repository"
                            >
                                <Github size={16} />
                            </a>
                        ) : (
                            <div className="relative group/github">
                                <div
                                    className="p-2 bg-gray-500/20 text-gray-500 rounded-full cursor-not-allowed hover:bg-gray-500/30 transition-colors duration-300"
                                    title="Private repository"
                                >
                                    <Github size={16} />
                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover/github:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50 before:content-[''] before:absolute before:bottom-full before:left-1/2 before:transform before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-gray-900">
                                        Private repository
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                        {project.title}
                    </h3>
                    {project.role && (
                        <p className="text-sm text-purple-400 mb-1">Role: {project.role}</p>
                    )}
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 leading-relaxed line-clamp-3`}>
                        {project.description}
                    </p>
                </div>

                {/* Project Highlights */}
                <div className="space-y-2">
                    {project.highlights.slice(0, 3).map((highlight: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                            <Trophy size={12} className="text-yellow-400 flex-shrink-0" />
                            <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{highlight}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((tech: string, idx: number) => (
                        <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs hover:bg-purple-500/30 transition-colors duration-300">
                            {tech}
                        </span>
                    ))}
                    {project.tech.length > 5 && (
                        <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs">
                            +{project.tech.length - 5}
                        </span>
                    )}
                </div>

                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm flex items-center gap-2`}>
                    <Calendar size={16} />
                    {project.period || project.status}
                </p>
            </div>
        </div>
    );

    return (
        <section id="projects" className={`py-20 ${isDarkMode ? 'bg-slate-800/30' : 'bg-gray-100/50'} overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    My Work & Projects
                </h2>

                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    Exploring my journey through professional development and personal innovation
                </p>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12 px-4">
                    <div className={`${isDarkMode ? 'bg-slate-800/80' : 'bg-white/80'} backdrop-blur-sm rounded-2xl p-2 border border-purple-500/20 flex flex-col sm:flex-row gap-2 w-full sm:w-auto max-w-md sm:max-w-none`}>
                        <button
                            onClick={() => setActiveTab('personal')}
                            className={`px-4 sm:px-6 lg:px-8 py-3 rounded-xl transition-all duration-300 flex items-center justify-center sm:justify-start gap-2 font-medium text-sm sm:text-base ${activeTab === 'personal'
                                ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                                : `${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'} hover:bg-purple-500/10`
                                }`}
                        >
                            <User size={16} className="sm:hidden" />
                            <User size={18} className="hidden sm:block" />
                            <span className="hidden xs:inline">Personal Projects</span>
                            <span className="xs:hidden">Personal</span>
                            <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                                {personalProjects.length}
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab('professional')}
                            className={`px-4 sm:px-6 lg:px-8 py-3 rounded-xl transition-all duration-300 flex items-center justify-center sm:justify-start gap-2 font-medium text-sm sm:text-base ${activeTab === 'professional'
                                ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                                : `${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-800'} hover:bg-purple-500/10`
                                }`}
                        >
                            <Building size={16} className="sm:hidden" />
                            <Building size={18} className="hidden sm:block" />
                            <span className="hidden xs:inline">Professional Work</span>
                            <span className="xs:hidden">Professional</span>
                            <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
                                {professionalProjects.length}
                            </span>
                        </button>
                    </div>
                </div>

                {/* Projects Scrolling Section */}
                {currentProjects.length > 0 && (
                    <div className="relative">
                        {/* Gradient Overlays for smooth edges */}
                        <div className={`absolute left-0 top-0 w-32 h-full bg-gradient-to-r ${isDarkMode ? 'from-slate-800/30 to-transparent' : 'from-gray-100/50 to-transparent'} z-10 pointer-events-none`}></div>
                        <div className={`absolute right-0 top-0 w-32 h-full bg-gradient-to-l ${isDarkMode ? 'from-slate-800/30 to-transparent' : 'from-gray-100/50 to-transparent'} z-10 pointer-events-none`}></div>

                        {/* Scrolling Track */}
                        <div className="overflow-hidden scroll-container">
                            <div className="flex animate-scroll">
                                {/* First set of projects */}
                                {currentProjects.map((project, index) => renderProject(project, index, 'first'))}

                                {/* Duplicate set for seamless loop */}
                                {currentProjects.map((project, index) => renderProject(project, index, 'second'))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {currentProjects.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🚀</div>
                        <h3 className="text-xl font-semibold text-gray-400 mb-2">
                            No {activeTab} projects yet
                        </h3>
                        <p className="text-gray-500">
                            Check back soon for exciting new projects!
                        </p>
                    </div>
                )}
            </div>

            {/* CSS Animation */}
            <style>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                
                .scroll-container:hover .animate-scroll {
                    animation-play-state: paused;
                }
                
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </section>
    );
};

export default Projects;