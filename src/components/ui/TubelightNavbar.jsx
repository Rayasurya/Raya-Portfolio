import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, Lightbulb, User, FileText } from "lucide-react";

export function TubelightNavbar({ items, currentView, onNavigate, className = "" }) {
    const [activeTab, setActiveTab] = useState(currentView || 'home');
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setActiveTab(currentView);
    }, [currentView]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = (itemName, itemUrl) => {
        setActiveTab(itemName);
        if (onNavigate) {
            onNavigate(itemUrl);
        }
    };

    return (
        <div
            className={`fixed sm:bottom-auto bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:mt-6 ${className}`}
        >
            <div className="flex items-center gap-3 bg-white/80 dark:bg-black/80 border border-gray-200 dark:border-gray-800 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
                {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.name.toLowerCase() || activeTab === item.url;

                    return (
                        <button
                            key={item.name}
                            onClick={() => handleClick(item.name.toLowerCase(), item.url)}
                            className={`relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors ${isActive
                                    ? "bg-gray-100 dark:bg-gray-900 text-orange-500"
                                    : "text-gray-600 dark:text-gray-400 hover:text-orange-500"
                                }`}
                        >
                            <span className="hidden md:inline">{item.name}</span>
                            <span className="md:hidden">
                                <Icon size={18} strokeWidth={2.5} />
                            </span>
                            {isActive && (
                                <motion.div
                                    layoutId="lamp"
                                    className="absolute inset-0 w-full bg-orange-500/5 rounded-full -z-10"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                >
                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-orange-500 rounded-t-full">
                                        <div className="absolute w-12 h-6 bg-orange-500/20 rounded-full blur-md -top-2 -left-2" />
                                        <div className="absolute w-8 h-6 bg-orange-500/20 rounded-full blur-md -top-1" />
                                        <div className="absolute w-4 h-4 bg-orange-500/20 rounded-full blur-sm top-0 left-2" />
                                    </div>
                                </motion.div>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
