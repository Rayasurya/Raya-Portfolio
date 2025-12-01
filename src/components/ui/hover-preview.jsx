import React, { useState, useCallback, useRef, useEffect } from "react";

const previewData = {
    figma: {
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=560&h=320&fit=crop",
        title: "Figma",
        subtitle: "Design and prototype with ease",
    },
    sketch: {
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=560&h=320&fit=crop",
        title: "Sketch",
        subtitle: "Professional design toolkit",
    },
    adobe: {
        image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=560&h=320&fit=crop",
        title: "Adobe XD",
        subtitle: "Create amazing user experiences",
    },
};

const HoverLink = ({ previewKey, children, onHoverStart, onHoverMove, onHoverEnd }) => {
    return (
        <span
            className="text-gray-800 font-bold cursor-pointer relative inline-block transition-colors duration-300 hover-link"
            onMouseEnter={(e) => onHoverStart(previewKey, e)}
            onMouseMove={onHoverMove}
            onMouseLeave={onHoverEnd}
            style={{
                fontFamily: "'Syne', sans-serif",
                paddingBottom: '2px',
                borderBottom: '2px solid',
                borderImage: 'linear-gradient(to right, #ef5350, #f48fb1, #7e57c2, #2196f3, #26c6da, #43a047, #eeff41, #f9a825, #ff5722) 1'
            }}
        >
            {children}
        </span>
    );
};

const PreviewCard = ({ data, position, isVisible, cardRef }) => {
    if (!data) return null;

    return (
        <div
            ref={cardRef}
            className={`fixed pointer-events-none z-[1000] opacity-0 transform translate-y-2.5 scale-95 transition-all duration-250 ${isVisible ? "!opacity-100 !translate-y-0 !scale-100" : ""
                }`}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
        >
            <div
                className="bg-zinc-900 rounded-2xl p-2 overflow-hidden backdrop-blur-sm"
                style={{
                    boxShadow:
                        "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 60px rgba(255, 107, 107, 0.1)",
                }}
            >
                <img
                    src={data.image}
                    alt={data.title}
                    className="w-[280px] h-auto rounded-lg block"
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <div className="px-2 pt-3 pb-2 text-sm text-white font-semibold" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {data.title}
                </div>
                <div className="px-2 pb-2 text-xs text-gray-500">{data.subtitle}</div>
            </div>
        </div>
    );
};

export function HoverPreview({ children, linkData = previewData }) {
    const [activePreview, setActivePreview] = useState(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        Object.entries(linkData).forEach(([, data]) => {
            const img = new Image();
            img.crossOrigin = "anonymous";
            img.src = data.image;
        });
    }, [linkData]);

    const updatePosition = useCallback((e) => {
        if (typeof window === 'undefined') return;

        const cardWidth = 300;
        const cardHeight = 250;
        const offsetY = 20;

        let x = e.clientX - cardWidth / 2;
        let y = e.clientY - cardHeight - offsetY;

        if (x + cardWidth > window.innerWidth - 20) {
            x = window.innerWidth - cardWidth - 20;
        }
        if (x < 20) {
            x = 20;
        }

        if (y < 20) {
            y = e.clientY + offsetY;
        }

        setPosition({ x, y });
    }, []);

    const handleHoverStart = useCallback(
        (key, e) => {
            setActivePreview(linkData[key]);
            setIsVisible(true);
            updatePosition(e);
        },
        [linkData, updatePosition]
    );

    const handleHoverMove = useCallback(
        (e) => {
            if (isVisible) {
                updatePosition(e);
            }
        },
        [isVisible, updatePosition]
    );

    const handleHoverEnd = useCallback(() => {
        setIsVisible(false);
    }, []);

    const renderChildren = (node) => {
        if (typeof node === 'string') {
            return node.split(/(\{[^}]+\})/).map((part, index) => {
                const match = part.match(/\{([^}]+)\}/);
                if (match) {
                    const [fullMatch, key] = match;
                    return (
                        <HoverLink
                            key={index}
                            previewKey={key}
                            onHoverStart={handleHoverStart}
                            onHoverMove={handleHoverMove}
                            onHoverEnd={handleHoverEnd}
                        >
                            {key}
                        </HoverLink>
                    );
                }
                return part;
            });
        }
        return node;
    };

    return (
        <>
            <div className="text-gray-400 text-2xl sm:text-3xl md:text-4xl leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {renderChildren(children)}
            </div>
            <PreviewCard data={activePreview} position={position} isVisible={isVisible} cardRef={cardRef} />
        </>
    );
}
