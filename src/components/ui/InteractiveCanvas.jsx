import React, { useEffect, useRef } from "react"

export function InteractiveCanvas({
    gridWidth = 30, // Reduced default for smaller containers
    gridHeight = 30, // Reduced default for smaller containers
    dotColor = "#000000", // Black dots
    lineColor = "#999999", // Grey lines
    backgroundColor = "transparent",
    padding = 0,
    maxDistance = 80, // Adjusted for smaller scale
    dotSizeMultiplier = 20, // Adjusted for smaller scale
}) {
    const canvasRef = useRef(null)
    const mouseRef = useRef({ x: 0, y: 0 })
    const dotsRef = useRef([])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d", { alpha: true })
        if (!ctx) return

        const ratio = window.devicePixelRatio || 1

        const updateSize = () => {
            const parent = canvas.parentElement
            if (parent) {
                canvas.width = parent.clientWidth * ratio
                canvas.height = parent.clientHeight * ratio
                canvas.style.width = `${parent.clientWidth}px`
                canvas.style.height = `${parent.clientHeight}px`
                ctx.scale(ratio, ratio)
            }
        }

        updateSize()

        const resizeObserver = new ResizeObserver(updateSize)
        if (canvas.parentElement) {
            resizeObserver.observe(canvas.parentElement)
        }

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect()
            mouseRef.current.x = (e.clientX - rect.left) * ratio
            mouseRef.current.y = (e.clientY - rect.top) * ratio
        }

        // Listen to mouse move on the canvas or window? 
        // If it's in a card, maybe just the canvas/card.
        // But for the effect to work nicely, maybe the window is better if we want interaction from afar?
        // The original code used window.addEventListener("mousemove").
        // But since we are calculating relative to canvas, we need to adjust.
        // Let's stick to canvas/container mouse move for contained effect, or window if we want it to react even when outside.
        // For a grid item, reacting when hovering the item is probably best.
        canvas.addEventListener("mousemove", handleMouseMove)
        canvas.addEventListener("mouseleave", () => {
            mouseRef.current.x = -1000
            mouseRef.current.y = -1000
        })

        const createDots = () => {
            dotsRef.current = []
            const width = canvas.width / ratio
            const height = canvas.height / ratio

            for (let i = 0; i < gridWidth; i++) {
                const x = Math.floor(((width - padding * 2) / (gridWidth - 1)) * i + padding)

                for (let j = 0; j < gridHeight; j++) {
                    const y = Math.floor(((height - padding * 2) / (gridHeight - 1)) * j + padding)

                    dotsRef.current.push({
                        x: x * ratio,
                        y: y * ratio,
                        ox: x * ratio,
                        oy: y * ratio,
                    })
                }
            }
        }

        // Re-create dots when size changes would be ideal, but for now let's just create them once or on resize
        // We need to hook into updateSize for this.
        // Let's modify updateSize to also call createDots
        // But createDots needs the new size.

        // Actually, let's just call createDots in the animate loop or separate effect? 
        // No, expensive.
        // Let's just call it initially. If it resizes, the dots might look weird.
        // Ideally we re-create dots on resize.
        createDots()

        const getDistance = (obj1, obj2) => {
            const dx = obj1.x - obj2.x
            const dy = obj1.y - obj2.y
            return Math.sqrt(dx * dx + dy * dy)
        }

        const getAngle = (obj1, obj2) => {
            const dX = obj2.x - obj1.x
            const dY = obj2.y - obj1.y
            return (Math.atan2(dY, dX) / Math.PI) * 180
        }

        const getVector = (dot) => {
            const d = getDistance(dot, mouseRef.current)
            dot.size = (dotSizeMultiplier - d) / 20
            dot.size = dot.size < 1 ? 1 : dot.size
            dot.angle = getAngle(dot, mouseRef.current)

            const distance = d > maxDistance ? maxDistance : d
            return {
                x: distance * Math.cos((dot.angle * Math.PI) / 180),
                y: distance * Math.sin((dot.angle * Math.PI) / 180),
            }
        }

        const circleMethod = function (x, y, r) {
            this.beginPath()
            this.arc(x, y, r, 0, 2 * Math.PI, false)
            this.closePath()
        }
        ctx.circle = circleMethod

        let animationFrameId

        const animate = () => {
            // Transparent background handling
            if (backgroundColor && backgroundColor !== "transparent") {
                ctx.fillStyle = backgroundColor
                ctx.fillRect(0, 0, canvas.width, canvas.height)
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
            }

            ctx.fillStyle = dotColor

            // Draw lines
            for (let i = 0; i < dotsRef.current.length; i++) {
                const dot = dotsRef.current[i]
                const v = getVector(dot)

                ctx.beginPath()
                ctx.moveTo(dot.x / ratio, dot.y / ratio)
                ctx.lineTo((dot.x + v.x) / ratio, (dot.y + v.y) / ratio)
                ctx.strokeStyle = lineColor
                ctx.lineWidth = 1
                ctx.stroke()
                ctx.closePath()
            }

            // Draw dots
            for (let i = 0; i < dotsRef.current.length; i++) {
                const dot = dotsRef.current[i]
                const v = getVector(dot)
                ctx.circle((dot.x + v.x) / ratio, (dot.y + v.y) / ratio, (dot.size || 1) / 2)
                ctx.fill()
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            resizeObserver.disconnect()
            canvas.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [gridWidth, gridHeight, dotColor, lineColor, backgroundColor, padding, maxDistance, dotSizeMultiplier])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{
                display: "block",
                margin: 0,
                overflow: "hidden",
                background: "transparent",
            }}
        />
    )
}

export function InteractiveCanvasDemo() {
    return (
        <div className="relative w-full h-full bg-gray-50 overflow-hidden flex items-center justify-center">
            <InteractiveCanvas />
            <div className="pointer-events-none z-10 text-center">
                <h3 className="text-2xl font-bold text-gray-800">Interactive</h3>
                <p className="text-gray-500">Move your cursor</p>
            </div>
        </div>
    )
}
