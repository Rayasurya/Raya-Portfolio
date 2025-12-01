import React, { useRef, useState, useEffect } from 'react';

export const SpotlightText = ({
    text = "SPOTLIGHT",
    className = "",
    spotlightSize = 150
}) => {
    const containerRef = useRef(null);
    const [position, setPosition] = useState({ x: -1000, y: -1000 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative w-full h-full bg-black flex items-center justify-center overflow-hidden cursor-default ${className}`}
        >
            {/* Base Layer - Dim Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                <span className="text-4xl md:text-6xl font-black tracking-tighter text-neutral-800">
                    {text}
                </span>
            </div>

            {/* Reveal Layer - Bright Text with Mask */}
            <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none transition-opacity duration-500"
                style={{
                    opacity: opacity,
                    maskImage: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(${spotlightSize}px circle at ${position.x}px ${position.y}px, black, transparent)`,
                }}
            >
                <span className="text-4xl md:text-6xl font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                    {text}
                </span>
            </div>

            {/* Optional: Subtle grid or texture for background interest */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                }}
            />
        </div>
    );
};
