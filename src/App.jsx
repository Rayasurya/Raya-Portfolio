import React, { useState, useEffect, useRef } from 'react';
import { Home, Briefcase, User, FileText, Layers, Settings, Palette } from 'lucide-react';
import Hero from './components/Hero';
import HeroV2 from './components/HeroV2';
import DesignWall from './components/DesignWall';
import ReactiveBackground from './components/ReactiveBackground';
import ProjectUdhaar from './components/ProjectUdhaar';
import ProjectUdhaarV2 from './components/ProjectUdhaarV2';
import DesignSpace from './components/DesignSpace';
import Lenis from 'lenis'; // Import Lenis

import CustomCursor from './components/CustomCursor';
import ComponentsGrid from './components/ComponentsGrid';
import About from './components/About';


import Resume from './components/Resume';
import Tools from './components/Tools';
import AnimatedSocialLinks from './components/ui/social-links';
import { TubelightNavbar } from './components/ui/TubelightNavbar';
import { StaggerTestimonials } from './components/ui/stagger-testimonials';


function App() {
  // Initialize view from URL hash or default to 'home'
  const getInitialView = () => {
    const hash = window.location.hash.slice(1); // Remove '#'
    return hash || 'home2';
  };

  const [currentView, setCurrentView] = useState(getInitialView());
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionDivRef = useRef(null); // Ref for transition div
  const lenisRef = useRef(null);

  // Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Display name mapping for navigation
  const getDisplayName = (view) => {
    const displayNames = {
      'designs': 'Design Space',
      'components': 'Components',
      'tools': 'Tools',
      'about': 'About',
      'resume': 'Resume',
      'home': 'Old Home',
      'home2': 'Home'
    };
    return displayNames[view] || view;
  };

  // Navigate and update browser history with smooth transition
  const navigateTo = (view) => {
    if (isTransitioning) return; // Prevent double click

    // Determine direction: If going back to 'home' or 'home2' from a project -> Reverse
    const isProjectView = currentView.includes('project-');
    const isTargetHome = view.includes('home');
    const isReverse = isProjectView && isTargetHome;

    setIsTransitioning(true);
    const transitionDiv = transitionDivRef.current;

    if (transitionDiv) {
      // 1. SET START POSITION (Instant, no transition)
      transitionDiv.style.transition = 'none';
      // Normal: Start at Bottom (100%) -> Slide Up
      // Reverse: Start at Top (-100%) -> Slide Down
      const startPos = isReverse ? 'translateY(-100%)' : 'translateY(100%)';
      const centerPos = 'translateY(0%)';
      const endPos = isReverse ? 'translateY(100%)' : 'translateY(-100%)';

      transitionDiv.style.transform = startPos;

      // Force Reflow
      transitionDiv.offsetHeight;

      // 2. ANIMATE IN (To Center)
      transitionDiv.style.transition = 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)';
      transitionDiv.style.transform = centerPos;

      // Wait for cover
      setTimeout(() => {
        // 3. CHANGE VIEW
        setCurrentView(view);
        window.location.hash = view;
        window.scrollTo(0, 0);

        // 4. ANIMATE OUT (To End)
        transitionDiv.style.transform = endPos;

        // 5. CLEANUP
        setTimeout(() => {
          transitionDiv.style.transition = 'none';
          // Move to bottom (hidden) by default for next time
          transitionDiv.style.transform = 'translateY(100%)';
          setIsTransitioning(false);
        }, 800);

      }, 800);
    } else {
      // Fallback if transition div missing
      setCurrentView(view);
      window.location.hash = view;
      window.scrollTo(0, 0);
      setIsTransitioning(false);
    }
  };

  // Listen to browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      const view = window.location.hash.slice(1) || 'home2'; // Default to home2
      setCurrentView(view);
    };

    window.addEventListener('popstate', handlePopState);

    // Set initial hash if not present
    if (!window.location.hash) {
      window.location.hash = currentView;
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentView]);

  // --- VIEW RENDERING ---
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Hero onOpenProject={(id) => {
          // Special handling for Project Udhaar card click
          if (id === 51) navigateTo('project-udhaar');
        }} />;
      case 'home2':
        return <HeroV2 onOpenProject={() => navigateTo('project-udhaar-v2')} />;
      case 'designs':
        return <DesignWall />; // Simply render DesignWall
      case 'components': // Keep route for logic, though hidden
        return <ComponentsGrid />;
      case 'project-udhaar':
        return <ProjectUdhaar onBack={() => navigateTo('home')} />;
      case 'project-udhaar-v2':
        return <ProjectUdhaarV2 onBack={() => navigateTo('home2')} />;
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'tools':
        return <Tools />;
      default:
        // Changed default to home2 as requested
        return <HeroV2 onOpenProject={() => navigateTo('project-udhaar-v2')} />;
    }
  };


  return (
    <>
      <CustomCursor />

      {/* 
        Container for the entire app. 
        Only apply Layout padding if NOT in Project Views or specific fullscreen views.
      */}
      <div
        className="min-h-screen bg-[#F4F4F4] transition-colors duration-500"
        style={{
          color: '#111',
          paddingTop: currentView === 'project-udhaar' || currentView === 'project-udhaar-v2' ? '0' : '80px',
          paddingBottom: '80px', // Space for bottom nav
        }}
      >

        {/* Render the Active View */}
        <main
          style={{
            minHeight: 'calc(100vh - 160px)',
            paddingBottom: currentView !== 'project-udhaar' && currentView !== 'project-udhaar-v2' ? '0' : '0',
          }}
        >
          {renderView()}
        </main>


        {/* Navigation Bar (Floating/Tubelight) */}
        {/* HIDE NAV on Project Pages */}
        {currentView !== 'project-udhaar' && currentView !== 'project-udhaar-v2' && (
          <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            {/* Desktop Menu Items - Hidden on Mobile */}
            <div className="hidden md:flex gap-8">
              {['home2', 'designs', 'tools', 'about', 'resume'].map((view) => (
                <button
                  key={view}
                  onClick={() => navigateTo(view)}
                  className={`text-sm font-medium transition-colors relative ${currentView === view ? 'text-black font-bold' : 'text-gray-500 hover:text-black'
                    }`}
                >
                  {getDisplayName(view)}
                </button>
              ))}
            </div>

            {/* Mobile Bottom Dialog/Navbar (Using TubelightNavbar) */}



            {/* Tubelight Navigation - Mobile Only */}
            <div className="md:hidden">
              <TubelightNavbar
                items={[
                  { name: 'Home', url: 'home2', icon: Home },
                  { name: 'Designs', url: 'designs', icon: Palette },
                  { name: 'About', url: 'about', icon: User },
                  { name: 'Resume', url: 'resume', icon: FileText }
                ]}
                activeTab={currentView === 'home2' ? 'Home' : currentView === 'designs' ? 'Designs' : currentView === 'about' ? 'About' : currentView === 'resume' ? 'Resume' : currentView}
                onTabChange={navigateTo}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default App;
