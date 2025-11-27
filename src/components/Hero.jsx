import React from 'react';

const Hero = ({ onOpenProject }) => {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '4rem 2rem 0',
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 5,
    }}>
      <div style={{
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        marginBottom: '1rem',
        color: '#666',
        fontWeight: '600',
      }}>
        Product Designer & Design Engineer
      </div>
      <h1 style={{
        fontSize: '4rem',
        fontWeight: '800',
        marginBottom: '1.5rem',
        color: '#000',
        lineHeight: '1.1',
        letterSpacing: '-1px',
      }}>
        Designing Interfaces That Feel Inevitable.
      </h1>
      <p style={{
        fontSize: '1.2rem',
        maxWidth: '600px',
        lineHeight: '1.6',
        color: '#444',
        marginBottom: '2rem',
      }}>
        Bridging the gap between creative vision and engineering excellence to build scalable, human-centric products.
      </p>
      <button className="hero-cta" onClick={onOpenProject}>
        Open my best project
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
      <style>{`
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 32px;
          background: #111;
          color: #fff;
          border: none;
          border-radius: 100px;
          font-size: 1.1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          text-decoration: none;
        }
        .hero-cta:hover {
          background: #000;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          gap: 16px;
        }
        .hero-cta svg {
          transition: transform 0.3s ease;
        }
        .hero-cta:hover svg {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          section {
            padding: 4rem 1.5rem !important;
            min-height: 70vh !important;
          }
          h1 {
            font-size: 2.5rem !important;
            line-height: 1.2 !important;
          }
          p {
            font-size: 1.1rem !important;
            max-width: 100% !important;
          }
          .hero-cta {
            font-size: 1rem;
            padding: 14px 28px;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2rem !important;
          }
          p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
