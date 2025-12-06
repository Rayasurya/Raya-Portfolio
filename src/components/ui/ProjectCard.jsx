import React from "react";

function ElementCoverImage({ src }) {
    return (
        <div className="flex flex-col items-start overflow-hidden relative shrink-0 w-full h-[180px] bg-gray-200">
            <img
                alt=""
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                src={src}
            />
        </div>
    );
}

function ElementTitle({ title }) {
    return (
        <div className="w-full">
            <p className="font-sans font-medium leading-[1.5] text-[16px] text-white">
                {title}
            </p>
        </div>
    );
}

function ElementContent({ title }) {
    return (
        <div className="h-auto relative shrink-0 w-full bg-[#1a1a1a]">
            <div className="w-full box-border flex flex-col gap-[12px] items-start px-[20px] py-[24px]">
                <div className="w-full">
                    <ElementTitle title={title} />
                </div>
            </div>
        </div>
    );
}

export default function ProjectCard({ title, img, className = "" }) {
    return (
        <div
            className={`flex flex-col items-start overflow-hidden relative rounded-[8px] shadow-sm w-full h-full bg-[#1a1a1a] ${className}`}
            style={{ borderColor: '#1a1a1a', borderWidth: '7px', borderStyle: 'solid' }}
        >
            <ElementCoverImage src={img} />
            <ElementContent title={title} />
        </div>
    );
}
