import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { HighlighterItem, HighlightGroup, Particles } from "./ui/highlighter";

export function Connect() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(
            [
                ["#pointer", { left: 212, top: 50 }, { duration: 0 }], // Start at UI/UX (approx)
                ["#ui-design", { opacity: 1 }, { duration: 0.3 }],
                [
                    "#pointer",
                    { left: 60, top: 90 }, // Web Dev: left-2 (8px) + offset, top-20 (80px) + offset
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#ui-design", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
                ["#web-dev", { opacity: 1 }, { duration: 0.3 }],
                [
                    "#pointer",
                    { left: 240, top: 200 }, // Product Design: right-1 (4px) -> 300-4=296, bottom-20 (80px) -> 270-80=190
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#web-dev", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
                ["#product-design", { opacity: 1 }, { duration: 0.3 }],
                [
                    "#pointer",
                    { left: 90, top: 230 }, // Branding: left-14 (56px), bottom-12 (48px) -> 270-48=222
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#product-design", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
                ["#branding", { opacity: 1 }, { duration: 0.3 }],
                [
                    "#pointer",
                    { left: 212, top: 50 }, // Back to UI/UX
                    { at: "+0.5", duration: 0.5, ease: "easeInOut" },
                ],
                ["#branding", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
            ],
            {
                repeat: Infinity,
            }
        );
    }, [animate]);

    return (
        <section className="relative mx-auto mb-20 mt-6 max-w-5xl">
            <HighlightGroup className="group h-full">
                <div className="group/item h-full">
                    <HighlighterItem className="rounded-3xl p-6">
                        <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-gray-200 bg-white">
                            <Particles
                                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                                quantity={200}
                                color={"#555555"}
                                vy={-0.2}
                            />
                            <div className="flex justify-center p-6">
                                <div className="flex h-full w-full max-w-6xl flex-col justify-center gap-10 md:h-[300px] md:flex-row">
                                    <div
                                        className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                                        ref={scope}
                                    >
                                        <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500" />

                                        <div
                                            id="ui-design"
                                            className="absolute right-12 top-10 rounded-3xl border border-gray-400 bg-gray-200 px-2 py-1.5 text-xs opacity-50"
                                        >
                                            UI/UX Design
                                        </div>
                                        <div
                                            id="web-dev"
                                            className="absolute left-2 top-20 rounded-3xl border border-gray-400 bg-gray-200 px-2 py-1.5 text-xs opacity-50"
                                        >
                                            Web Development
                                        </div>
                                        <div
                                            id="product-design"
                                            className="absolute bottom-20 right-1 rounded-3xl border border-gray-400 bg-gray-200 px-2 py-1.5 text-xs opacity-50"
                                        >
                                            Product Design
                                        </div>
                                        <div
                                            id="branding"
                                            className="absolute bottom-12 left-14 rounded-3xl border border-gray-400 bg-gray-200 px-2 py-1.5 text-xs opacity-50"
                                        >
                                            Branding
                                        </div>

                                        <div id="pointer" className="absolute z-50">
                                            <svg
                                                width="16.8"
                                                height="18.2"
                                                viewBox="0 0 12 13"
                                                className="fill-orange-500"
                                                stroke="white"
                                                strokeWidth="1"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                                                />
                                            </svg>
                                            <span className="relative -top-1 left-3 rounded-3xl bg-orange-500 px-2 py-1 text-xs text-white">
                                                You
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex h-full flex-col justify-center md:ml-10 md:w-[400px]">
                                        <h3 className="mt-6 pb-1 text-center font-bold md:text-left">
                                            <span className="text-2xl md:text-4xl">
                                                Any questions about Design?
                                            </span>
                                        </h3>
                                        <p className="mb-6 text-center text-gray-600 md:text-left">
                                            Feel free to reach out to me!
                                        </p>
                                        <div className="flex justify-center md:justify-start">
                                            <a
                                                href="https://cal.com/rayasurya"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 h-10 px-4 py-2"
                                            >
                                                Book a call
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </HighlighterItem>
                </div>
            </HighlightGroup>
        </section>
    );
}
