import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
    activeSection: string;
    isDarkMode: boolean;
    toggleTheme: () => void;
    scrollToSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({
    isMenuOpen,
    setIsMenuOpen,
    activeSection,
    isDarkMode,
    toggleTheme,
    scrollToSection
}) => {
    const navigationItems = ['home', 'about', 'experience', 'projects', 'skills', 'blog', 'contact'];

    return (
        <nav className={`fixed top-0 w-full ${isDarkMode ? 'bg-slate-900/90' : 'bg-white/90'} backdrop-blur-md z-50 border-b ${isDarkMode ? 'border-purple-500/20' : 'border-blue-200'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Thanseer Jelani
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navigationItems.map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`capitalize transition-colors duration-200 ${activeSection === section
                                    ? 'text-cyan-400'
                                    : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {section}
                            </button>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300`}
                        >
                            {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-gray-200'}`}
                        >
                            {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
                        </button>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className={`lg:hidden py-4 border-t ${isDarkMode ? 'border-purple-500/20' : 'border-blue-200'}`}>
                        {navigationItems.map((section) => (
                            <button
                                key={section}
                                onClick={() => scrollToSection(section)}
                                className={`block w-full text-left py-2 capitalize transition-colors duration-200 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;