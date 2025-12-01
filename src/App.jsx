import React, { useState, useEffect } from 'react';
import { Home, Briefcase, User, FileText, Lightbulb, Wrench } from 'lucide-react';
import Hero from './components/Hero';
import DesignWall from './components/DesignWall';
import ReactiveBackground from './components/ReactiveBackground';
import ProjectUdhaar from './components/ProjectUdhaar';

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

  // Navigate and update browser history
  const navigateTo = (view) => {
    setCurrentView(view);
    window.history.pushState({ view }, '', `#${view}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      case 'components':
        return <ComponentsGrid />;
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'tools':
        return <Tools />;
      case 'project-udhaar':
        return <ProjectUdhaar onBack={() => navigateTo('home')} />;
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
              {['home', 'components', 'tools', 'about', 'resume'].map((view) => (
                <button
                  key={view}
                  onClick={() => navigateTo(view)}
                  style={{
                    background: 'transparent',
                    color: currentView === view ? '#000' : '#666',
                    border: 'none',
                    padding: '0.5rem 0',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                    fontWeight: currentView === view ? '600' : '400',
                    fontSize: '1rem',
                    position: 'relative',
                  }}
                >
                  {view}
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
                { name: 'Components', url: 'components', icon: Lightbulb },
                { name: 'Tools', url: 'tools', icon: Wrench },
                { name: 'About', url: 'about', icon: User },
                { name: 'Resume', url: 'resume', icon: FileText }
              ]}
              activeTab={currentView}
              onTabChange={navigateTo}
            />
          </div>
        </>
      )}

      <main style={{
        paddingTop: currentView === 'project-udhaar' ? '0' : '80px',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1,
        paddingBottom: currentView !== 'project-udhaar' ? '0' : '0',
      }}>
        {renderView()}
      </main>

      {/* Animated Social Links - Desktop Only */}
      {currentView !== 'project-udhaar' && (
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
