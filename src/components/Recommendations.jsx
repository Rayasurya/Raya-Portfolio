import React from "react";
import { TestimonialCard } from "./ui/TestimonialCard";

function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

export function Recommendations({ className }) {
    const testimonials = [
        {
            author: {
                name: "Sarah Chen",
                handle: "@sarahdesigns",
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
            },
            text: "Outstanding attention to detail and exceptional design sense. Every interaction feels intentional and delightful."
        },
        {
            author: {
                name: "Michael Rodriguez",
                handle: "@mrod_tech",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            },
            text: "Brings a perfect balance of creativity and technical expertise. A true asset to any product team."
        },
        {
            author: {
                name: "Emily Watson",
                handle: "@emilywatson",
                avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
            },
            text: "Incredible ability to translate complex user needs into elegant, intuitive interfaces. Highly recommend!"
        },
        {
            author: {
                name: "David Kim",
                handle: "@davidkim_ux",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
            },
            text: "Consistently delivers pixel-perfect designs that users love. Great collaborator and problem solver."
        },
        {
            author: {
                name: "Alex Thompson",
                handle: "@alexthompson",
                avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
            },
            text: "Strategic thinker who elevates every project. Design decisions are always backed by solid research."
        }
    ];

    return (
        <section className={cn(
            "bg-white text-gray-900",
            "py-12 sm:py-24 md:py-32 px-0",
            className
        )}>
            <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 text-center sm:gap-16">
                <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
                    <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
                        Trusted by teams worldwide
                    </h2>
                    <p className="text-base max-w-[600px] font-medium text-gray-600 sm:text-xl">
                        Hear what collaborators and clients have to say about working together
                    </p>
                </div>

                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <div className="group flex overflow-hidden p-2 gap-4 flex-row">
                        <div className="flex shrink-0 justify-around gap-4 animate-marquee flex-row group-hover:[animation-play-state:paused]">
                            {[...Array(4)].map((_, setIndex) => (
                                testimonials.map((testimonial, i) => (
                                    <TestimonialCard
                                        key={`${setIndex}-${i}`}
                                        {...testimonial}
                                    />
                                ))
                            ))}
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-white sm:block" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-white sm:block" />
                </div>
            </div>
        </section>
    );
}
