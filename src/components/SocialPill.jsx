import React from 'react';

export function SocialPill() {
    const links = [
        { name: 'Instagram', url: '#' },
        { name: 'LinkedIn', url: '#' },
        { name: 'Email', url: 'mailto:hello@rayasurya.com' },
        { name: 'WhatsApp', url: '#' },
    ];

    return (
        <div className="bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] px-8 py-4 flex items-center gap-8 border border-gray-100/50 backdrop-blur-sm">
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    className="text-gray-900 hover:text-gray-600 transition-colors text-[15px] font-medium tracking-wide"
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
}
