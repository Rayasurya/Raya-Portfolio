"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
    {
        tempId: 0,
        testimonial: "Surya is always the first person who comes to mind when I think about great design. After working with him for almost a year, I’ve seen how much passion he puts into quality and creative thinking. He doesn’t just deliver work — he helps us grow by pointing out areas of improvement and offering meaningful suggestions. Grateful to have worked with him.",
        by: "Bharathi M., Corporate Trainer",
        imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    {
        tempId: 1,
        testimonial: "Surya, is working with Talentpepz as a Creative Specialist, I'm highly impressed with his eagerness towards Learning and Personal Development. His curiosity to present everything is commendable.",
        by: "Dr Fazalur Rahman, Talentpepz",
        imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
        tempId: 2,
        testimonial: "Surya is always the first person who comes to mind when I think about great design. After working with him for almost a year, I’ve seen how much passion he puts into quality and creative thinking. He doesn’t just deliver work — he helps us grow by pointing out areas of improvement and offering meaningful suggestions. Grateful to have worked with him.",
        by: "Bharathi M., Corporate Trainer",
        imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    {
        tempId: 3,
        testimonial: "Surya, is working with Talentpepz as a Creative Specialist, I'm highly impressed with his eagerness towards Learning and Personal Development. His curiosity to present everything is commendable.",
        by: "Dr Fazalur Rahman, Talentpepz",
        imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
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
                "text-sm sm:text-lg font-medium line-clamp-6",
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
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

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

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            // Swipe left
            handleMove(1);
        }

        if (touchStart - touchEnd < -75) {
            // Swipe right
            handleMove(-1);
        }
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
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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
            {/* Desktop-only buttons */}
            <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 gap-2">
                <button
                    onClick={() => handleMove(-1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded-full",
                        "bg-white border-2 border-gray-200 hover:bg-black hover:text-white",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                    )}
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className={cn(
                        "flex h-14 w-14 items-center justify-center text-2xl transition-colors rounded-full",
                        "bg-white border-2 border-gray-200 hover:bg-black hover:text-white",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                    )}
                    aria-label="Next testimonial"
                >
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
};
