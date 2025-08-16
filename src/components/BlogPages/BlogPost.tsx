import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, Home } from 'lucide-react';

// Define BlogPost type inline to avoid import issues
interface BlogPostData {
    id: string;
    title: string;
    excerpt: string;
    content?: string;
    date: string;
    readTime: string;
    tags: string[];
    author?: string;
    coverImage?: string;
}

interface BlogPostProps {
    post: BlogPostData;
    isDarkMode: boolean;
    children?: React.ReactNode;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, isDarkMode, children }) => {
    const navigate = useNavigate();

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
            {/* Header */}
            <div className={`${isDarkMode ? 'bg-slate-800/50' : 'bg-white/50'} backdrop-blur-sm border-b ${isDarkMode ? 'border-slate-700' : 'border-gray-200'} sticky top-0 z-10`}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => navigate('/blog')}
                            className={`flex items-center gap-2 ${isDarkMode ? 'text-teal-400 hover:text-teal-300' : 'text-blue-600 hover:text-blue-700'} transition-colors duration-300`}
                        >
                            <ArrowLeft size={20} />
                            Back to Articles
                        </button>

                        <Link
                            to="/"
                            className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                        >
                            <Home size={20} />
                            Home
                        </Link>
                    </div>
                </div>
            </div>

            {/* Blog Post Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Cover Image */}
                {post.coverImage ? (
                    <div className="mb-8 rounded-xl overflow-hidden">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-64 sm:h-80 object-cover"
                        />
                    </div>
                ) : (
                    <div className={`mb-8 h-64 sm:h-80 rounded-xl ${isDarkMode ? 'bg-gradient-to-br from-teal-500/20 to-emerald-500/20' : 'bg-gradient-to-br from-blue-500/20 to-purple-500/20'} flex items-center justify-center`}>
                        <div className={`text-center ${isDarkMode ? 'text-teal-300' : 'text-blue-600'}`}>
                            <Tag size={64} className="mx-auto mb-4 opacity-50" />
                            <p className="text-lg opacity-75">Cover Image Placeholder</p>
                        </div>
                    </div>
                )}

                {/* Post Header */}
                <header className="mb-8">
                    <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {post.title}
                    </h1>

                    {/* Meta Information */}
                    <div className={`flex flex-wrap items-center gap-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
                        {post.author && (
                            <div className="flex items-center gap-1">
                                <User size={16} />
                                <span>{post.author}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm ${isDarkMode ? 'bg-teal-500/20 text-teal-300' : 'bg-blue-500/20 text-blue-700'}`}
                            >
                                <Tag size={12} />
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Post Content Area */}
                <div className={`prose prose-lg max-w-none ${isDarkMode ? 'prose-invert' : ''}`}>
                    <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                        {children ? (
                            children
                        ) : (
                            // Placeholder when no content is provided
                            <div className={`text-center py-12 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${isDarkMode ? 'bg-slate-800' : 'bg-gray-200'} mb-6`}>
                                    <Tag size={48} className="opacity-50" />
                                </div>
                                <h3 className="text-2xl font-semibold mb-4">Content Coming Soon</h3>
                                <p className="text-lg mb-2">This article is under development</p>
                                <p className="text-sm">Check back later for the full content</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <div className="mt-12 pt-8 border-t border-slate-700/50">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between">
                        <button
                            onClick={() => navigate('/blog')}
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${isDarkMode ? 'bg-teal-500/20 hover:bg-teal-500/30 text-teal-300' : 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-700'} transition-all duration-300`}
                        >
                            <ArrowLeft size={20} />
                            Back to All Articles
                        </button>

                        <Link
                            to="/"
                            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${isDarkMode ? 'bg-slate-700/50 hover:bg-slate-700 text-gray-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'} transition-all duration-300`}
                        >
                            <Home size={20} />
                            Go to Homepage
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;