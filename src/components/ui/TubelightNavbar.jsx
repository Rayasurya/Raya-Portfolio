import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export function TubelightNavbar({ items, activeTab, onTabChange, className }) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div
            className={cn(
                "fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-6 md:hidden",
                className,
            )}
        >
            <div className="flex items-center gap-2 bg-white/90 border border-gray-200 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
                {items.map((item) => {
                    const isActive = activeTab === item.name

                    return (
                        <div
                            key={item.name}
                            onClick={() => onTabChange(item.url)}
                            className={cn(
                                "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                                "text-gray-600 hover:text-black",
                                isActive && "bg-gray-100 text-black",
                            )}
                        >
                            <span className="text-sm">{item.name}</span>
                            {isActive && (
                                <motion.div
                                    layoutId="lamp"
                                    className="absolute inset-0 w-full bg-transparent rounded-full -z-10"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                >
                                </motion.div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
