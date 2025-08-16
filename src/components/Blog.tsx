import React from 'react';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/portfolio';

interface BlogProps {
    isDarkMode: boolean;
}

const Blog: React.FC<BlogProps> = ({ isDarkMode }) => {
    return (
        <>
            {/* Blog Section */}
            <section id="blog" className={`py-8 sm:py-12 md:py-16 lg:py-20 ${isDarkMode ? 'bg-slate-800/30' : 'bg-gray-100/50'} overflow-hidden`}>
                <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-24">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                        Latest Articles
                    </h2>

                    {/* Scrolling Container */}
                    <div className="relative">
                        {/* Gradient Overlays for smooth edges */}
                        <div className={`absolute left-0 top-0 w-32 h-full bg-gradient-to-r ${isDarkMode ? 'from-slate-800/30 to-transparent' : 'from-gray-100/50 to-transparent'} z-10 pointer-events-none`}></div>
                        <div className={`absolute right-0 top-0 w-32 h-full bg-gradient-to-l ${isDarkMode ? 'from-slate-800/30 to-transparent' : 'from-gray-100/50 to-transparent'} z-10 pointer-events-none`}></div>

                        {/* Scrolling Track */}
                        <div className="overflow-hidden scroll-container">
                            <div className="flex animate-scroll">
                                {/* First set of blog posts */}
                                {blogPosts.map((post, index) => (
                                    <article
                                        key={`first-${index}`}
                                        className={`${isDarkMode ? 'bg-slate-800/40 border-teal-500/20 hover:border-emerald-500/40' : 'bg-white/50 border-blue-200 hover:border-blue-300'} 
                                      rounded-xl p-6 border backdrop-blur-sm transition-all duration-300 hover:scale-105 group cursor-pointer
                                      flex-shrink-0 w-80 mx-4`}
                                    >
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                                                    {post.title}
                                                </h3>
                                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 leading-relaxed line-clamp-3`}>
                                                    {post.excerpt}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.map((tag, idx) => (
                                                    <span key={idx} className={`px-2 py-1 rounded text-xs ${isDarkMode ? 'bg-teal-500/20 text-teal-300' : 'bg-purple-500/20 text-purple-300'}`}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className={`flex justify-between items-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                                <span>{post.readTime}</span>
                                            </div>

                                            <button className={`flex items-center gap-2 ${isDarkMode ? 'text-teal-400 hover:text-teal-300' : 'text-purple-400 hover:text-purple-300'} transition-colors duration-300 group-hover:translate-x-1`}>
                                                Read More <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </article>
                                ))}

                                {/* Duplicate set for seamless loop */}
                                {blogPosts.map((post, index) => (
                                    <article
                                        key={`second-${index}`}
                                        className={`${isDarkMode ? 'bg-slate-800/40 border-teal-500/20 hover:border-emerald-500/40' : 'bg-white/50 border-blue-200 hover:border-blue-300'} 
                                      rounded-xl p-6 border backdrop-blur-sm transition-all duration-300 hover:scale-105 group cursor-pointer
                                      flex-shrink-0 w-80 mx-4`}
                                    >
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-xl font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                                                    {post.title}
                                                </h3>
                                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 leading-relaxed line-clamp-3`}>
                                                    {post.excerpt}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.map((tag, idx) => (
                                                    <span key={idx} className={`px-2 py-1 rounded text-xs ${isDarkMode ? 'bg-teal-500/20 text-teal-300' : 'bg-purple-500/20 text-purple-300'}`}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className={`flex justify-between items-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                                <span>{post.readTime}</span>
                                            </div>

                                            <button className={`flex items-center gap-2 ${isDarkMode ? 'text-teal-400 hover:text-teal-300' : 'text-purple-400 hover:text-purple-300'} transition-colors duration-300 group-hover:translate-x-1`}>
                                                Read More <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
        width: fit-content;
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
        </>
    );
};

export default Blog;