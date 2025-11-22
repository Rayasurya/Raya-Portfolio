import React, { useState, useRef, useEffect } from 'react';
import { DockDemo } from './DockDemo';

const ComponentsGrid = () => {
  return (
    <section style={{ padding: '6rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
      <h2 style={{
        fontSize: '3.5rem',
        marginBottom: '4rem',
        color: '#111',
        textAlign: 'center',
        fontWeight: '800',
        letterSpacing: '-0.03em',
        lineHeight: '1.1'
      }}>Interactive Elements</h2>
      <div className="grid-container">

        {/* 1. Magnetic Button */}
        <div className="component-box span-1">
          <MagneticButton>Hover Me</MagneticButton>
        </div>

        {/* 2. Glitch Text */}
        <div className="component-box span-2">
          <GlitchText text="GLITCH" />
        </div>

        {/* 3. Interactive Slider */}
        <div className="component-box span-1">
          <InteractiveSlider />
        </div>

        {/* 4. Card Hover Reveal */}
        <div className="component-box span-1" style={{ padding: 0 }}>
          <CardReveal />
        </div>

        {/* 5. Animated Toggle */}
        <div className="component-box span-1">
          <AnimatedToggle />
        </div>

        {/* 6. Floating Input */}
        <div className="component-box span-2">
          <FloatingInput placeholder="Type here..." />
        </div>

        {/* 7. Loader (Polished) */}
        <div className="component-box span-1">
          <div className="loader"></div>
        </div>

        {/* 8. Ripple Button (Polished) */}
        <div className="component-box span-1">
          <button className="ripple-btn">Click Effect</button>
        </div>

        {/* 9. Dock Component */}
        <div className="component-box span-2">
          <DockDemo />
        </div>

      </div>
      <style>{`
        .grid-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          grid-auto-rows: 280px;
        }

        .span-1 { grid-column: span 1; }
        .span-2 { grid-column: span 2; }
        .span-3 { grid-column: span 3; }
        .span-4 { grid-column: span 4; }

        .component-box {
          background: #fff;
          border-radius: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .component-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.06);
        }

        @media (max-width: 1024px) {
          .grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
          .span-1, .span-2, .span-3, .span-4 { grid-column: span 1; }
          .span-2 { grid-column: span 2; } /* Keep span-2 on tablet if it fits */
        }

        @media (max-width: 640px) {
          .grid-container {
            grid-template-columns: 1fr;
          }
          .span-1, .span-2, .span-3, .span-4 { grid-column: span 1; }
        }

        /* --- Magnetic Button --- */
        .magnetic-btn {
          padding: 18px 36px;
          border: none;
          background: #111;
          color: #fff;
          border-radius: 100px;
          font-weight: 500;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.1s ease;
        }

        /* --- Glitch Text --- */
        .glitch {
          font-size: 3rem;
          font-weight: 900;
          position: relative;
          color: #000;
          letter-spacing: -0.05em;
        }
        .glitch::before, .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #fff;
        }
        .glitch::before {
          left: 2px;
          text-shadow: -1px 0 #ff0000;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }
        .glitch::after {
          left: -2px;
          text-shadow: -1px 0 #0000ff;
          clip: rect(85px, 550px, 140px, 0);
          animation: glitch-anim 2.5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { clip: rect(14px, 9999px, 127px, 0); }
          20% { clip: rect(57px, 9999px, 87px, 0); }
          40% { clip: rect(90px, 9999px, 5px, 0); }
          60% { clip: rect(23px, 9999px, 145px, 0); }
          80% { clip: rect(6px, 9999px, 63px, 0); }
          100% { clip: rect(108px, 9999px, 34px, 0); }
        }
        @keyframes glitch-anim-2 {
          0% { clip: rect(109px, 9999px, 38px, 0); }
          20% { clip: rect(5px, 9999px, 147px, 0); }
          40% { clip: rect(66px, 9999px, 24px, 0); }
          60% { clip: rect(135px, 9999px, 89px, 0); }
          80% { clip: rect(2px, 9999px, 122px, 0); }
          100% { clip: rect(44px, 9999px, 58px, 0); }
        }

        /* --- Interactive Slider --- */
        .slider-container {
          width: 80%;
          position: relative;
        }
        .custom-range {
          -webkit-appearance: none;
          width: 100%;
          height: 6px;
          background: #f0f0f0;
          outline: none;
          border-radius: 10px;
        }
        .custom-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 28px;
          height: 28px;
          background: #000;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          border: 4px solid #fff;
        }
        .custom-range::-webkit-slider-thumb:hover {
          transform: scale(1.2);
        }

        /* --- Card Reveal --- */
        .reveal-card {
          width: 100%;
          height: 100%;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fafafa;
        }
        .reveal-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #111;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-card:hover .reveal-content {
          opacity: 1;
        }

        /* --- Animated Toggle --- */
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 64px;
          height: 36px;
        }
        .toggle-input { opacity: 0; width: 0; height: 0; }
        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: #e0e0e0;
          border-radius: 36px;
          transition: .4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 28px;
          width: 28px;
          left: 4px;
          bottom: 4px;
          background-color: #fff;
          border-radius: 50%;
          transition: .4s cubic-bezier(0.22, 1, 0.36, 1);
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .toggle-input:checked + .toggle-slider {
          background-color: #111;
        }
        .toggle-input:checked + .toggle-slider:before {
          transform: translateX(28px);
        }

        /* --- Floating Input --- */
        .input-group {
          position: relative;
          width: 85%;
        }
        .floating-input {
          width: 100%;
          padding: 16px 0;
          border: none;
          border-bottom: 2px solid #eee;
          outline: none;
          background: transparent;
          font-size: 1.1rem;
          transition: border-color 0.3s;
          font-family: inherit;
        }
        .floating-input:focus {
          border-bottom-color: #000;
        }
        .floating-label {
          position: absolute;
          top: 16px;
          left: 0;
          pointer-events: none;
          transition: 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          color: #999;
          font-size: 1.1rem;
        }
        .floating-input:focus ~ .floating-label,
        .floating-input:not(:placeholder-shown) ~ .floating-label {
          top: -12px;
          font-size: 0.8rem;
          color: #000;
          font-weight: 600;
        }

        /* --- Loader --- */
        .loader {
          border: 3px solid rgba(0,0,0,0.1);
          border-top: 3px solid #000;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* --- Ripple Button --- */
        .ripple-btn {
          background: #fff;
          color: #000;
          border: 1px solid #e0e0e0;
          padding: 16px 32px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ripple-btn:hover {
          background: #f8f8f8;
          border-color: #ccc;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        .ripple-btn:active {
          transform: scale(0.98);
        }
      `}</style>
    </section>
  );
};

// --- Sub-components ---

const MagneticButton = ({ children }) => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    btn.style.transform = 'translate(0, 0)';
  };

  return (
    <button
      ref={btnRef}
      className="magnetic-btn"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

const GlitchText = ({ text }) => {
  return (
    <div className="glitch" data-text={text}>
      {text}
    </div>
  );
};

const InteractiveSlider = () => {
  const [value, setValue] = useState(50);
  return (
    <div className="slider-container">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="custom-range"
      />
      <div style={{ textAlign: 'center', marginTop: '15px', fontWeight: '600', fontSize: '0.9rem', color: '#666' }}>
        {value}%
      </div>
    </div>
  );
};

const CardReveal = () => {
  return (
    <div className="reveal-card">
      <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>Hover Me</div>
      <div className="reveal-content">
        <span style={{ fontWeight: 'bold', letterSpacing: '1px' }}>REVEALED</span>
      </div>
    </div>
  );
};

const AnimatedToggle = () => {
  return (
    <label className="toggle-switch">
      <input type="checkbox" className="toggle-input" />
      <span className="toggle-slider"></span>
    </label>
  );
};

const FloatingInput = ({ placeholder }) => {
  return (
    <div className="input-group">
      <input type="text" className="floating-input" placeholder=" " />
      <label className="floating-label">{placeholder}</label>
    </div>
  );
};

export default ComponentsGrid;
