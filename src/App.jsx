import React, { useState, useEffect } from 'react';
import { Home, Briefcase, User, FileText } from 'lucide-react';
import Hero from './components/Hero';
import DesignWall from './components/DesignWall';
import ReactiveBackground from './components/ReactiveBackground';
import ProjectUdhaar from './components/ProjectUdhaar';

import CustomCursor from './components/CustomCursor';
import ComponentsGrid from './components/ComponentsGrid';
import About from './components/About';
import Resume from './components/Resume';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import AudioFab from './components/AudioFab';

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
          </>
        );
      case 'components':
        return <ComponentsGrid />;
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
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
              {['home', 'components', 'about', 'resume'].map((view) => (
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

          {/* Audio FAB */}
          <AudioFab />

          {/* Bottom Navigation - Mobile Only */}
          <BottomNav currentView={currentView} onNavigate={navigateTo} />
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

      {/* Footer - Only show on main pages */}
      {currentView !== 'project-udhaar' && <Footer />}
    </div>
  );
}

export default App;
