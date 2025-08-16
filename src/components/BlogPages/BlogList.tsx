import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Tag, Home } from 'lucide-react';
import { blogPosts } from '../../data/portfolio';


interface BlogListProps {
    isDarkMode: boolean;
}

const BlogList: React.FC<BlogListProps> = ({ isDarkMode }) => {
    return (
        <div className={`${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
            {/* Header with Back to Home Button */}
            <div className={`${isDarkMode ? 'bg-slate-800/50' : 'bg-white/50'} backdrop-blur-sm border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-200'} sticky top-0 z-10`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-start">
                        <Link
                            to="/"
                            className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                        >
                            <Home size={20} />
                            Back to Home page
                        </Link>
                    </div>
                </div>
            </div>

            <div className={`py-8 sm:py-12 md:py-16 lg:py-20`}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                            Latest Articles
                        </h1>
                        <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
                            Insights, tutorials, and thoughts on modern web development, React, TypeScript, and more.
                        </p>
                    </div>

                    {/* Blog Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <article
                                key={post.id}
                                className={`${isDarkMode ? 'bg-slate-800/40 border-teal-500/20 hover:border-emerald-500/40' : 'bg-white/80 border-gray-200 hover:border-blue-300'} 
                    rounded-xl p-6 border backdrop-blur-sm transition-all duration-300 hover:scale-105 group`}
                            >
                                {/* Cover Image Placeholder */}
                                {post.coverImage ? (
                                    <div className="mb-4 rounded-lg overflow-hidden">
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                ) : (
                                    <div className={`mb-4 h-48 rounded-lg ${isDarkMode ? 'bg-gradient-to-br from-teal-500/20 to-emerald-500/20' : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'} flex items-center justify-center`}>
                                        <div className={`text-center ${isDarkMode ? 'text-teal-300' : 'text-blue-600'}`}>
                                            <Tag size={48} className="mx-auto mb-2 opacity-50" />
                                            <p className="text-sm opacity-75">Cover Image</p>
                                        </div>
                                    </div>
                                )}

                                <div className="space-y-4">
                                    {/* Title */}
                                    <h2 className={`text-xl font-semibold ${isDarkMode ? 'text-emerald-400 group-hover:text-emerald-300' : 'text-blue-600 group-hover:text-blue-500'} transition-colors duration-300`}>
                                        {post.title}
                                    </h2>

                                    {/* Excerpt */}
                                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed line-clamp-3`}>
                                        {post.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.slice(0, 3).map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className={`px-2 py-1 rounded text-xs ${isDarkMode ? 'bg-teal-500/20 text-teal-300' : 'bg-blue-500/20 text-blue-700'}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        {post.tags.length > 3 && (
                                            <span className={`px-2 py-1 rounded text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                                +{post.tags.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Meta Information */}
                                    <div className={`flex flex-wrap items-center gap-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                        {post.author && (
                                            <div className="flex items-center gap-1">
                                                <User size={14} />
                                                <span>{post.author}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{new Date(post.date).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={14} />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Read More Button */}
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className={`inline-flex items-center gap-2 ${isDarkMode ? 'text-teal-400 hover:text-teal-300' : 'text-blue-600 hover:text-blue-500'} transition-all duration-300 group-hover:translate-x-1 font-medium`}
                                    >
                                        Read Article <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Load More Button (for future implementation) */}
                    <div className="text-center mt-12">
                        <button
                            disabled
                            className={`px-8 py-3 rounded-lg ${isDarkMode ? 'bg-slate-700/50 text-gray-400' : 'bg-gray-200 text-gray-500'} cursor-not-allowed transition-all duration-300`}
                        >
                            More articles coming soon...
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                .line-clamp-3 {
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                }
              `}</style>
        </div>
    );
};

export default BlogList;