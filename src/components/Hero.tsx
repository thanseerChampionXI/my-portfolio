import React, { useState, useEffect } from 'react';
import { Mail, Download, Linkedin, Github, Phone, ChevronDown, X } from 'lucide-react';
import { Counters } from '../types';

interface HeroProps {
    isDarkMode: boolean;
    counters: Counters;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode, counters }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);

    // Auto-flip animation every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIsFlipped(prev => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handlePhotoClick = () => {
        setIsPhotoZoomed(true);
    };

    const closeZoomedPhoto = () => {
        setIsPhotoZoomed(false);
    };

    return (
        <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-8">
                    {/* Flipping Profile/Logo Container */}
                    <div className="relative w-48 h-48 mx-auto perspective-1000">
                        <div
                            className={`relative w-full h-full transition-transform duration-1000 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''
                                }`}
                        >
                            {/* TJ Side (Front) */}
                            <div className="absolute inset-0 w-full h-full backface-hidden">
                                <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-1 hover:scale-110 transition-transform duration-300 shadow-2xl">
                                    <div className={`w-full h-full rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-white'} flex items-center justify-center relative overflow-hidden`}>
                                        <span className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent z-10">
                                            TJ
                                        </span>
                                        {/* Animated background elements */}
                                        <div className="absolute inset-0 opacity-20">
                                            <div className="absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                                            <div className="absolute bottom-6 left-6 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                                            <div className="absolute top-1/2 left-4 w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Profile Photo Side (Back) */}
                            <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                                <div
                                    className="w-full h-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-1 hover:scale-110 transition-transform duration-300 shadow-2xl cursor-pointer group"
                                    onClick={handlePhotoClick}
                                >
                                    <div className="w-full h-full rounded-full overflow-hidden relative">
                                        {/* Replace this src with your actual photo */}
                                        <img
                                            src="/images/myprofile.jpg"
                                            alt="Thanseer Jelani Profile"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                            <span className="text-white text-sm font-medium">Click to zoom</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Flip Indicator */}
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                            <div className="flex gap-2">
                                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${!isFlipped ? 'bg-purple-400 scale-125' : 'bg-gray-400'}`}></div>
                                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isFlipped ? 'bg-cyan-400 scale-125' : 'bg-gray-400'}`}></div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                            Thanseer Jelani
                        </h1>
                        <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            Full-Stack Developer & Software Engineer
                        </p>
                        <p className={`text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Passionate about creating scalable applications with modern web technologies.
                            Specializing in React, Next.js, TypeScript, Java, and Spring Boot.
                        </p>

                        {/* Stats Counter */}
                        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto pt-8">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-purple-400">{counters.projects}+</div>
                                <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-cyan-400">{counters.experience}+</div>
                                <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Years Exp</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-pink-400">{counters.technologies}+</div>
                                <div className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Technologies</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                        <a
                            href="mailto:thanseerjelani@gmail.com"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-white shadow-lg hover:shadow-xl"
                        >
                            <Mail size={20} />
                            Get In Touch
                        </a>
                        <button
                            className={`inline-flex items-center justify-center gap-2 border ${isDarkMode ? 'border-purple-500 hover:bg-purple-500/10' : 'border-blue-500 hover:bg-blue-500/10'} px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl`}
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/files/ThanseerJelaniSDResume.pdf'; // Update with your resume path
                                link.download = 'Thanseer_Jelani_Resume.pdf'; // Customize the filename
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            <Download size={20} />
                            Download Resume
                        </button>
                    </div>

                    <div className="flex justify-center gap-6 pt-8">
                        <a
                            href="https://linkedin.com/in/thanseer-jelani-520768255/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-full transition-all duration-300 hover:scale-110 shadow-lg`}
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="https://github.com/thanseerjelani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-full transition-all duration-300 hover:scale-110 shadow-lg`}
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="tel:7624841366"
                            className={`p-3 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-full transition-all duration-300 hover:scale-110 shadow-lg`}
                        >
                            <Phone size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Zoomed Photo Modal */}
            {isPhotoZoomed && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeZoomedPhoto}>
                    <div className="relative max-w-md w-full">
                        <button
                            onClick={closeZoomedPhoto}
                            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors duration-200"
                        >
                            <X size={32} />
                        </button>
                        <div className="w-full aspect-square rounded-3xl overflow-hidden bg-gradient-to-r from-purple-500 to-cyan-500 p-2 shadow-2xl">
                            <img
                                src="/images/myprofile1.jpg"
                                alt="Thanseer Jelani Profile - Full View"
                                className="w-full h-full object-cover rounded-2xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                        <div className="text-center mt-4">
                            <h3 className="text-white text-xl font-semibold">Thanseer Jelani</h3>
                            <p className="text-gray-300">Full-Stack Developer</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown size={24} className="text-purple-400" />
            </div>

            {/* Custom Styles for 3D Effect */}
            <style>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </section>
    );
};

export default Hero;