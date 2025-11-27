import React, { useState } from 'react';
import { Home, Briefcase, User, FileText } from 'lucide-react';
import Hero from './components/Hero';
import DesignWall from './components/DesignWall';
import ReactiveBackground from './components/ReactiveBackground';
import CustomCursor from './components/CustomCursor';
import ComponentsGrid from './components/ComponentsGrid';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero onOpenProject={() => setCurrentView('project-udhaar')} />
            <DesignWall onViewProject={(id) => {
              if (id === 51) setCurrentView('project-udhaar');
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
        return <ProjectUdhaar onBack={() => setCurrentView('home')} />;
      default:
        return <DesignWall onViewProject={(id) => {
          if (id === 51) setCurrentView('project-udhaar');
        }} />;
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const menuOptions = [
    {
      label: "Home",
      Icon: <Home className="w-4 h-4" />,
      onClick: () => scrollToSection('home'),
    },
    {
      label: "Projects",
      Icon: <Briefcase className="w-4 h-4" />,
      onClick: () => scrollToSection('projects'),
    },
    {
      label: "About",
      Icon: <User className="w-4 h-4" />,
      onClick: () => scrollToSection('about'),
    },
    {
      label: "Resume",
      Icon: <FileText className="w-4 h-4" />,
      onClick: () => scrollToSection('resume'),
    },
  ];

  return (
    <div className="app-container">
      <CustomCursor />
      <ReactiveBackground />

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
          onClick={() => setCurrentView('home')}
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            letterSpacing: '-0.5px',
            cursor: 'pointer'
          }}
        >
          Raya.
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['home', 'components', 'about', 'resume'].map((view) => (
            <button
              key={view}
              onClick={() => setCurrentView(view)}
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

      <main style={{
        paddingTop: '80px', // Space for fixed nav
        minHeight: '100vh',
        position: 'relative',
        zIndex: 1,
      }}>
        {renderView()}
      </main>

      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 50,
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        borderRadius: '2rem',
        padding: '0.5rem 1.5rem',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        border: '1px solid rgba(255,255,255,0.5)'
      }}>
        <AnimatedSocialLinks socials={socialLinks} />
      </div>
    </div>
  );
}

import ProjectUdhaar from './components/ProjectUdhaar';
import AnimatedSocialLinks from './components/ui/social-links';

const socialLinks = [
  {
    name: 'Instagram',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
  },
  {
    name: 'LinkedIn',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
  },
  {
    name: 'Email',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
  },
  {
    name: 'WhatsApp',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
    scale: 1.3, // WhatsApp SVG has extra whitespace, scale it up
  },
];

export default App;
