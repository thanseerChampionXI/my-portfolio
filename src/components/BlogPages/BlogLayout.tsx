import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BlogList from './BlogList';
import ReactVitePerfectStackPage from './ReactVitePerfectStackPage';
import BuildingScalableReactPage from './BuildingScalableReactPage';
import BlockchainDevelopmentGuidePage from './BlockchainDevelopmentGuidePage';
import TypeScriptTipsBetterCodePage from './TypeScriptTipsBetterCodePage';

interface BlogLayoutProps {
    isDarkMode: boolean;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ isDarkMode }) => {
    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
            <Routes>
                <Route index element={<BlogList isDarkMode={isDarkMode} />} />
                <Route path="react-vite-perfect-stack" element={<ReactVitePerfectStackPage isDarkMode={isDarkMode} />} />
                <Route path="building-scalable-react-applications" element={<BuildingScalableReactPage isDarkMode={isDarkMode} />} />
                <Route path="blockchain-development-guide" element={<BlockchainDevelopmentGuidePage isDarkMode={isDarkMode} />} />
                <Route path="typescript-tips-better-code" element={<TypeScriptTipsBetterCodePage isDarkMode={isDarkMode} />} />
            </Routes>
        </div>
    );
};

export default BlogLayout;