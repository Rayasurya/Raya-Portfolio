import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const followerRef = useRef(null);

    useEffect(() => {
        const follower = followerRef.current;

        let posX = 0, posY = 0;
        let mouseX = 0, mouseY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const loop = () => {
            // Smooth follow for the outer circle
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            follower.style.left = `${posX}px`;
            follower.style.top = `${posY}px`;

            requestAnimationFrame(loop);
        };

        document.addEventListener('mousemove', onMouseMove);
        loop();

        // Use event delegation for dynamic elements
        const handleMouseOver = (e) => {
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.project-card')) {
                follower.classList.add('hovered');
            }
        };

        const handleMouseOut = (e) => {
            if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.project-card')) {
                follower.classList.remove('hovered');
            }
        };

        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <>
            <div ref={followerRef} className="custom-cursor-follower" />
            <style>{`
        .custom-cursor-follower {
          position: fixed;
          top: 0;
          left: 0;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 9999;
          border-radius: 50%;
        }

        .custom-cursor-follower {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(0, 0, 0, 0.5);
          transition: width 0.2s, height 0.2s, background-color 0.2s, border-color 0.2s;
        }

        .custom-cursor-follower.hovered {
          width: 20px;
          height: 20px;
          border-color: #333;
          background-color: rgba(51, 51, 51, 0.1);
        }
        
        @media (max-width: 768px) {
            .custom-cursor-follower {
                display: none;
            }
        }
      `}</style>
        </>
    );
};

export default CustomCursor;
