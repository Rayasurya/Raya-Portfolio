"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import { Plus } from "lucide-react";
import { cn } from "../../lib/utils";

const FloatingActionMenu = ({
    options,
    className,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={cn("fixed bottom-8 right-8 z-50", className)}>
            <Button
                onClick={toggleMenu}
                className="w-14 h-14 rounded-full bg-black text-white hover:bg-gray-900 shadow-[0_0_20px_rgba(0,0,0,0.2)] flex items-center justify-center p-0"
            >
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                >
                    <Plus className="w-6 h-6" />
                </motion.div>
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 10, y: 10, filter: "blur(10px)" }}
                        animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, x: 10, y: 10, filter: "blur(10px)" }}
                        transition={{
                            duration: 0.6,
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                            delay: 0.1,
                        }}
                        className="absolute bottom-20 right-0 mb-2"
                    >
                        <div className="flex flex-col items-end gap-2">
                            {options.map((option, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.05,
                                    }}
                                >
                                    <Button
                                        onClick={() => {
                                            option.onClick();
                                            setIsOpen(false);
                                        }}
                                        size="sm"
                                        className="flex items-center gap-3 bg-white text-gray-900 hover:bg-gray-50 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 rounded-full px-5 py-3 h-auto min-w-[140px] justify-start transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)]"
                                    >
                                        <span className="text-gray-600 group-hover:text-black transition-colors">{option.Icon}</span>
                                        <span className="font-medium text-sm tracking-wide">{option.label}</span>
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingActionMenu;
