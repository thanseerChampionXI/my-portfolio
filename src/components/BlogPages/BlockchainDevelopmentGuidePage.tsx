import React from 'react';
import BlogPost from './BlogPost';
import { blogPosts } from '../../data/portfolio';

interface BlockchainDevelopmentGuidePageProps {
    isDarkMode: boolean;
}

const BlockchainDevelopmentGuidePage: React.FC<BlockchainDevelopmentGuidePageProps> = ({ isDarkMode }) => {
    const post = blogPosts.find(p => p.id === 'blockchain-development-guide');

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <BlogPost post={post} isDarkMode={isDarkMode}>
            {/* Add your blog content here */}
            <div className="space-y-6">
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    This is where the content for "Getting Started with Blockchain Development" will go.
                </p>

                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    You can add your full article content here using JSX, including:
                </p>

                <ul className={`list-disc list-inside space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <li>Blockchain fundamentals</li>
                    <li>Smart contract development</li>
                    <li>Web3 integration</li>
                    <li>DApp deployment strategies</li>
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

export default BlockchainDevelopmentGuidePage;