import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedSocialLinks = React.forwardRef(({ socials, className, ...props }, ref) => {
    const [hoveredSocial, setHoveredSocial] = useState(null);
    const [rotation, setRotation] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [copiedSocial, setCopiedSocial] = useState(null);

    const animation = {
        scale: clicked ? [1, 1.3, 1] : 1,
        transition: { duration: 0.3 },
    };

    // Detect if device is mobile
    const isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    useEffect(() => {
        const handleClick = () => {
            setClicked(true);
            setTimeout(() => {
                setClicked(false);
            }, 200);
        };
        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, [clicked]);

    const handleWhatsAppClick = (e, socialName) => {
        // On desktop, prevent navigation and copy to clipboard
        if (!isMobile()) {
            e.preventDefault();
            const phoneNumber = '+91 6382127165';

            // Try to copy to clipboard
            navigator.clipboard.writeText(phoneNumber)
                .then(() => {
                    setCopiedSocial(socialName);
                    setTimeout(() => {
                        setCopiedSocial(null);
                    }, 2000);
                })
                .catch((err) => {
                    console.error('Failed to copy:', err);
                    // Fallback: still show copied state even if copy fails
                    setCopiedSocial(socialName);
                    setTimeout(() => {
                        setCopiedSocial(null);
                    }, 2000);
                });
        }
        // On mobile, let the link work normally
    };

    return (
        <div
            ref={ref}
            className={`flex items-center justify-center gap-0 ${className || ''}`}
            {...props}
        >
            {socials.map((social, index) => (
                <a
                    key={index}
                    href={social.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative cursor-pointer px-3 py-1 transition-all duration-200 ${hoveredSocial && hoveredSocial !== social.name
                        ? 'opacity-50'
                        : 'opacity-100'
                        }`}
                    onMouseEnter={() => {
                        setHoveredSocial(social.name);
                        setRotation(Math.random() * 20 - 10);
                    }}
                    onMouseLeave={() => setHoveredSocial(null)}
                    onClick={(e) => {
                        setClicked(true);
                        // Special handling for WhatsApp
                        if (social.name === 'WhatsApp') {
                            handleWhatsAppClick(e, social.name);
                        }
                    }}
                >
                    <span className={`block text-sm transition-all duration-200 ${copiedSocial === social.name ? 'text-green-600 font-semibold' : 'text-black'
                        }`}>
                        {copiedSocial === social.name ? (
                            <span className="flex items-center gap-1">
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="inline"
                                >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                                Copied!
                            </span>
                        ) : social.name}
                    </span>

                    <AnimatePresence>
                        {hoveredSocial === social.name && (
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 flex h-full w-full items-center justify-center"
                                animate={animation}
                            >
                                <motion.img
                                    key={social.name}
                                    src={social.image}
                                    alt={social.name}
                                    className="size-12"
                                    initial={{
                                        y: -40,
                                        rotate: rotation,
                                        opacity: 0,
                                        filter: 'blur(2px)',
                                    }}
                                    animate={{ y: -50, opacity: 1, filter: 'blur(0px)' }}
                                    exit={{ y: -40, opacity: 0, filter: 'blur(2px)' }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </a>
            ))}
        </div>
    );
});

AnimatedSocialLinks.displayName = 'AnimatedSocialLinks';

export default AnimatedSocialLinks;
