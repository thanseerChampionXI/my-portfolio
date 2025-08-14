import React from 'react';
import { Globe, Code, Database, Award } from 'lucide-react';
import { skills } from '../data/portfolio';

interface SkillsProps {
    isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDarkMode }) => {
    return (
        <section id="skills" className={`py-20 ${isDarkMode ? 'bg-slate-800/30' : 'bg-gray-100/50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Skills & Technologies
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Frontend Skills */}
                    <div className={`${isDarkMode ? 'bg-slate-800/50 border-purple-500/20' : 'bg-white/50 border-blue-200'} rounded-xl p-6 border backdrop-blur-sm`}>
                        <div className="flex items-center gap-3 mb-6">
                            <Globe className="text-purple-400" size={24} />
                            <h3 className="text-xl font-semibold">Frontend Development</h3>
                        </div>
                        <div className="space-y-4">
                            {skills.frontend.map((skill, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{skill.name}</span>
                                        <span className="text-purple-400 font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className={`w-full ${isDarkMode ? 'bg-slate-700' : 'bg-gray-200'} rounded-full h-2`}>
                                        <div
                                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend Skills */}
                    <div className={`${isDarkMode ? 'bg-slate-800/50 border-purple-500/20' : 'bg-white/50 border-blue-200'} rounded-xl p-6 border backdrop-blur-sm`}>
                        <div className="flex items-center gap-3 mb-6">
                            <Code className="text-cyan-400" size={24} />
                            <h3 className="text-xl font-semibold">Backend Development</h3>
                        </div>
                        <div className="space-y-4">
                            {skills.backend.map((skill, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{skill.name}</span>
                                        <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className={`w-full ${isDarkMode ? 'bg-slate-700' : 'bg-gray-200'} rounded-full h-2`}>
                                        <div
                                            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Database Skills */}
                    <div className={`${isDarkMode ? 'bg-slate-800/50 border-purple-500/20' : 'bg-white/50 border-blue-200'} rounded-xl p-6 border backdrop-blur-sm`}>
                        <div className="flex items-center gap-3 mb-6">
                            <Database className="text-green-400" size={24} />
                            <h3 className="text-xl font-semibold">Database Management</h3>
                        </div>
                        <div className="space-y-4">
                            {skills.database.map((skill, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{skill.name}</span>
                                        <span className="text-green-400 font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className={`w-full ${isDarkMode ? 'bg-slate-700' : 'bg-gray-200'} rounded-full h-2`}>
                                        <div
                                            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Others */}
                    <div className={`${isDarkMode ? 'bg-slate-800/50 border-purple-500/20' : 'bg-white/50 border-blue-200'} rounded-xl p-6 border backdrop-blur-sm`}>
                        <div className="flex items-center gap-3 mb-6">
                            <Award className="text-yellow-400" size={24} />
                            <h3 className="text-xl font-semibold">Tools & Methodologies</h3>
                        </div>
                        <div className="space-y-4">
                            {skills.tools.map((skill, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{skill.name}</span>
                                        <span className="text-yellow-400 font-semibold">{skill.level}%</span>
                                    </div>
                                    <div className={`w-full ${isDarkMode ? 'bg-slate-700' : 'bg-gray-200'} rounded-full h-2`}>
                                        <div
                                            className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;