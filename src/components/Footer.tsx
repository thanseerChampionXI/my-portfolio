import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

interface FooterProps {
    isDarkMode: boolean;
    scrollToSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, scrollToSection }) => {
    return (
        <footer className={`${isDarkMode ? 'bg-gradient-to-br from-slate-800 via-teal-900 to-emerald-900 border-teal-500/20' : 'bg-gray-900 border-gray-700'} py-8 sm:py-12 md:py-16 lg:py-20 border-t`}>
            <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-24">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                            Thanseer Jelani
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Full-Stack Developer passionate about creating innovative solutions with modern technologies.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://linkedin.com/in/thanseer-jelani-520768255/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${isDarkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-400 hover:text-white'} transition-colors duration-300`}
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://github.com/thanseerjelani"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${isDarkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-400 hover:text-white'} transition-colors duration-300`}
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="mailto:thanseerjelani@gmail.com"
                                className={`${isDarkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-400 hover:text-white'} transition-colors duration-300`}
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`block ${isDarkMode ? 'text-gray-300 hover:text-emerald-400' : 'text-gray-400 hover:text-white'} transition-colors duration-300`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'TypeScript', 'Java', 'Spring Boot', 'Next.js', 'Tailwind CSS', 'Vite'].map((tech) => (
                                <span
                                    key={tech}
                                    className={`px-2 py-1 rounded text-sm border ${isDarkMode
                                        ? 'bg-teal-500/20 text-teal-300 border-teal-500/30 hover:bg-teal-500/30'
                                        : 'bg-purple-500/20 text-purple-300 border-purple-500/30'
                                        } transition-colors duration-300`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={`border-t ${isDarkMode ? 'border-teal-800/50' : 'border-gray-800'} mt-8 pt-8 text-center`}>
                    <p className="text-gray-300">
                        © 2025 Thanseer Jelani. Built with React, TypeScript & Tailwind CSS. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;