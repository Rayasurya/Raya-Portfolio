import React, { useState } from 'react';
import Hero from './components/Hero';
import DesignWall from './components/DesignWall';
import ReactiveBackground from './components/ReactiveBackground';
import CustomCursor from './components/CustomCursor';
import ComponentsGrid from './components/ComponentsGrid';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  const [currentView, setCurrentView] = useState('work');

  const renderView = () => {
    switch (currentView) {
      case 'work':
        return (
          <>
            <Hero />
            <DesignWall />
          </>
        );
      case 'components':
        return <ComponentsGrid />;
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      default:
        return <DesignWall />;
    }
  };

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
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.5px' }}>
          Raya.
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['work', 'components', 'about', 'resume'].map((view) => (
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
    </div>
  );
}

export default App;
