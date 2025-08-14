import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

interface FooterProps {
    isDarkMode: boolean;
    scrollToSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, scrollToSection }) => {
    return (
        <footer className={`${isDarkMode ? 'bg-slate-900 border-purple-500/20' : 'bg-gray-900 border-gray-700'} py-12 border-t`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                            Thanseer Jelani
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Full-Stack Developer passionate about creating innovative solutions with modern technologies.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://linkedin.com/in/thanseer-jelani-520768255/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/thanseerjelani" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                                <Github size={20} />
                            </a>
                            <a href="mailto:thanseerjelani@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">
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
                                    className="block text-gray-400 hover:text-white transition-colors duration-300"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'TypeScript', 'Java', 'Spring Boot', 'Next.js', 'Tailwind CSS'].map((tech) => (
                                <span key={tech} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2024 Thanseer Jelani. Built with React, TypeScript & Tailwind CSS. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;