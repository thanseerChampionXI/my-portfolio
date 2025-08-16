import React from 'react';
import BlogPost from './BlogPost';
import { blogPosts } from '../../data/portfolio';

interface TypeScriptTipsBetterCodePageProps {
    isDarkMode: boolean;
}

const TypeScriptTipsBetterCodePage: React.FC<TypeScriptTipsBetterCodePageProps> = ({ isDarkMode }) => {
    const post = blogPosts.find(p => p.id === 'typescript-tips-better-code');

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <BlogPost post={post} isDarkMode={isDarkMode}>
            {/* Add your blog content here */}
            <div className="space-y-6">
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    This is where the content for "TypeScript Tips for Better Code" will go.
                </p>

                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    You can add your full article content here using JSX, including:
                </p>

                <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>Advanced TypeScript techniques</li>
                    <li>Type safety best practices</li>
                    <li>Generic programming patterns</li>
                    <li>Performance optimization tips</li>
                </ul>

                <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        💡 Tip: Replace this placeholder content with your actual blog post content.
                    </p>
                </div>
            </div>
        </BlogPost>
    );
};

export default TypeScriptTipsBetterCodePage;