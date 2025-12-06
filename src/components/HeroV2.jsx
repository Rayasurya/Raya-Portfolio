import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Asterisk, Menu, Copy, Check, ArrowUpRight } from 'lucide-react';
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
  // Card data
  // Updated with UX/UI specific examples and tags
  const cards = [
    {
      id: 1,
      title: 'Immersive VR Gallery',
      img: 'https://cdn.prod.website-files.com/68a5787bba0829184628bd5d/6930371c4c7418f0dc4d8727_draw-path-on-scroll-1440x900-v2.avif',
      tags: ['VR Project', 'UX Research']
    },
    {
      id: 2,
      title: 'Fintech Dashboard',
      img: 'https://cdn.prod.website-files.com/68a5787bba0829184628bd5d/692db962f158290c2d1736b4_live-search-list-js-1440x900.avif',
      tags: ['UI Design', 'Heuristic']
    },
    {
      id: 3,
      title: 'Eco-Friendly Brand',
      img: 'https://cdn.prod.website-files.com/68a5787bba0829184628bd5d/69270c256aed6f8325fb7db3_overlapping-slider-1440x900.avif',
      tags: ['Graphic Design', 'Identity']
    },
    {
      id: 4,
      title: 'Health App Audit',
      img: 'https://cdn.prod.website-files.com/68a5787bba0829184628bd5d/6930371c4c7418f0dc4d8727_draw-path-on-scroll-1440x900-v2.avif',
      tags: ['UX Audit', 'Research']
    },
    {
      id: 5,
      title: 'Smart Home IoT',
      img: 'https://cdn.prod.website-files.com/68a5787bba0829184628bd5d/692db962f158290c2d1736b4_live-search-list-js-1440x900.avif',
      tags: ['Interaction', 'IoT System']
    },
  ];
  // State for responsive wheel configuration
  const [config, setConfig] = useState({ radius: 1200, cardsToShow: 12, cardWidth: 300, yOffset: 0 });

  // Calculate settings based on screen width - Responsive "Osmo-style" logic
  const calculateWheelConfig = () => {
    const width = window.innerWidth;

    // Wide Desktop (>1600px) - The "Horizon" Look
    if (width > 1600) {
      return {
        radius: 2200,     // Slightly reduced for tighter arc with smaller cards
        cardsToShow: 32,  // Increased count (+2)
        cardWidth: 300,   // Reduced from 400px -> 300px
        yOffset: 250      // Raised significantly (30% higher)
      };
    }
    // Laptop / Standard (1200px - 1600px)
    else if (width > 1200) {
      return {
        radius: 1600,     // Reduced radius
        cardsToShow: 26,  // Increased count (+2)
        cardWidth: 250,   // Reduced from 320px -> 250px
        yOffset: 150      // Raised significantly
      };
    }
    // Tablet / Small Laptop (<1200px)
    else {
      return {
        radius: 1100,
        cardsToShow: 20,  // Increased count (+2)
        cardWidth: 200,   // Reduced from 260px -> 200px
        yOffset: 50       // Raised
      };
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setConfig(calculateWheelConfig());
    };

    handleResize(); // Initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Card Configuration
  const { radius, cardsToShow, cardWidth, yOffset } = config;

  // Generate cards pool
  // Duplicate enough to ensure we can fill 'cardsToShow' with unique IDs
  const largePool = [...cards, ...cards, ...cards, ...cards, ...cards, ...cards];
  const displayCards = largePool.slice(0, cardsToShow).map((c, i) => ({ ...c, uniqueId: i }));

  useEffect(() => {
    // Check if refs are populated
    // GSAP context will handle cleanup
    let ctx = gsap.context(() => {
      // 2. Marquee Loop - REMOVED
      // if (marqueeRef.current) { ... }

      // 3. Infinite Card Fan (Ferris Wheel Effect)
      // Filter out nulls
      const allCards = cardsRef.current.filter(c => c !== null);
      const totalCards = allCards.length;

      const angleStep = 360 / totalCards;

      const wheelTl = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });

      // 1. Initial Position
      allCards.forEach((card, i) => {
        const angleDeg = i * angleStep;

        gsap.set(card, {
          transformOrigin: `50% ${radius}px`,
          rotation: angleDeg,
          x: 0,
          y: 0,
          bottom: "0px",
        });
      });

      // 2. Continuous Rotation
      wheelTl.to(allCards, {
        rotation: "+=360",
        duration: 120, // Slow, majestic rotation
        ease: "none"
      });

      // 3. Hover to Pause (Smooth Easing)
      allCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(wheelTl, { timeScale: 0, duration: 0.8, overwrite: true }); // Smooth stop
          gsap.to(card, { scale: 1.05, zIndex: 100, duration: 0.3 });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(wheelTl, { timeScale: 1, duration: 0.8, overwrite: true }); // Smooth resume
          gsap.to(card, { scale: 1, zIndex: 1, duration: 0.3 });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, [config, displayCards.length]); // Re-run if config changes

  return (
    <>
      <div ref={containerRef} className="min-h-screen bg-[#F4F4F4] text-[#111] font-sans selection:bg-[#a3ff12] relative font-['Inter'] pb-20 overflow-x-hidden">



        {/* Marquee Strip - REMOVED */}

        {/* --- HERO SECTION (Cards & Text) --- */}
        {/* --- HERO SECTION (Cards & Text) --- */}
        <div className="flex flex-col items-center pt-10 px-4 text-center relative z-20 w-full mx-auto overflow-hidden h-[850px] md:h-[1350px]">

          {/* FlexibleHero Component - Centered */}
          <div className="absolute top-[60px] md:top-[80px] left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[600px] flex justify-center pointer-events-none">
            {/* Reduced scale by 30% for standard laptops (md), restored on very large screens (2xl) */}
            <div className="origin-top scale-[0.6] md:scale-[0.7] 2xl:scale-100 w-full h-full pointer-events-auto flex justify-center">
              <FlexibleHero textSize={50} />
            </div>
          </div>

          {/* CTA Text */}
          <div className="max-w-xl mx-auto space-y-2 mt-[360px] md:mt-[460px] relative z-10 transition-all duration-300">
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Curated collection of <span className="text-black bg-gray-200 px-1 rounded">User Research</span> & <span className="text-black bg-gray-200 px-1 rounded">Interaction Design</span>
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
              {/* Primary Button: Open Best Project (Udhaar V2) */}
              <button
                onClick={() => onOpenProject && onOpenProject()}
                className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl text-lg group"
              >
                Open My Best Project <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              {/* Secondary Button: Contact Me (Copy Details) */}
              <button
                onClick={handleCopyDetails}
                className={`bg-white text-black border border-gray-200 w-48 py-3 rounded-full font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg text-lg animate-pulse ${copied ? 'bg-green-500 border-green-500 text-black animate-none' : ''}`}
              >
                {copied ? (
                  <>
                    <span>Copied!</span>
                    <Check size={20} />
                  </>
                ) : (
                  <>
                    <span>Copy Details</span>
                    <Copy size={20} />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Cards Fan - Infinite Wheel */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-full h-[900px] flex justify-center items-end pointer-events-none z-30 overflow-visible"
            style={{ bottom: `${yOffset}px` }}
          >
            {displayCards.map((card, i) => (
              <div
                key={card.uniqueId}
                ref={el => { if (el) cardsRef.current[i] = el; }}
                className="absolute aspect-[4/5] overflow-visible cursor-pointer pointer-events-auto will-change-transform shadow-2xl rounded-xl"
                style={{
                  width: `${cardWidth}px`,
                  bottom: 0
                }}
                onClick={() => onOpenProject && onOpenProject()}
              >
                <ProjectCard title={card.title} img={card.img} tags={card.tags} />
              </div>
            ))}
          </div>

          {/* Gradient Transition Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F4F4F4] via-[#F4F4F4]/90 to-transparent z-40 pointer-events-none" />

        </div>

        {/* --- OPEN BEST PROJECT SECTION --- */}
        <div className="relative min-h-screen bg-[#F4F4F4] flex flex-col items-center justify-center py-40 overflow-hidden">

          {/* Background Ticks (Radial) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <div className="w-[800px] h-[800px] flex items-center justify-center relative animate-spin-slow will-change-transform">
              <svg width="800" height="800" viewBox="0 0 800 800" className="absolute inset-0">
                <circle
                  cx="400" cy="400" r="392"
                  fill="none" stroke="black" strokeWidth="16"
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

          {/* Handwritten Note */}
          <div className="absolute top-2/3 right-1/4 transform -rotate-12 hidden md:block">
            <p className="font-handwriting text-red-500 text-2xl font-medium">See what it can do! ⤴</p>
            <svg width="50" height="50" viewBox="0 0 100 100" className="absolute -top-10 -left-10 text-red-500 fill-current w-12 h-12 transform rotate-90">
              <path d="M10,50 Q30,20 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M80,40 L90,50 L80,60" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
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
