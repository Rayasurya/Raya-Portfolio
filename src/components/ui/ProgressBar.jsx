import React, { useState, useEffect } from 'react';

/**
 * ProgressBar - Shows scroll progress at top of page
 * Displays 0-100% based on scroll position
 */
export function ProgressBar({ chapters = [] }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.pageYOffset;
            const progress = (scrolled / scrollHeight) * 100;
            setProgress(Math.min(100, Math.max(0, progress)));
        };

        updateProgress();
        window.addEventListener('scroll', updateProgress);

        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
            <div
                className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-200"
                style={{ width: `${progress}%` }}
            />

            {/* Chapter markers */}
            {chapters.length > 0 && (
                <div className="absolute inset-0 flex justify-between px-2">
                    {chapters.map((chapter, index) => (
                        <div
                            key={chapter.id}
                            className="relative"
                            style={{ left: `${(index / (chapters.length - 1)) * 100}%` }}
                        >
                            <div className="absolute top-0 w-px h-2 bg-gray-300" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProgressBar;
