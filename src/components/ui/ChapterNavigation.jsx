import React from 'react';
import { cn } from '../../lib/utils';

/**
 * ChapterNavigation - Fixed sidebar navigation for case studies
 * Shows list of chapters/sections that user can jump to
 */
export function ChapterNavigation({ chapters, activeId, className }) {
    const handleChapterClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            // Offset for fixed header
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <nav className={cn(
            "hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 w-64 z-40",
            className
        )}>
            <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                    Contents
                </h3>
                <ul className="space-y-3">
                    {chapters.map((chapter, index) => {
                        const isActive = activeId === chapter.id;
                        return (
                            <li key={chapter.id}>
                                <button
                                    onClick={() => handleChapterClick(chapter.id)}
                                    className={cn(
                                        "w-full text-left text-sm transition-all duration-200 flex items-center gap-3 group",
                                        isActive
                                            ? "text-orange-600 font-semibold"
                                            : "text-gray-600 hover:text-gray-900"
                                    )}
                                >
                                    <span className={cn(
                                        "flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono transition-colors",
                                        isActive
                                            ? "bg-orange-100 text-orange-600"
                                            : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                                    )}>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="leading-tight">{chapter.title}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default ChapterNavigation;
