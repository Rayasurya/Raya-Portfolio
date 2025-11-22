import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

export function GradualSpacing({
    text,
    duration = 0.5,
    delayMultiple = 0.04,
    framerProps = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    },
    className,
}) {
    return (
        <div className="flex justify-center">
            <AnimatePresence>
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={framerProps}
                        transition={{ duration, delay: i * delayMultiple }}
                        className={cn("drop-shadow-sm inline-block", className)}
                        style={{ marginRight: char === " " ? "0.5rem" : "0.1rem" }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </AnimatePresence>
        </div>
    );
}
