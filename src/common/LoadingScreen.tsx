// common/LoadingScreen.tsx
import React from 'react';

interface LoadingScreenProps {
    isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-800 via-teal-800 to-emerald-900 flex items-center justify-center z-50 overflow-hidden">
            <div className="text-center space-y-8 px-4">
                <div className="relative">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 p-1 animate-spin">
                        <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                            <span className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">
                                TJ
                            </span>
                        </div>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 animate-ping opacity-20"></div>
                </div>
                <div className="space-y-2">
                    <h1 className="text-xl sm:text-2xl font-bold text-white">Loading Portfolio...</h1>
                    <div className="w-48 sm:w-64 h-2 bg-slate-700 rounded-full mx-auto overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;