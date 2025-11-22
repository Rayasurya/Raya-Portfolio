import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedSocialLinks = React.forwardRef(
    ({ socials, className, ...props }, ref) => {
        const [hoveredSocial, setHoveredSocial] = useState(null);
        const [rotation, setRotation] = useState(0);
        const [clicked, setClicked] = useState(false);

        const animation = {
            scale: clicked ? [1, 1.3, 1] : 1,
            transition: { duration: 0.3 },
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

        return (
            <div
                ref={ref}
                className={className || ''}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    ...props.style
                }}
                {...props}
            >
                {socials.map((social, index) => (
                    <div
                        className={`relative cursor-pointer px-2 py-2 transition-opacity duration-200 ${hoveredSocial && hoveredSocial !== social.name
                            ? 'opacity-50'
                            : 'opacity-100'
                            }`}
                        key={index}
                        onMouseEnter={() => {
                            setHoveredSocial(social.name);
                            setRotation(Math.random() * 20 - 10);
                        }}
                        onMouseLeave={() => setHoveredSocial(null)}
                        onClick={() => {
                            setClicked(true);
                        }}
                        style={{ position: 'relative' }}
                    >
                        <span className="block text-sm text-black font-medium whitespace-nowrap">{social.name}</span>
                        <AnimatePresence>
                            {hoveredSocial === social.name && (
                                <motion.div
                                    className="absolute left-0 right-0 flex items-center justify-center"
                                    style={{
                                        position: 'absolute',
                                        bottom: '100%', // Start from top of the text
                                        left: 0,
                                        right: 0,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '100%',
                                        marginBottom: '0.5rem' // Add some space
                                    }}
                                    animate={animation}
                                >
                                    <motion.img
                                        key={social.name}
                                        src={social.image}
                                        alt={social.name}
                                        className="object-contain"
                                        style={{
                                            width: '44px',
                                            height: '44px',
                                            transform: social.scale ? `scale(${social.scale})` : 'none'
                                        }}
                                        initial={{
                                            y: 10,
                                            rotate: rotation,
                                            opacity: 0,
                                            filter: 'blur(2px)',
                                        }}
                                        animate={{ y: -10, opacity: 1, filter: 'blur(0px)' }}
                                        exit={{ y: 10, opacity: 0, filter: 'blur(2px)' }}
                                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        );
    }
);

AnimatedSocialLinks.displayName = 'AnimatedSocialLinks';

export default AnimatedSocialLinks;
