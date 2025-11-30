import React from "react";
import { Avatar, AvatarImage } from "./Avatar";

function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}

export function TestimonialCard({
    author,
    text,
    href,
    className
}) {
    const Card = href ? 'a' : 'div';

    return (
        <Card
            {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
            className={cn(
                "flex flex-col rounded-lg border-t border-gray-200",
                "bg-gradient-to-b from-gray-50 to-gray-100/50",
                "p-4 text-start sm:p-6",
                "hover:from-gray-100 hover:to-gray-200/50",
                "max-w-[320px] sm:max-w-[320px]",
                "transition-colors duration-300",
                className
            )}
        >
            <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                    <AvatarImage src={author.avatar} alt={author.name} />
                </Avatar>
                <div className="flex flex-col items-start">
                    <h3 className="text-base font-semibold leading-none">
                        {author.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                        {author.handle}
                    </p>
                </div>
            </div>
            <p className="sm:text-base mt-4 text-sm text-gray-700">
                {text}
            </p>
        </Card>
    );
}
