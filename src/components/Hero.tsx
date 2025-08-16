import React, { useState, useEffect } from 'react';
import { Mail, Download, Linkedin, Github, Phone, ChevronDown, X, ArrowRight, Sparkles } from 'lucide-react';
import { skills, techStack } from '../data/portfolio';

interface Counters {
    projects: number;
    experience: number;
    technologies: number;
}

interface HeroProps {
    isDarkMode: boolean;
    counters: Counters;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode, counters }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isPhotoZoomed, setIsPhotoZoomed] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentSkill, setCurrentSkill] = useState(0);

    // Auto-flip animation every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIsFlipped(prev => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Skill rotation - Fixed to include all 4 skills
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSkill(prev => (prev + 1) % 5); // Changed to 4 for all skills
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Mouse tracking for parallax effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 30,
                y: (e.clientY - window.innerHeight / 2) / 30
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handlePhotoClick = () => {
        setIsPhotoZoomed(true);
    };

    const closeZoomedPhoto = () => {
        setIsPhotoZoomed(false);
    };

    return (
        <section id="home" className="relative min-h-screen overflow-hidden flex items-center py-4 sm:py-8 lg:py-4 xl:py-2">
            {/* Dynamic Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Large animated gradient orbs - Updated to teal/emerald theme */}
                <div
                    className="absolute -top-40 -left-40 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-teal-500/30 via-emerald-500/20 to-transparent rounded-full blur-3xl animate-pulse"
                    style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 1.5}px)` }}
                ></div>
                <div
                    className="absolute -bottom-40 -right-40 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-transparent rounded-full blur-3xl animate-pulse"
                    style={{ transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -2}px)` }}
                ></div>
                <div
                    className="absolute top-1/2 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full blur-2xl animate-bounce"
                    style={{ transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.6}px)` }}
                ></div>

                {/* Geometric shapes - Updated colors */}
                <div className="hidden sm:block absolute top-20 right-20 w-12 sm:w-20 h-12 sm:h-20 border border-emerald-400/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="hidden sm:block absolute bottom-32 left-32 w-10 sm:w-16 h-10 sm:h-16 bg-gradient-to-r from-teal-400/20 to-emerald-400/20 rounded-full animate-ping"></div>

                {/* Floating code symbols - Updated colors */}
                {['{ }', '</>', '< />', 'fn()', '[]', '()', '&&', '=>'].map((symbol, i) => (
                    <div
                        key={i}
                        className="hidden lg:block absolute text-emerald-400/20 font-mono text-xl lg:text-2xl animate-float"
                        style={{
                            left: `${15 + (i * 10)}%`,
                            top: `${20 + (i * 8)}%`,
                            animationDelay: `${i * 0.5}s`,
                            animationDuration: `${3 + (i % 3)}s`
                        }}
                    >
                        {symbol}
                    </div>
                ))}

                {/* Grid pattern overlay 
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `linear-gradient(${isDarkMode ? '#ffffff' : '#000000'} 1px, transparent 1px), linear-gradient(90deg, ${isDarkMode ? '#ffffff' : '#000000'} 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                ></div>
                */}
            </div>

            <div className="relative z-10 w-full max-w-10xl mx-auto px-4 sm:px-6 lg:px-24 h-full">
                <div className="min-h-screen flex flex-col justify-center pt-16 lg:pt-20">

                    {/* Top Section - Photo and Name */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12 mb-6 lg:mb-8">

                        {/* Photo Section - Top on mobile, Right on tablet/desktop */}
                        <div className="flex justify-center lg:justify-end lg:order-2 lg:flex-1">
                            <div className="relative">
                                <div className="relative w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 h-40 sm:h-48 md:h-56 lg:h-64 xl:h-68 perspective-1000">
                                    <div
                                        className={`relative w-full h-full transition-transform duration-1000 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                                    >
                                        {/* TJ Side (Front) - Updated gradient */}
                                        <div className="absolute inset-0 w-full h-full backface-hidden">
                                            <div className="w-full h-full rounded-2xl lg:rounded-3xl bg-gradient-to-r from-teal-500 via-emerald-500 to-cyan-500 p-1.5 lg:p-2 hover:scale-105 transition-transform duration-500 shadow-2xl">
                                                <div className={`w-full h-full rounded-2xl lg:rounded-3xl ${isDarkMode ? 'bg-slate-800' : 'bg-white'} flex items-center justify-center relative overflow-hidden`}>
                                                    <span className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent z-10">
                                                        TJ
                                                    </span>
                                                    {/* Enhanced animated elements - Updated colors */}
                                                    <div className="absolute inset-0 opacity-30">
                                                        <div className="absolute top-3 sm:top-4 lg:top-8 right-3 sm:right-4 lg:right-8 w-2 sm:w-2 lg:w-4 h-2 sm:h-2 lg:h-4 bg-teal-400 rounded-full animate-pulse"></div>
                                                        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-12 left-4 sm:left-6 lg:left-12 w-1.5 sm:w-2 lg:w-3 h-1.5 sm:h-2 lg:h-3 bg-emerald-400 rounded-full animate-bounce"></div>
                                                        <div className="absolute top-1/2 left-3 sm:left-4 lg:left-8 w-1 lg:w-2 h-1 lg:h-2 bg-cyan-400 rounded-full animate-ping"></div>
                                                        <div className="absolute top-6 sm:top-8 lg:top-16 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Profile Photo Side (Back) - Updated gradient */}
                                        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                                            <div
                                                className="w-full h-full rounded-2xl lg:rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-1.5 lg:p-2 hover:scale-105 transition-transform duration-500 shadow-2xl cursor-pointer group"
                                                onClick={handlePhotoClick}
                                            >
                                                <div className="w-full h-full rounded-2xl lg:rounded-3xl overflow-hidden relative">
                                                    <img
                                                        src="/images/myprofile1.jpg"
                                                        alt="Thanseer Jelani Profile"
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2 sm:pb-3 lg:pb-6">
                                                        <span className="text-white text-xs sm:text-sm lg:text-base font-medium">Click to zoom</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Enhanced flip indicators - Updated colors */}
                                    <div className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-12 left-1/2 transform -translate-x-1/2">
                                        <div className="flex gap-2 lg:gap-3">
                                            <div className={`w-2 lg:w-3 h-2 lg:h-3 rounded-full transition-all duration-300 ${!isFlipped ? 'bg-teal-400 scale-125 shadow-lg' : 'bg-gray-400'}`}></div>
                                            <div className={`w-2 lg:w-3 h-2 lg:h-3 rounded-full transition-all duration-300 ${isFlipped ? 'bg-emerald-400 scale-125 shadow-lg' : 'bg-gray-400'}`}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social links - Desktop only (positioned beside photo) */}
                                <div className="hidden lg:flex flex-col gap-4 absolute -left-20 top-1/2 transform -translate-y-1/2">
                                    {[
                                        { icon: Linkedin, href: 'https://linkedin.com/in/thanseer-jelani-520768255/', color: 'hover:text-blue-500' },
                                        { icon: Github, href: 'https://github.com/thanseerjelani', color: 'hover:text-gray-600' },
                                        { icon: Phone, href: 'tel:7624841366', color: 'hover:text-green-500' }
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-3 ${isDarkMode ? 'bg-slate-800/50 hover:bg-slate-700/50' : 'bg-white/70 hover:bg-white'} rounded-xl transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border border-white/10 ${social.color}`}
                                        >
                                            <social.icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Name and Title Section - After photo on mobile, Left on tablet/desktop */}
                        <div className="text-center lg:text-left lg:order-1 lg:flex-1 space-y-3 lg:space-y-4">
                            {/* Status badge - Updated colors */}
                            <div className="hidden lg:flex justify-start">
                                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-xs sm:text-sm font-medium text-green-400">Available for hire/Projects</span>
                                </div>
                            </div>

                            <div className="relative">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none tracking-tight">
                                    <span className="block bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                        Hey, I'm
                                    </span>
                                    <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent mt-1 lg:mt-2">
                                        Thanseer
                                    </span>
                                </h1>

                                {/* Floating sparkles */}
                                <Sparkles className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 text-yellow-400 animate-pulse" size={16} />
                                <Sparkles className="absolute top-1/2 -left-3 lg:-left-6 text-pink-400 animate-pulse" size={12} style={{ animationDelay: '1s' }} />
                            </div>

                            {/* Status badge - Mobile positioning (after name) */}
                            <div className="flex lg:hidden justify-center">
                                <div className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-xs font-medium text-green-400">Available for hire/projects</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section - Skills and Content */}
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

                        {/* Left Column - Skills and Description */}
                        <div className="space-y-5 lg:space-y-6">
                            {/* Dynamic skill display - Updated gradient */}
                            <div className="space-y-2 lg:space-y-3 text-center lg:text-left">
                                <p className={`text-lg sm:text-xl lg:text-2xl font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    I specialize in
                                </p>
                                <div className="relative h-10 sm:h-12 lg:h-14 overflow-hidden">
                                    {skills.map((skill, index) => (
                                        <div
                                            key={skill}
                                            className={`absolute inset-0 flex items-center justify-center lg:justify-start transition-all duration-500 ${index === currentSkill
                                                ? 'transform translate-y-0 opacity-100'
                                                : index < currentSkill
                                                    ? 'transform -translate-y-full opacity-0'
                                                    : 'transform translate-y-full opacity-0'
                                                }`}
                                        >
                                            <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                                                {skill}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className={`text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                Building exceptional digital experiences with cutting-edge technologies.
                                From concept to deployment, I create solutions that make a difference.
                            </p>

                            {/* Action buttons - Updated gradients */}
                            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                                <a
                                    href="mailto:thanseerjelani@gmail.com"
                                    className="group relative inline-flex items-center justify-center gap-2 lg:gap-3 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 px-6 lg:px-7 py-3 lg:py-3.5 rounded-xl lg:rounded-2xl transition-all duration-300 text-white font-semibold text-sm sm:text-base lg:text-md shadow-2xl hover:shadow-emerald-500/25 hover:scale-105"
                                >
                                    <Mail size={16} className="sm:hidden" />
                                    <Mail size={18} className="hidden sm:block lg:hidden" />
                                    <Mail size={20} className="hidden lg:block" />
                                    <span className="hidden sm:inline">Let's Work Together</span>
                                    <span className="sm:hidden">Get In Touch</span>
                                    <ArrowRight size={14} className="sm:hidden transition-transform group-hover:translate-x-1" />
                                    <ArrowRight size={16} className="hidden sm:block transition-transform group-hover:translate-x-1" />
                                </a>
                                <button
                                    className={`inline-flex items-center justify-center gap-2 lg:gap-3 border-2 ${isDarkMode ? 'border-teal-400 hover:bg-teal-500/10' : 'border-emerald-500 hover:bg-emerald-500/10'} px-6 lg:px-7 py-3 lg:py-3.5 rounded-xl lg:rounded-2xl transition-all duration-300 font-semibold text-sm sm:text-base lg:text-lg backdrop-blur-sm hover:scale-105`}
                                    onClick={() => {
                                        const link = document.createElement('a');
                                        link.href = '/files/ThanseerJelaniSDResume.pdf';
                                        link.download = 'Thanseer_Jelani_Resume.pdf';
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                >
                                    <Download size={16} className="sm:hidden" />
                                    <Download size={18} className="hidden sm:block lg:hidden" />
                                    <Download size={20} className="hidden lg:block" />
                                    <span className="hidden sm:inline">Download Resume</span>
                                    <span className="sm:hidden">Resume</span>
                                </button>
                            </div>

                            {/* Social links - Mobile and tablet only */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 justify-center lg:justify-start lg:hidden">
                                <span className={`text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    Connect with me
                                </span>
                                <div className="flex gap-3 lg:gap-4">
                                    {[
                                        { icon: Linkedin, href: 'https://linkedin.com/in/thanseer-jelani-520768255/', color: 'hover:text-blue-500' },
                                        { icon: Github, href: 'https://github.com/thanseerjelani', color: 'hover:text-gray-600' },
                                        { icon: Phone, href: 'tel:7624841366', color: 'hover:text-green-500' }
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-2 sm:p-2.5 lg:p-3 ${isDarkMode ? 'bg-slate-800/50 hover:bg-slate-700/50' : 'bg-white/70 hover:bg-white'} rounded-lg lg:rounded-xl transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm border border-white/10 ${social.color}`}
                                        >
                                            <social.icon size={18} className="lg:hidden" />
                                            <social.icon size={20} className="hidden lg:block" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Stats and Tech Stack */}
                        <div className="space-y-5 lg:space-y-6">
                            {/* Stats cards - Updated colors */}
                            <div className="grid grid-cols-3 gap-3 lg:gap-4">
                                {[
                                    { label: 'Projects', value: counters.projects, color: 'from-teal-500 to-emerald-500' },
                                    { label: 'Years Exp', value: counters.experience, color: 'from-emerald-500 to-cyan-500' },
                                    { label: 'Tech Stack', value: counters.technologies, color: 'from-cyan-500 to-teal-500' }
                                ].map((stat, index) => (
                                    <div
                                        key={stat.label}
                                        className={`relative p-3 sm:p-4 lg:p-5 rounded-xl lg:rounded-2xl backdrop-blur-sm border border-white/20 ${isDarkMode ? 'bg-slate-800/50' : 'bg-white/70'} hover:scale-105 transition-transform duration-300`}
                                    >
                                        <div className={`text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                                            {stat.value}+
                                        </div>
                                        <div className={`text-xs font-medium mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Tech stack showcase - Updated colors */}
                            <div className={`p-4 sm:p-5 lg:p-4 rounded-xl lg:rounded-2xl backdrop-blur-sm border border-white/20 ${isDarkMode ? 'bg-slate-800/30' : 'bg-white/50'}`}>
                                <h4 className="text-base lg:text-md font-semibold text-emerald-400 mb-3 lg:mb-4 text-center lg:text-left">Tech Arsenal</h4>
                                <div className="flex flex-wrap gap-2 lg:gap-3 justify-center lg:justify-start">
                                    {techStack.map((tech, index) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 sm:px-3 lg:px-4 py-1.5 lg:py-2 text-xs sm:text-sm font-medium bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border border-teal-500/30 rounded-lg lg:rounded-xl text-teal-300 hover:scale-105 hover:border-teal-400/50 transition-all duration-200"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Zoomed Photo Modal - Updated gradient */}
            {isPhotoZoomed && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeZoomedPhoto}>
                    <div className="relative max-w-sm sm:max-w-md lg:max-w-lg w-full">
                        <button
                            onClick={closeZoomedPhoto}
                            className="absolute -top-8 sm:-top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
                        >
                            <X size={24} className="sm:hidden" />
                            <X size={32} className="hidden sm:block" />
                        </button>
                        <div className="w-full aspect-square rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-r from-teal-500 to-emerald-500 p-2 lg:p-3 shadow-2xl">
                            <img
                                src="/images/myprofile1.jpg"
                                alt="Thanseer Jelani Profile - Full View"
                                className="w-full h-full object-cover rounded-2xl lg:rounded-3xl"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                        <div className="text-center mt-4 lg:mt-6">
                            <h3 className="text-white text-xl lg:text-2xl font-bold">Thanseer Jelani</h3>
                            <p className="text-gray-300 text-base lg:text-lg">Full-Stack Developer</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Scroll Indicator - Updated color */}
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown size={20} className="sm:hidden text-teal-400" />
                <ChevronDown size={24} className="hidden sm:block lg:hidden text-teal-400" />
                <ChevronDown size={28} className="hidden lg:block text-teal-400" />
            </div>

            {/* Custom Styles */}
            <style>{`
                .perspective-1000 { perspective: 1000px; }
                .transform-style-3d { transform-style: preserve-3d; }
                .backface-hidden { backface-visibility: hidden; }
                .rotate-y-180 { transform: rotateY(180deg); }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float { animation: float 3s ease-in-out infinite; }

                /* Ensure full height on all screens */
                @media (min-height: 800px) {
                    section {
                        height: 100vh;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;