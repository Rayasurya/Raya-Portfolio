import React, { useState } from "react";

export const BubbleText = ({ text = "INTERACTIVE", className = "" }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <h2
            onMouseLeave={() => setHoveredIndex(null)}
            className={`text-center text-black ${className}`}
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1 }}
        >
            {text.split("").map((char, idx) => {
                const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - idx) : null;

                // Base styles
                let style = {
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'default',
                    display: 'inline-block',
                    fontWeight: 400, // Regular
                    transform: 'scale(1)'
                };

                // Apply different styles based on the distance from the hovered character
                if (distance === 0) {
                    style.fontWeight = 700; // Bold
                    style.transform = 'scale(1.3)';
                } else if (distance === 1) {
                    style.fontWeight = 600; // Semi-bold
                    style.transform = 'scale(1.15)';
                } else if (distance === 2) {
                    style.fontWeight = 500; // Medium
                    style.transform = 'scale(1.05)';
                }

                return (
                    <span
                        key={idx}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        style={style}
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                );
            })}
        </h2>
    );
};
