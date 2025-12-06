import React from 'react';
import svgPaths from "../imports/svg-t9mpy1m9ip";

function Frame3({ scale = 1 }) {
    return (
        <div
            className="absolute bg-[#d8eccb] box-border content-stretch flex gap-[10px] items-center justify-center rounded-[10px]"
            style={{
                left: `${1103 * scale}px`,
                top: `${319 * scale}px`,
                padding: `${10 * scale}px ${15 * scale}px`
            }}
        >
            <p className="font-['Manrope',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#467627] text-nowrap whitespace-pre" style={{ fontSize: `${24 * scale}px` }}>{`Boosted Sales & 100K+ Audience`}</p>
        </div>
    );
}

function Frame4({ scale = 1 }) {
    return (
        <div
            className="absolute bg-[#e4cfec] box-border content-stretch flex gap-[10px] items-center justify-center rounded-[10px]"
            style={{
                left: `${110 * scale}px`,
                top: `${319 * scale}px`,
                padding: `${10 * scale}px ${15 * scale}px`
            }}
        >
            <p className="font-['Manrope',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#571d6d] text-nowrap whitespace-pre" style={{ fontSize: `${24 * scale}px` }}>UX/UI</p>
        </div>
    );
}

function Frame1({ scale = 1 }) {
    return (
        <div
            className="absolute bg-[#d0e7f4] box-border content-stretch flex gap-[10px] items-center justify-center rounded-[10px]"
            style={{
                left: `${74 * scale}px`,
                top: `${24 * scale}px`,
                padding: `${10 * scale}px ${15 * scale}px`
            }}
        >
            <p className="font-['Manrope',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#2476a3] text-nowrap whitespace-pre" style={{ fontSize: `${24 * scale}px` }}>User Behavior Insights</p>
        </div>
    );
}

function Frame2({ scale = 1 }) {
    return (
        <div
            className="absolute bg-[#e7edc8] box-border content-stretch flex gap-[10px] items-center justify-center rounded-[10px]"
            style={{
                left: `${528 * scale}px`,
                top: `${24 * scale}px`,
                padding: `${10 * scale}px ${15 * scale}px`
            }}
        >
            <p className="font-['Manrope',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#778240] text-nowrap whitespace-pre" style={{ fontSize: `${24 * scale}px` }}>Generative Al</p>
        </div>
    );
}

function Frame({ scale = 1 }) {
    return (
        <div
            className="absolute bg-[#f5d2d6] box-border content-stretch flex gap-[10px] items-center justify-center rounded-[10px]"
            style={{
                left: `${1172 * scale}px`,
                top: `${24 * scale}px`,
                padding: `${10 * scale}px ${15 * scale}px`
            }}
        >
            <p className="font-['Manrope',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#c42e42] text-nowrap whitespace-pre" style={{ fontSize: `${24 * scale}px` }}>Motion Design</p>
        </div>
    );
}

export default function FlexibleHero({ textSize = 50, className = '' }) {
    const scale = textSize / 50;
    const lineHeight = 105 * scale;

    return (
        <div className={`bg-transparent relative size-full ${className}`} data-name="Template 13">
            {/* Blue highlight under "psychology," */}
            <div
                className="absolute bg-[rgba(74,189,251,0.2)] border-[#4abdfb] border-[0px_0px_3px] border-solid"
                style={{
                    height: `${60 * scale}px`,
                    left: `${411 * scale}px`,
                    top: `${122 * scale}px`,
                    width: `${297 * scale}px`
                }}
            />

            {/* Green highlight under "drive growth" */}
            <div
                className="absolute bg-[rgba(111,211,49,0.2)] border-[#6fd331] border-[0px_0px_3px] border-solid"
                style={{
                    height: `${65 * scale}px`,
                    left: `${1026 * scale}px`,
                    top: `${221 * scale}px`,
                    width: `${315 * scale}px`
                }}
            />

            {/* Yellow highlight under "AI tools," */}
            <div
                className="absolute bg-[rgba(188,219,33,0.2)] border-[#bcdb21] border-[0px_0px_3px] border-solid"
                style={{
                    height: `${60 * scale}px`,
                    left: `${707 * scale}px`,
                    top: `${122 * scale}px`,
                    width: `${207 * scale}px`
                }}
            />

            {/* Purple highlight under "design engaging" */}
            <div
                className="absolute bg-[rgba(172,67,212,0.2)] border-[#ac43d4] border-[0px_0px_3px] border-solid"
                style={{
                    height: `${60 * scale}px`,
                    left: `${272 * scale}px`,
                    top: `${226 * scale}px`,
                    width: `${411 * scale}px`
                }}
            />

            {/* Red highlight under "storytelling" */}
            <div
                className="absolute bg-[rgba(255,81,104,0.2)] border-[#ff5168] border-[0px_0px_3px] border-solid"
                style={{
                    height: `${60 * scale}px`,
                    left: `${1016 * scale}px`,
                    top: `${122 * scale}px`,
                    width: `${296 * scale}px`
                }}
            />

            {/* Main Hero Text - hardcoded top position to align with highlights */}
            <p
                className="absolute font-['Manrope',sans-serif] font-bold text-center text-nowrap translate-x-[-50%] whitespace-pre text-black"
                style={{
                    fontSize: `${textSize}px`,
                    lineHeight: `${lineHeight}px`,
                    left: `${775 * scale}px`,
                    top: `${95 * scale}px`
                }}
            >
                <span className="text-[#222222]">I blend</span> <span className="text-[#2476a3]">psychology,</span> <span className="text-[#778240]">AI tools,</span> <span className="text-[#222222]">and</span>{" "}
                <span className="text-[#c42e42]">
                    storytelling
                    <br aria-hidden="true" />
                </span>
                <span className="text-[#222222]">to</span> <span className="text-[#571d6d]">design engaging</span> <span className="text-[#222222]">products that</span> <span className="text-[#467627]">drive growth</span>
            </p>

            {/* Floating Tags */}
            <Frame3 scale={scale} />
            <Frame4 scale={scale} />
            <Frame1 scale={scale} />
            <Frame2 scale={scale} />
            <Frame scale={scale} />

            {/* Connector from "Boosted Sales" tag to "drive growth" */}
            <div
                className="absolute flex items-center justify-center"
                style={{ height: `${62 * scale}px`, left: `${1069 * scale}px`, top: `${286 * scale}px`, width: `${34 * scale}px` }}
            >
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                    <div style={{ height: `${62 * scale}px`, width: `${34 * scale}px` }} className="relative">
                        <div className="absolute bottom-[-2.42%] left-0 right-[-4.41%] top-0">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 64">
                                <path d={svgPaths.p178c0700} stroke="var(--stroke-0, #467627)" strokeDasharray="6 6" strokeWidth="3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Connector from "UX/UI" tag to "design engaging" */}
            <div
                className="absolute flex items-center justify-center"
                style={{ height: `${62 * scale}px`, left: `${209 * scale}px`, top: `${286 * scale}px`, width: `${155 * scale}px` }}
            >
                <div className="flex-none scale-y-[-100%]">
                    <div style={{ height: `${62 * scale}px`, width: `${155 * scale}px` }} className="relative">
                        <div className="absolute bottom-0 left-0 right-[-0.97%] top-[-2.42%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 157 64">
                                <path d={svgPaths.p3daeedc0} stroke="var(--stroke-0, #571D6D)" strokeDasharray="6 6" strokeWidth="3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Connector from "User Behavior" tag to "psychology" */}
            <div
                className="absolute flex items-center justify-center"
                style={{ left: `${365 * scale}px`, width: `${70 * scale}px`, height: `${70 * scale}px`, top: `${52 * scale}px` }}
            >
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                    <div className="relative" style={{ width: `${70 * scale}px`, height: `${70 * scale}px` }}>
                        <div className="absolute bottom-0 left-[-2.14%] right-0 top-[-2.14%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
                                <path d={svgPaths.p218a5a80} stroke="var(--stroke-0, #2476A3)" strokeDasharray="6 6" strokeWidth="3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Connector from "Generative AI" tag to "AI tools" */}
            <div
                className="absolute flex items-center justify-center"
                style={{ height: `${70 * scale}px`, left: `${714 * scale}px`, top: `${52 * scale}px`, width: `${54 * scale}px` }}
            >
                <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                    <div style={{ height: `${70 * scale}px`, width: `${54 * scale}px` }} className="relative">
                        <div className="absolute bottom-0 left-[-2.78%] right-0 top-[-2.14%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 72">
                                <path d={svgPaths.p1bca7360} stroke="var(--stroke-0, #778240)" strokeDasharray="6 6" strokeWidth="3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Connector from "Motion Design" tag to "storytelling" */}
            <div
                className="absolute"
                style={{ height: `${70 * scale}px`, left: `${1118 * scale}px`, top: `${52 * scale}px`, width: `${54 * scale}px` }}
            >
                <div className="absolute bottom-0 left-[-2.78%] right-0 top-[-2.14%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 72">
                        <path d={svgPaths.p1bca7360} stroke="var(--stroke-0, #C42E42)" strokeDasharray="6 6" strokeWidth="3" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
