import React, { useState, useEffect } from 'react';
import { Home, Briefcase, User, FileText, Layers, Settings, Palette } from 'lucide-react';
import Hero from './components/Hero';
import DesignWall from './components/DesignWall';
import ReactiveBackground from './components/ReactiveBackground';
import ProjectUdhaar from './components/ProjectUdhaar';
import ProjectUdhaarV2 from './components/ProjectUdhaarV2';
import DesignSpace from './components/DesignSpace';

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
    return hash || 'home';
  };

  const [currentView, setCurrentView] = useState(getInitialView());
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Display name mapping for navigation
  const getDisplayName = (view) => {
    const displayNames = {
      'designs': 'Design Space',
      'components': 'Components',
      'tools': 'Tools',
      'about': 'About',
      'resume': 'Resume',
      'home': 'Home',
      'home2': 'Home 2'
    };
    return displayNames[view] || view;
  };

  // Navigate and update browser history with smooth transition
  const navigateTo = (view) => {
    // Trigger fade out
    setIsTransitioning(true);

    // After fade out, change view and fade in
    setTimeout(() => {
      setCurrentView(view);
      window.history.pushState({ view }, '', `#${view}`);
      window.scrollTo({ top: 0, behavior: 'auto' });

      // Fade back in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 10);
    }, 150);
  };

  // Listen to browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      const view = event.state?.view || getInitialView();
      setCurrentView(view);
    };

    window.addEventListener('popstate', handlePopState);

    // Set initial state
    window.history.replaceState({ view: currentView }, '', `#${currentView}`);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero onOpenProject={() => navigateTo('project-udhaar')} />
            <DesignWall onViewProject={(id) => {
              if (id === 51) navigateTo('project-udhaar');
            }} />
            <StaggerTestimonials />
          </>
        );
      case 'home2':
        return (
          <>
            <Hero onOpenProject={() => navigateTo('project-udhaar-v2')} />
            <DesignWall onViewProject={(id) => {
              if (id === 51) navigateTo('project-udhaar-v2');
            }} />
            <StaggerTestimonials />
          </>
        );
      case 'components':
        return <ComponentsGrid />;
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'tools':
        return <Tools />;
      case 'designs':
        return <DesignSpace />;
      case 'project-udhaar':
        return <ProjectUdhaar onBack={() => navigateTo('home')} />;
      case 'project-udhaar-v2':
        return <ProjectUdhaarV2 onBack={() => navigateTo('home2')} />;
      default:
        return <DesignWall onViewProject={(id) => {
          if (id === 51) navigateTo('project-udhaar');
        }} />;
    }
  };

  return (
    <div className="app-container">
      <CustomCursor />
      <ReactiveBackground />

      {currentView !== 'project-udhaar' && (
        <>
          {/* Top Navigation - Hidden links on mobile */}
          <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '1.5rem 2rem',
            zIndex: 100,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
          }}>
            <div
              onClick={() => navigateTo('home')}
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                letterSpacing: '-0.5px',
                cursor: 'pointer'
              }}
            >
              Raya.
            </div>

            {/* Desktop Menu Items - Hidden on Mobile */}
            <div className="hidden md:flex gap-8">
              {['home', 'home2', 'components', 'designs', 'tools', 'about', 'resume'].map((view) => (
                <button
                  key={view}
                  onClick={() => navigateTo(view)}
                  style={{
                    background: 'transparent',
                    color: currentView === view ? '#000' : '#666',
                    border: 'none',
                    padding: '0.5rem 0',
                    cursor: 'pointer',
                    fontWeight: currentView === view ? '600' : '400',
                    fontSize: '1rem',
                    position: 'relative',
                  }}
                >
                  {getDisplayName(view)}
                  {currentView === view && (
                    <span style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: '#000',
                    }} />
                  )}
                </button>
              ))}
            </div>
          </nav>



          {/* Tubelight Navigation - Mobile Only */}
          <div className="md:hidden">
            <TubelightNavbar
              items={[
                { name: 'Home', url: 'home', icon: Home },
                { name: 'Home 2', url: 'home2', icon: Home },
                { name: 'Designs', url: 'designs', icon: Palette },
                { name: 'Projects', url: 'components', icon: Layers },
                { name: 'About', url: 'about', icon: User },
                { name: 'Resume', url: 'resume', icon: FileText }
              ]}
              activeTab={currentView === 'home' ? 'Home' : currentView === 'home2' ? 'Home 2' : currentView === 'designs' ? 'Designs' : currentView === 'components' ? 'Projects' : currentView === 'about' ? 'About' : currentView === 'resume' ? 'Resume' : currentView}
              onTabChange={navigateTo}
            />
          </div>
        </>
      )}

      <main style={{
        paddingTop: currentView === 'project-udhaar' || currentView === 'project-udhaar-v2' ? '0' : '80px',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1,
        paddingBottom: currentView !== 'project-udhaar' && currentView !== 'project-udhaar-v2' ? '0' : '0',
        opacity: isTransitioning ? 0 : 1,
        transition: 'opacity 150ms ease-in-out'
      }}>
        {renderView()}
      </main>

      {/* Animated Social Links - Desktop Only */}
      {currentView !== 'project-udhaar' && currentView !== 'project-udhaar-v2' && (
        <div className="hidden md:flex fixed bottom-8 right-8 z-50 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-200">
          <AnimatedSocialLinks
            socials={[
              {
                name: 'Instagram',
                url: 'https://www.instagram.com/corporate__tarzan?igsh=MWQ4YjBkd3JwZmxwag==',
                image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
              },
              {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/raya-surya/',
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
              },
              {
                name: 'Email',
                url: 'mailto:raya.work.ux@gmail.com',
                image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png',
              },
              {
                name: 'WhatsApp',
                url: 'https://wa.me/916382127165',
                image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
              },
              {
                name: 'Medium',
                url: 'https://medium.com/@rayasurya292001',
                image: '/src/assets/Medium Icon.svg',
              },
            ]}
          />
        </div>
      )}
    </div>
  );
}

export default App;
