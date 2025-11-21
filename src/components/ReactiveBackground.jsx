import React, { useEffect, useRef } from 'react';

const ReactiveBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let points = [];
        const mouse = { x: -1000, y: -1000 }; // Start off-screen

        // Configuration
        const spacing = 40;
        const radius = 200; // Interaction radius
        const strength = 0.5; // Distortion strength
        const drag = 0.1; // Elasticity/drag

        const init = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            points = [];

            const cols = Math.ceil(canvas.width / spacing) + 1;
            const rows = Math.ceil(canvas.height / spacing) + 1;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    points.push({
                        x: i * spacing,
                        y: j * spacing,
                        originX: i * spacing,
                        originY: j * spacing,
                        vx: 0,
                        vy: 0,
                    });
                }
            }
        };

        const update = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw lines
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.03)';
            ctx.lineWidth = 1;

            // We need to draw connections. Since points are in a 1D array representing a grid:
            // It's easier to just draw dots for the "clean" look, or very subtle lines.
            // Let's stick to dots for a cleaner, more "Dribbble" look, maybe crosshairs.

            points.forEach(point => {
                // Physics
                const dx = mouse.x - point.x;
                const dy = mouse.y - point.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < radius) {
                    const angle = Math.atan2(dy, dx);
                    const force = (radius - distance) / radius;
                    const pushX = Math.cos(angle) * force * strength * spacing;
                    const pushY = Math.sin(angle) * force * strength * spacing;

                    point.vx -= pushX * 0.1;
                    point.vy -= pushY * 0.1;
                }

                // Spring back
                const dxOrigin = point.originX - point.x;
                const dyOrigin = point.originY - point.y;

                point.vx += dxOrigin * 0.05;
                point.vy += dyOrigin * 0.05;

                point.vx *= (1 - drag);
                point.vy *= (1 - drag);

                point.x += point.vx;
                point.y += point.vy;

                // Draw Point (Crosshair style)
                ctx.fillStyle = '#ccc';
                ctx.beginPath();
                ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(update);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleResize = () => {
            init();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        init();
        update();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none', // Let clicks pass through to content
            }}
        />
    );
};

export default ReactiveBackground;
