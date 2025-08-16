import React, { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Send, Paperclip, X, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import type { FormData } from '../types';

interface ContactProps {
    isDarkMode: boolean;
    formData: FormData & { phone?: string; attachedFile?: File | null };
    setFormData: (data: FormData & { phone?: string; attachedFile?: File | null }) => void;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode, formData, setFormData }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleFileAttach = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        setFormData({ ...formData, attachedFile: file });
    };

    const removeFile = () => {
        setFormData({ ...formData, attachedFile: null });
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Only allow numbers and limit to 15 characters
        const numbersOnly = value.replace(/[^0-9]/g, '').slice(0, 15);
        setFormData({ ...formData, phone: numbersOnly });
    };

    const handleFormspreeSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('loading');
        setStatusMessage('');

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone || '');
            formDataToSend.append('message', formData.message);

            // File uploads not supported on free Formspree plan
            // if (formData.attachedFile) {
            //     formDataToSend.append('file', formData.attachedFile);
            // }

            // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
            const response = await fetch('https://formspree.io/f/manbzwpa', {
                method: 'POST',
                body: formDataToSend,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSubmitStatus('success');
                setStatusMessage('Thank you for your message! I\'ll get back to you within 24 hours.');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    phone: '',
                    attachedFile: null
                });
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Something went wrong');
            }
        } catch (error) {
            setSubmitStatus('error');
            setStatusMessage('Oops! There was a problem sending your message. Please try again or email me directly.');
            console.error('Form submission error:', error);
        }
    };

    // Status Message Component
    const StatusMessage = () => {
        if (submitStatus === 'idle') return null;

        const statusConfig = {
            loading: {
                icon: Loader,
                bgColor: isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50',
                borderColor: 'border-blue-500/30',
                textColor: isDarkMode ? 'text-blue-300' : 'text-blue-700',
                iconColor: 'text-blue-500',
                message: 'Sending your message...'
            },
            success: {
                icon: CheckCircle,
                bgColor: isDarkMode ? 'bg-green-900/20' : 'bg-green-50',
                borderColor: 'border-green-500/30',
                textColor: isDarkMode ? 'text-green-300' : 'text-green-700',
                iconColor: 'text-green-500',
                message: statusMessage
            },
            error: {
                icon: AlertCircle,
                bgColor: isDarkMode ? 'bg-red-900/20' : 'bg-red-50',
                borderColor: 'border-red-500/30',
                textColor: isDarkMode ? 'text-red-300' : 'text-red-700',
                iconColor: 'text-red-500',
                message: statusMessage
            }
        };

        const config = statusConfig[submitStatus];
        const IconComponent = config.icon;

        return (
            <div className={`p-4 rounded-lg border ${config.bgColor} ${config.borderColor} flex items-start gap-3 mb-6`}>
                <IconComponent
                    size={20}
                    className={`${config.iconColor} mt-0.5 ${submitStatus === 'loading' ? 'animate-spin' : ''}`}
                />
                <p className={`${config.textColor} text-sm leading-relaxed`}>
                    {config.message}
                </p>
            </div>
        );
    };

    return (
        <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
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
                                    className={`${isDarkMode ? 'bg-slate-800/40 border-teal-500/20 hover:border-emerald-500/40' : 'bg-white/50 border-blue-200 hover:border-blue-300'} p-6 rounded-xl border backdrop-blur-sm transition-colors duration-300 group flex items-center gap-4`}
                                >
                                    <Mail className="text-teal-400 group-hover:text-teal-300" size={24} />
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Email</h3>
                                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>thanseerjelani@gmail.com</p>
                                    </div>
                                </a>

                                <a
                                    href="tel:7624841366"
                                    className={`${isDarkMode ? 'bg-slate-800/40 border-teal-500/20 hover:border-emerald-500/40' : 'bg-white/50 border-blue-200 hover:border-blue-300'} p-6 rounded-xl border backdrop-blur-sm transition-colors duration-300 group flex items-center gap-4`}
                                >
                                    <Phone className="text-emerald-400 group-hover:text-emerald-300" size={24} />
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">Phone</h3>
                                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>+91 7624841366</p>
                                    </div>
                                </a>

                                <a
                                    href="https://linkedin.com/in/thanseer-jelani-520768255/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${isDarkMode ? 'bg-slate-800/40 border-teal-500/20 hover:border-emerald-500/40' : 'bg-white/50 border-blue-200 hover:border-blue-300'} p-6 rounded-xl border backdrop-blur-sm transition-colors duration-300 group flex items-center gap-4`}
                                >
                                    <Linkedin className="text-cyan-400 group-hover:text-cyan-300" size={24} />
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                                        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Connect with me</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={`${isDarkMode ? 'bg-slate-800/40 border-teal-500/20' : 'bg-white/50 border-blue-200'} rounded-xl p-8 border backdrop-blur-sm`}>
                        <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>

                        <form onSubmit={handleFormspreeSubmit} className="space-y-6">
                            <div>
                                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-slate-700/50 border-teal-600/30 text-white focus:ring-teal-500 focus:border-emerald-500' : 'bg-white border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-transparent'} border focus:ring-2 transition-colors duration-300`}
                                    placeholder="John Doe"
                                    disabled={submitStatus === 'loading'}
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
                                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-slate-700/50 border-teal-600/30 text-white focus:ring-teal-500 focus:border-emerald-500' : 'bg-white border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-transparent'} border focus:ring-2 transition-colors duration-300`}
                                    placeholder="john@example.com"
                                    disabled={submitStatus === 'loading'}
                                />
                            </div>

                            <div>
                                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                                    Phone Number <span className="text-sm opacity-70">(optional)</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.phone || ''}
                                    onChange={handlePhoneChange}
                                    maxLength={15}
                                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-slate-700/50 border-teal-600/30 text-white focus:ring-teal-500 focus:border-emerald-500' : 'bg-white border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-transparent'} border focus:ring-2 transition-colors duration-300`}
                                    placeholder="Your Phone Number"
                                    disabled={submitStatus === 'loading'}
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
                                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-slate-700/50 border-teal-600/30 text-white focus:ring-teal-500 focus:border-emerald-500' : 'bg-white border-gray-300 text-gray-900 focus:ring-purple-500 focus:border-transparent'} border focus:ring-2 transition-colors duration-300 resize-none`}
                                    placeholder="Tell me about your project..."
                                    disabled={submitStatus === 'loading'}
                                />
                            </div>

                            {/* File Attachment */}
                            <div>
                                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                                    Attach File <span className="text-sm opacity-70">(optional)</span>
                                </label>

                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileAttach}
                                    className="hidden"
                                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
                                    disabled={submitStatus === 'loading'}
                                />

                                <div className="space-y-3">
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        disabled={submitStatus === 'loading'}
                                        className={`w-full px-4 py-3 rounded-lg border-2 border-dashed ${isDarkMode ? 'border-teal-600/30 bg-slate-700/20 hover:border-teal-500/50 hover:bg-slate-700/40 text-gray-300' : 'border-gray-300 bg-gray-50 hover:border-purple-400 hover:bg-gray-100 text-gray-700'} transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
                                    >
                                        <Paperclip size={18} />
                                        Choose File
                                    </button>

                                    <p className={`text-xs text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        To attach files, please email me directly at{' '}
                                        <a
                                            href="mailto:thanseerjelani@gmail.com"
                                            className={`${isDarkMode ? 'text-teal-400 hover:text-teal-300' : 'text-blue-500 hover:text-blue-600'} underline transition-colors duration-200`}
                                        >
                                            thanseerjelani@gmail.com
                                        </a>
                                    </p>

                                    {formData.attachedFile && (
                                        <div className={`flex items-center justify-between p-3 rounded-lg ${isDarkMode ? 'bg-slate-700/50 border border-teal-600/30' : 'bg-white border border-gray-300'}`}>
                                            <div className="flex items-center gap-2">
                                                <Paperclip size={16} className={isDarkMode ? 'text-teal-400' : 'text-purple-500'} />
                                                <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                                    {formData.attachedFile.name}
                                                </span>
                                                <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                                    ({(formData.attachedFile.size / 1024 / 1024).toFixed(2)} MB)
                                                </span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={removeFile}
                                                disabled={submitStatus === 'loading'}
                                                className={`p-1 rounded-full ${isDarkMode ? 'hover:bg-slate-600 text-gray-400 hover:text-red-400' : 'hover:bg-gray-200 text-gray-500 hover:text-red-500'} transition-colors duration-200 disabled:opacity-50`}
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={submitStatus === 'loading'}
                                className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {submitStatus === 'loading' ? (
                                    <Loader size={20} className="animate-spin" />
                                ) : (
                                    <Send size={20} />
                                )}
                                {submitStatus === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>

                            {/* Status Message - Now below the button */}
                            <StatusMessage />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;