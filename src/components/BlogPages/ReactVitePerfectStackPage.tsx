import React from 'react';
import BlogPost from './BlogPost';
import { blogPosts } from '../../data/portfolio';


interface ReactVitePerfectStackPageProps {
    isDarkMode: boolean;
}

const ReactVitePerfectStackPage: React.FC<ReactVitePerfectStackPageProps> = ({ isDarkMode }) => {
    const post = blogPosts.find(p => p.id === 'react-vite-perfect-stack');

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <BlogPost post={post} isDarkMode={isDarkMode}>
            {/* Add your blog content here */}
            <div className="space-y-6">
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    This is where the content for "React + Vite: The Perfect Development Stack" will go.
                </p>

                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    You can add your full article content here using JSX, including:
                </p>

                <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>Rich text formatting</li>
                    <li>Code blocks</li>
                    <li>Images and media</li>
                    <li>Interactive components</li>
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

export default ReactVitePerfectStackPage;