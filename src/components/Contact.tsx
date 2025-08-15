import React from 'react';
import { Mail, Phone, Linkedin, Send, ArrowRight } from 'lucide-react';
import { FormData } from '../types';
import { blogPosts } from '../data/portfolio';

interface ContactProps {
    isDarkMode: boolean;
    formData: FormData;
    setFormData: (data: FormData) => void;
    handleFormSubmit: (e: React.FormEvent) => void;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode, formData, setFormData, handleFormSubmit }) => {
    return (
        <>

            {/* Blog Section */}
            <section id="blog" className={`py-20 ${isDarkMode ? 'bg-slate-800/30' : 'bg-gray-100/50'} overflow-hidden`}>
                <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-24">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
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
                                        className={`${isDarkMode ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40' : 'bg-white/50 border-blue-200 hover:border-blue-300'} 
                                      rounded-xl p-6 border backdrop-blur-sm transition-all duration-300 hover:scale-105 group cursor-pointer
                                      flex-shrink-0 w-80 mx-4`}
                                    >
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                                                    {post.title}
                                                </h3>
                                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 leading-relaxed line-clamp-3`}>
                                                    {post.excerpt}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.map((tag, idx) => (
                                                    <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className={`flex justify-between items-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                                <span>{post.readTime}</span>
                                            </div>

                                            <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 group-hover:translate-x-1">
                                                Read More <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </article>
                                ))}

                                {/* Duplicate set for seamless loop */}
                                {blogPosts.map((post, index) => (
                                    <article
                                        key={`second-${index}`}
                                        className={`${isDarkMode ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40' : 'bg-white/50 border-blue-200 hover:border-blue-300'} 
                                      rounded-xl p-6 border backdrop-blur-sm transition-all duration-300 hover:scale-105 group cursor-pointer
                                      flex-shrink-0 w-80 mx-4`}
                                    >
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                                                    {post.title}
                                                </h3>
                                                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 leading-relaxed line-clamp-3`}>
                                                    {post.excerpt}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.map((tag, idx) => (
                                                    <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className={`flex justify-between items-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                                <span>{post.readTime}</span>
                                            </div>

                                            <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 group-hover:translate-x-1">
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

            {/* Contact Section */}
            <section id="contact" className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Let's Work Together
                    </h2>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
                                    I'm always interested in new opportunities and exciting projects.
                                    Feel free to reach out if you'd like to collaborate!
                                </p>

                                <div className="grid gap-6">
                                    <a
                                        href="mailto:thanseerjelani@gmail.com"
                                        className={`${isDarkMode ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40' : 'bg-white/50 border-blue-200 hover:border-blue-300'} p-6 rounded-xl border backdrop-blur-sm transition-colors duration-300 group flex items-center gap-4`}
                                    >
                                        <Mail className="text-purple-400 group-hover:text-purple-300" size={24} />
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Email</h3>
                                            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>thanseerjelani@gmail.com</p>
                                        </div>
                                    </a>

                                    <a
                                        href="tel:7624841366"
                                        className={`${isDarkMode ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40' : 'bg-white/50 border-blue-200 hover:border-blue-300'} p-6 rounded-xl border backdrop-blur-sm transition-colors duration-300 group flex items-center gap-4`}
                                    >
                                        <Phone className="text-cyan-400 group-hover:text-cyan-300" size={24} />
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">Phone</h3>
                                            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>+91 7624841366</p>
                                        </div>
                                    </a>

                                    <a
                                        href="https://linkedin.com/in/thanseer-jelani-520768255/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${isDarkMode ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40' : 'bg-white/50 border-blue-200 hover:border-blue-300'} p-6 rounded-xl border backdrop-blur-sm transition-colors duration-300 group flex items-center gap-4`}
                                    >
                                        <Linkedin className="text-blue-400 group-hover:text-blue-300" size={24} />
                                        <div>
                                            <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                                            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Connect with me</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={`${isDarkMode ? 'bg-slate-800/50 border-purple-500/20' : 'bg-white/50 border-blue-200'} rounded-xl p-8 border backdrop-blur-sm`}>
                            <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>

                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div>
                                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300`}
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300`}
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300 resize-none`}
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                                >
                                    <Send size={20} />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;