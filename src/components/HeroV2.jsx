import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Asterisk, Menu, Copy, Check } from 'lucide-react';
import ProjectCard from './ui/ProjectCard';
import FlexibleHero from './FlexibleHero';

gsap.registerPlugin(ScrollTrigger);

const HeroV2 = ({ onOpenProject }) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const marqueeRef = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopyDetails = () => {
    // COPY DETAILS: Update these with your real attributes
    // e.g., "rayasurya@gmail.com | +91 999 999 9999 | Salary: Negotiable"
    const details = "rayasurya@example.com | +91 98765 43210 | Salary: Open to Discussion";

    navigator.clipboard.writeText(details).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Card data
  // Real Osmo Project Data (from their site)
  const cards = [
    { id: 1, title: 'Draw Path on Scroll', img: 'https://cdn.prod.website-files.com/68a5787bba0829184628bd5d/6930371c4c7418f0dc4d8727_draw-path-on-scroll-1440x900-v2.avif' },
    { id: 2, title: 'Live Search (List.js)', img: 'https://cdn.prod.website-files.com/68a5787bba0829184628bd5d/692db962f158290c2d1736b4_live-search-list-js-1440x900.avif' },
    { id: 3, title: 'Overlapping Slider', img: 'https://cdn.prod.website-files.com/68a5787bba0829184628bd5d/69270c256aed6f8325fb7db3_overlapping-slider-1440x900.avif' },
    { id: 4, title: 'Willem Loading Animation', img: 'https://cdn.prod.website-files.com/68a5787bba0829184628bd5d/6915ef99caf73e88ff239bcf_willem-loading-animation-1440x900.avif' },
    { id: 5, title: 'Download Button', img: 'https://cdn.prod.website-files.com/68a5787bba0829184628bd5d/691de0be9af940f7273132aa_download-button-1440x900.avif' }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // NOTE: Text reveal animation removed as the FlexibleHero handles its own static presentation
      // If we want FlexibleHero to animate in, we would target its container here

      // 2. Marquee Loop
      const marqueeWidth = marqueeRef.current.scrollWidth / 2;
      gsap.to(marqueeRef.current, {
        x: -marqueeWidth,
        duration: 30,
        ease: "none",
        repeat: -1
      });

      // 3. Card Fan Entrance & Scroll Rotation
      // We start them all at center and fan them out
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        // Initial Spread
        // Calculated to align with the large curvature (approx 900px radius)
        const spreadFactor = 400; // Massive spacing between cards (Increased from 320)
        const offsetIndex = i - 2; // -2, -1, 0, 1, 2

        const rotation = offsetIndex * 18; // 18 degree intervals
        const xOffset = offsetIndex * spreadFactor;

        // Arc calculation: y = r - sqrt(r^2 - x^2) - but roughly approximated for visual tweak
        // With a wide spread, we need a steeper drop for the sides
        const yOffset = Math.abs(offsetIndex) * 110 + (Math.abs(offsetIndex) > 1 ? 80 : 0);

        // Entrance Animation
        gsap.fromTo(card,
          {
            y: 1200,
            rotation: 0,
            x: 0,
            opacity: 0
          },
          {
            y: yOffset,
            x: xOffset,
            rotation: rotation,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out",
            delay: 0.5 + (i * 0.1)
          }
        );

        // Scroll-based Rotation (Parallax Fan) & Fade Out
        gsap.to(card, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom 30%", // Fade out earlier
            scrub: 1
          },
          rotation: rotation * 2, // Rotate even more on scroll
          x: xOffset * 1.5,         // Spread further
          y: yOffset + 400, // Drop down
          opacity: 0, // FADE TO WHITE (Transparent)
          ease: "power1.in"
        });

        // Hover Effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.05, zIndex: 100, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, zIndex: 1, duration: 0.3 });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={containerRef} className="min-h-screen bg-[#F4F4F4] text-[#111] font-sans selection:bg-[#a3ff12] relative font-['Inter'] pb-20 overflow-x-hidden">

        {/* Top Nav - Centered Logo */}
        <nav className="relative flex justify-center items-center px-6 py-4 border-b border-gray-200 bg-white/50 backdrop-blur-md sticky top-0 z-50">

          {/* Menu - Left Absolute */}
          <div className="absolute left-6 flex items-center gap-2">
            <Menu className="w-5 h-5 cursor-pointer hover:text-gray-600" />
            <span className="font-medium text-sm hidden md:inline">Menu</span>
          </div>

          {/* Centered Logo */}
          <div className="font-bold text-3xl tracking-tighter uppercase">RAYA.</div>

          {/* Copy Button - Right Absolute */}
          <div className="absolute right-6 flex items-center gap-3 text-sm font-medium">
            <button
              onClick={handleCopyDetails}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-bold border ${copied ? 'bg-[#a3ff12] border-[#a3ff12] text-black' : 'bg-black text-white border-black hover:bg-gray-800'}`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span className="hidden md:inline">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="hidden md:inline">Copy Details</span>
                </>
              )}
            </button>
          </div>
        </nav>

        {/* Marquee Strip - Centered appearance but full width */}
        <div className="bg-[#a3ff12] overflow-hidden py-3 border-b border-black/5 whitespace-nowrap flex relative z-10 w-full">
          <div ref={marqueeRef} className="flex gap-8 text-sm font-bold tracking-widest uppercase text-black will-change-transform">
            {Array(20).fill("Explore The Osmo Showcase • ").map((text, i) => (
              <span key={i} className="opacity-80">{text}</span>
            ))}
          </div>
        </div>

        {/* Main Hero Content - FlexibleHero - Adjusted Size & Centered */}
        <div className="flex flex-col items-center pt-10 pb-40 px-4 text-center relative z-20 w-full mx-auto overflow-visible h-[600px]">

          {/* New FlexibleHero Component - Centered Wrapper */}
          {/* Visual center of FlexibleHero is at x=775. Container is set to 1550px width and centered. */}
          {/* Added top-[80px] to create the requested top spacing */}
          <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[1550px] h-[600px] origin-top scale-[0.5] sm:scale-[0.6] md:scale-100 flex justify-center pointer-events-none">
            <div className="w-full h-full pointer-events-auto">
              <FlexibleHero textSize={50} />
            </div>
          </div>

          {/* Increased mt to account for the top spacing of the hero above */}
          <div className="max-w-xl mx-auto space-y-2 mt-[330px] md:mt-[460px] relative z-10 transition-all duration-300 hover:translate-y-1">
            <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
              Platform packed with <span className="text-black bg-gray-200 px-1 rounded">Webflow</span> & <span className="text-black bg-gray-200 px-1 rounded">HTML</span> resources,
            </p>
            <p className="text-lg md:text-xl text-black font-semibold leading-relaxed bg-[#a3ff12]/20 px-4 py-1 rounded-full inline-block mt-2">
              Click any project to explore ↓
            </p>
          </div>

        </div>

        {/* Cards Fan - Absolute Positioned Bottom */}
        <div className="absolute -bottom-10 md:bottom-[-60px] left-1/2 -translate-x-1/2 w-full max-w-[1600px] h-[700px] flex justify-center items-end pointer-events-none z-30">

          {/* Visual Arc Line REMOVED as per request, but layout logic remains */}

          {cards.map((card, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="absolute bottom-[120px] w-[300px] md:w-[350px] aspect-[4/5] overflow-visible cursor-pointer pointer-events-auto origin-bottom"
              onClick={() => onOpenProject && onOpenProject()}
            >
              {/* Using New ProjectCard Component */}
              <ProjectCard title={card.title} img={card.img} />
            </div>
          ))}
        </div>

      </div>

      {/* NEW SECTION: Open Best Project (Pinned/Scroll Reveal) */}
      <div className="relative min-h-screen bg-[#F4F4F4] flex flex-col items-center justify-center py-40 overflow-hidden">

        {/* Background Ticks (Radial) - OPTIMIZED */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          {/* 
            Optimized: Replaced 60 individual divs with a single SVG circle using stroke-dasharray.
            Radius 400px (800px diameter). 
            Circumference ~2513px. 
            60 ticks means spacing of ~41.8px.
            Tick width roughly 4px.
            Dasharray: 4 37.8
          */}
          <div className="w-[800px] h-[800px] flex items-center justify-center relative animate-spin-slow will-change-transform">
            <svg width="800" height="800" viewBox="0 0 800 800" className="absolute inset-0">
              {/* 
                 cx, cy = 400
                 r = 392 (To account for stroke width of 16px/2 so it stays inside? or roughly 400)
                 strokeWidth = 16 (height of the tick)
                 strokeDasharray = "4 37.9" (approx for 60 ticks)
               */}
              <circle
                cx="400"
                cy="400"
                r="392"
                fill="none"
                stroke="black"
                strokeWidth="16"
                strokeDasharray="4 37.89"
              />
            </svg>
          </div>
          {/* Inner dashed circle */}
          <div className="absolute w-[600px] h-[600px] border border-dashed border-black rounded-full opacity-50" />
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
          {/* Left Text */}
          <h2 className="text-[100px] md:text-[180px] font-bold tracking-tighter text-[#E0E0E0] select-none leading-none">
            Open
          </h2>

          {/* Center Card */}
          <div className="relative w-[300px] md:w-[400px] aspect-video bg-black rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 group cursor-pointer z-20">
            <img
              src="https://cdn.prod.website-files.com/68a5787bba0829184628bd5d/6915ef99caf73e88ff239bcf_willem-loading-animation-1440x900.avif"
              alt="Best Project"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            />
            {/* Center Text Overlaid */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/40">
              <h3 className="text-white text-3xl font-bold uppercase tracking-tight">Your Bespoke</h3>
              <div className="text-[#ff4400] text-4xl font-black uppercase leading-none my-2">Game <span className="text-white font-light">Development</span></div>
              <p className="text-gray-400 text-sm mt-2 font-mono">Partner</p>
            </div>
          </div>

          {/* Right Text */}
          <h2 className="text-[100px] md:text-[180px] font-bold tracking-tighter text-[#E0E0E0] select-none leading-none text-right">
            My<br />Best
          </h2>
        </div>

        {/* Handwritten Note (Absolute) */}
        <div className="absolute top-2/3 right-1/4 transform -rotate-12 hidden md:block">
          <p className="font-handwriting text-red-500 text-2xl font-medium">See what it can do! ⤴</p>
          <svg width="50" height="50" viewBox="0 0 100 100" className="absolute -top-10 -left-10 text-red-500 fill-current w-12 h-12 transform rotate-90">
            <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M80,40 L90,50 L80,60" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>

      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 60s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .font-handwriting {
          font-family: 'cursive', sans-serif;
        }
      `}</style>
    </>
  );
};

export default HeroV2;
