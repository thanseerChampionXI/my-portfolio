import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredSkills = useMemo(() => {
        return skills.filter(skill => {
            const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
            const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                skill.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const categories = [
        { key: 'all', label: 'All Skills' },
        { key: 'frontend', label: 'Frontend Development' },
        { key: 'backend', label: 'Backend Development' },
        { key: 'database', label: 'Database Management' },
        { key: 'tools', label: 'Tools & DevOps' }
    ];

    return (
        <section id="skills" className={`py-8 sm:py-12 md:py-16 lg:py-20 ${isDarkMode ? 'bg-gradient-to-br from-slate-800 via-teal-900 to-emerald-900' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Skills & Technologies
                </h2>

                {/* Search Bar */}
                <div className="relative max-w-md mx-auto mb-8">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search skills..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 rounded-full border backdrop-blur-sm transition-colors
              ${isDarkMode
                                ? 'bg-slate-800/30 border-teal-600/30 text-white placeholder-gray-400 focus:border-emerald-500'
                                : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                            } focus:outline-none focus:ring-2 focus:ring-opacity-50 ${isDarkMode ? 'focus:ring-emerald-500' : 'focus:ring-blue-500'}`}
                    />
                </div>

                {/* Category Toggle Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.key}
                            onClick={() => setActiveCategory(category.key)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 border backdrop-blur-sm
                ${activeCategory === category.key
                                    ? isDarkMode
                                        ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white border-transparent shadow-lg shadow-teal-500/25'
                                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg'
                                    : isDarkMode
                                        ? 'bg-slate-800/30 text-gray-300 border-teal-600/30 hover:bg-slate-700/40 hover:border-emerald-500/40'
                                        : 'bg-white/30 text-gray-600 border-gray-300 hover:bg-white/50 hover:border-blue-300'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => {
                        const IconComponent = skill.icon;
                        return (
                            <div
                                key={`${skill.name}-${activeCategory}`}
                                className={`group relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 animate-fadeInUp
                  ${isDarkMode
                                        ? 'bg-slate-800/20 border-teal-600/20 hover:border-emerald-500/50 hover:bg-slate-800/30 hover:shadow-emerald-500/10'
                                        : 'bg-white/40 border-gray-200 hover:border-blue-300 hover:bg-white/60'
                                    }`}
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    animationFillMode: 'forwards'
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-slate-700/30 border border-teal-600/20' : 'bg-gray-100/50'}`}>
                                        <IconComponent className={`h-6 w-6 ${skill.color}`} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                            {skill.name}
                                        </h3>
                                        <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {skill.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className={`px-2 py-1 rounded-md text-xs font-medium
                            ${isDarkMode
                                                            ? 'bg-slate-700/30 text-teal-200 border border-teal-600/30'
                                                            : 'bg-gray-100/50 text-gray-600 border border-gray-200'
                                                        }`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredSkills.length === 0 && (
                    <div className="text-center py-12">
                        <div className={`text-6xl mb-4 ${isDarkMode ? 'text-gray-700' : 'text-gray-300'}`}>🔍</div>
                        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            No skills found matching your search.
                        </p>
                    </div>
                )}
            </div>

            <style >{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.4s ease-out forwards;
        }
        
        @media (max-width: 768px) {
          .animate-fadeInUp {
            animation: fadeInUp 0.2s ease-out forwards;
          }
        }
      `}</style>
        </section>
    );
};

export default Skills;