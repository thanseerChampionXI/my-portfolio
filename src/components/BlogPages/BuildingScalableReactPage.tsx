import React from 'react';
import BlogPost from './BlogPost';
import { blogPosts } from '../../data/portfolio';

interface BuildingScalableReactPageProps {
    isDarkMode: boolean;
}

const BuildingScalableReactPage: React.FC<BuildingScalableReactPageProps> = ({ isDarkMode }) => {
    const post = blogPosts.find(p => p.id === 'building-scalable-react-applications');

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <BlogPost post={post} isDarkMode={isDarkMode}>
            {/* Add your blog content here */}
            <div className="space-y-6">
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    This is where the content for "Building Scalable React Applications" will go.
                </p>

                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    You can add your full article content here using JSX, including:
                </p>

                <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>Architecture patterns</li>
                    <li>State management strategies</li>
                    <li>Component organization</li>
                    <li>Performance optimization</li>
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

export default BuildingScalableReactPage;