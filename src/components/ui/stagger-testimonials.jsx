"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
    {
        tempId: 0,
        testimonial: "Raya's design work transformed our user experience completely. The attention to detail is remarkable.",
        by: "Sarah Chen, CEO at TechCorp",
        imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    {
        tempId: 1,
        testimonial: "Working with Raya was a game-changer. The creative solutions brought our vision to life.",
        by: "Michael Rodriguez, CTO at InnovateCo",
        imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
        tempId: 2,
        testimonial: "The design process was seamless and the results exceeded our expectations. Highly recommend!",
        by: "Emily Watson, Product Manager at DesignHub",
        imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
        tempId: 3,
        testimonial: "Raya's ability to translate complex ideas into intuitive designs is exceptional.",
        by: "David Kim, UX Lead at CreativeSolutions",
        imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
        tempId: 4,
        testimonial: "If I could give 11 stars, I'd give 12. Outstanding work!",
        by: "Alex Thompson, Founder at StartupXYZ",
        imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    }
];

const TestimonialCard = ({ position, testimonial, handleMove, cardSize }) => {
    const isCenter = position === 0;

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out rounded-3xl",
                isCenter
                    ? "z-10 bg-black text-white border-black"
                    : "z-0 bg-white text-gray-900 border-gray-200 hover:border-orange-500/50"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
                boxShadow: isCenter ? "0px 20px 40px -10px rgba(0,0,0,0.2)" : "0px 0px 0px 0px transparent"
            }}
        >

            <img
                src={testimonial.imgSrc}
                alt={testimonial.by.split(',')[0]}
                className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
                style={{
                    boxShadow: "3px 3px 0px #fff"
                }}
            />
            <h3 className={cn(
                "text-base sm:text-xl font-medium",
                isCenter ? "text-white" : "text-gray-900"
            )}>
                "{testimonial.testimonial}"
            </h3>
            <p className={cn(
                "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
                isCenter ? "text-gray-300" : "text-gray-600"
            )}>
                - {testimonial.by}
            </p>
        </div>
    );
};

export const StaggerTestimonials = () => {
    const [cardSize, setCardSize] = useState(365);
    const [testimonialsList, setTestimonialsList] = useState(testimonials);

    const handleMove = (steps) => {
        const newList = [...testimonialsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 365 : 290);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div
            className="relative w-full overflow-hidden bg-gray-50"
            style={{ height: 600 }}
        >
            {testimonialsList.map((testimonial, index) => {
                const position = index - Math.floor(testimonialsList.length / 2);
                return (
                    <TestimonialCard
                        key={testimonial.tempId}
                        testimonial={testimonial}
                        handleMove={handleMove}
                        position={position}
                        cardSize={cardSize}
                    />
                );
            })}
            <div className="absolute w-full flex justify-between px-4 top-1/2 -translate-y-1/2 md:top-auto md:bottom-4 md:left-1/2 md:-translate-y-0 md:-translate-x-1/2 md:justify-center md:gap-2 md:w-auto pointer-events-none">
                <button
                    onClick={() => handleMove(-1)}
                    className={cn(
                        "flex h-12 w-12 md:h-14 md:w-14 items-center justify-center text-2xl transition-colors rounded-full pointer-events-auto",
                        "bg-white border-2 border-gray-200 hover:bg-black hover:text-white",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2",
                        "shadow-lg md:shadow-none"
                    )}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className={cn(
                        "flex h-12 w-12 md:h-14 md:w-14 items-center justify-center text-2xl transition-colors rounded-full pointer-events-auto",
                        "bg-white border-2 border-gray-200 hover:bg-black hover:text-white",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2",
                        "shadow-lg md:shadow-none"
                    )}
                    aria-label="Next testimonial"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};
