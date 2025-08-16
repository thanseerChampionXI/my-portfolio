import React from 'react';
import { MapPin, Mail, GraduationCap } from 'lucide-react';

interface AboutProps {
    isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
    return (
        <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                    About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            I'm a passionate Software Developer with hands-on experience in full-stack development,
                            specializing in modern web technologies. I love creating scalable applications that
                            provide exceptional user experiences.
                        </p>
                        <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Currently working at ChampionXI as a Junior Software Developer, where I've contributed
                            to significant performance improvements and user engagement growth. I'm always eager to
                            learn new technologies and take on challenging projects.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 pt-6">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-teal-400">
                                    <MapPin size={20} />
                                    <span className="font-semibold">Location</span>
                                </div>
                                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Kolar, Karnataka</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-teal-400">
                                    <Mail size={20} />
                                    <span className="font-semibold">Email</span>
                                </div>
                                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>thanseerjelani@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className={`${isDarkMode ? 'bg-slate-800/30 border-teal-500/20 backdrop-blur-sm' : 'bg-white/50 border-blue-200'} p-6 rounded-xl border`}>
                            <div className="flex items-center gap-3 mb-4">
                                <GraduationCap className="text-teal-400" size={24} />
                                <h3 className="text-xl font-semibold">Education</h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-emerald-400">B.E in Computer Science and Engineering</h4>
                                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>JSS Academy of Technical Education, Bengaluru</p>
                                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>2020 - 2024 | GPA: 8.50/10</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-emerald-400">Pre-University Course</h4>
                                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Narayan P U College, Kolar</p>
                                    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>2019 - 2020 | 96%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;