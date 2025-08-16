import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { experience } from '../data/portfolio';

interface ExperienceProps {
    isDarkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
    return (
        <section id="experience" className={`py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-slate-800 via-teal-900/20 to-emerald-900/30' : 'bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50'}`}>
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className={`absolute -top-40 -right-40 w-80 h-80 ${isDarkMode ? 'bg-teal-500/10' : 'bg-blue-400/10'} rounded-full blur-3xl`}></div>
                <div className={`absolute -bottom-40 -left-40 w-80 h-80 ${isDarkMode ? 'bg-emerald-500/10' : 'bg-purple-400/10'} rounded-full blur-3xl`}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            Professional Journey
                        </span>
                    </h2>
                    <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
                        Transforming ideas into reality through innovation and expertise
                    </p>
                </div>

                {/* Experience Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {experience.map((exp, index) => (
                        <div
                            key={index}
                            className="group relative"
                            style={{
                                animationDelay: `${index * 200}ms`
                            }}
                        >
                            {/* Card */}
                            <div className={`
                                relative h-full p-8 rounded-3xl border backdrop-blur-xl
                                ${isDarkMode
                                    ? 'bg-white/5 border-teal-500/20 hover:bg-white/10 hover:border-emerald-500/30'
                                    : 'bg-white/60 border-white/20 hover:bg-white/80'
                                }
                                shadow-2xl hover:shadow-3xl
                                transform hover:-translate-y-2 transition-all duration-500 ease-out
                                before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-teal-500/20 before:to-emerald-500/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500
                            `}>

                                {/* Card Number */}
                                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Company Badge */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className={`
                                        px-4 py-2 rounded-full text-sm font-medium
                                        ${isDarkMode
                                            ? 'bg-gradient-to-r from-teal-500/20 to-emerald-500/20 text-emerald-300 border border-teal-500/30'
                                            : 'bg-gradient-to-r from-purple-500/10 to-cyan-500/10 text-purple-600 border border-purple-200'
                                        }
                                    `}>
                                        {exp.company}
                                    </div>
                                    <ChevronRight className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} group-hover:text-teal-400 group-hover:translate-x-1 transition-all duration-300`} />
                                </div>

                                {/* Title */}
                                <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300`}>
                                    {exp.title}
                                </h3>

                                {/* Meta Info */}
                                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                    <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        <Calendar className="w-4 h-4 text-teal-400" />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        <MapPin className="w-4 h-4 text-emerald-400" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="space-y-3">
                                    {exp.achievements.map((achievement, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-3 group-hover:translate-x-2 transition-transform duration-300"
                                            style={{ animationDelay: `${(index * 200) + (idx * 100)}ms` }}
                                        >
                                            <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full mt-2"></div>
                                            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} group-hover:text-current transition-colors duration-300`}>
                                                {achievement}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Decorative Element */}
                                <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Floating Decoration */}
                            <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${exp.color} opacity-20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 transform group-hover:scale-110`}></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA or Stats (Optional) */}
                <div className="mt-16 text-center">
                    <button
                        onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer ${isDarkMode ? 'bg-teal-500/10 text-teal-300 border border-teal-500/30 hover:bg-teal-500/20' : 'bg-white/50 text-gray-600 border border-white/30 hover:bg-white/70'} backdrop-blur-sm`}
                    >
                        <span className="text-sm font-medium">Ready to create something amazing together?</span>
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Experience;