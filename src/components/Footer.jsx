import React from 'react';

const Footer = () => {
    const socialLinks = [
        { name: 'Instagram', url: '#' },
        { name: 'LinkedIn', url: '#' },
        { name: 'Email', url: 'mailto:hello@rayasurya.com' },
        { name: 'WhatsApp', url: '#' },
    ];

    return (
        <footer className="w-full py-12 px-6 bg-gray-50 border-t border-gray-100 mt-20 mb-[80px] md:mb-0">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Raya.</h3>
                    <p className="text-gray-500 text-sm">Designing interfaces that feel inevitable.</p>
                </div>

                <div className="flex gap-6">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            className="text-gray-400 hover:text-black transition-colors text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="text-gray-400 text-xs">
                    © {new Date().getFullYear()} Raya Surya
                </div>
            </div>
        </footer>
    );
};

export default Footer;
