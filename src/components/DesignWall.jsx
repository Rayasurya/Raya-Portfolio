import React from 'react';
import centerImg from '../assets/center_image.png';
import udhaarThumbnail from '../assets/Gemini_Generated_Image_433ktf433ktf433k.png';
import { ArrowRight } from 'lucide-react';

// Organized by columns for masonry layout
// Total Height Target: ~1350px (including offsets and gaps)
const columns = [
  {
    id: 'col-1',
    offset: '0px',
    items: [
      { id: 11, title: 'Mobile App', type: 'UX Design', color: '#e8e3f3', height: '350px' },
      { id: 12, title: 'Finance Dash', type: 'UI Kit', color: '#d4d0e3', height: '450px' },
      { id: 13, title: 'Travel App', type: 'Concept', color: '#c9c4db', height: '502px' },
    ]
  },
  {
    id: 'col-2',
    offset: '80px',
    items: [
      { id: 21, title: 'Web Dashboard', type: 'UI Design', color: '#e3e8f3', height: '450px' },
      { id: 22, title: 'Analytics', type: 'Data Viz', color: '#d0d8e8', height: '400px' },
      { id: 23, title: 'Crypto Wallet', type: 'Web3', color: '#c4cfe0', height: '372px' },
    ]
  },
  {
    id: 'col-3',
    offset: '160px',
    items: [
      { id: 31, title: 'Center Piece', type: 'Focus', color: 'transparent', isImage: true, height: '400px' },
      { id: 32, title: 'Design System', type: 'Library', color: '#f3e8e8', height: '350px' },
      { id: 33, title: 'Interaction', type: 'Prototype', color: '#e8d8d8', height: '392px' },
    ]
  },
  {
    id: 'col-4',
    offset: '80px',
    items: [
      { id: 41, title: 'E-commerce', type: 'Web Design', color: '#e8f3e8', height: '380px' },
      { id: 42, title: 'Landing Page', type: 'Marketing', color: '#d8e8d8', height: '400px' },
      { id: 43, title: 'Portfolio', type: 'Personal', color: '#cfe0cf', height: '442px' },
    ]
  },
  {
    id: 'col-5',
    offset: '0px',
    items: [
      { id: 51, title: 'Project Udhaar', type: 'Case Study', color: '#f3f0e8', height: '320px', thumbnail: udhaarThumbnail },
      { id: 52, title: 'Brand Identity', type: 'Branding', color: '#e8e3d8', height: '480px' },
      { id: 53, title: 'Social Media', type: 'Content', color: '#e0d9cf', height: '502px' },
    ]
  },
];

const DesignWall = ({ onViewProject }) => {
  return (
    <section style={{ padding: '0 2rem 4rem', maxWidth: '1600px', margin: '-4rem auto 0', overflow: 'visible', position: 'relative', zIndex: 0 }}>
      <div className="design-masonry">
        {columns.map((col) => (
          <div
            key={col.id}
            className="design-column"
            style={{ paddingTop: col.offset }}
          >
            {col.items.map((design) => (
              <div
                key={design.id}
                className="design-item"
                onClick={() => onViewProject && onViewProject(design.id)}
                style={{
                  background: design.color,
                  border: design.isImage ? 'none' : '1px solid rgba(0,0,0,0.05)',
                  height: design.height,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {!design.isImage && (
                  <>
                    {/* Special handling for Project Udhaar card with dynamic effects */}
                    {design.id === 51 && design.thumbnail ? (
                      <>
                        {/* Thumbnail Image */}
                        <img
                          src={design.thumbnail}
                          alt="Project Udhaar thumbnail"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />

                        {/* Content */}
                        {/* Content Removed - Text is in thumbnail */}

                        {/* Hover Overlay with Black Button */}
                        <div className="design-overlay">
                          <button onClick={(e) => {
                            e.stopPropagation();
                            onViewProject && onViewProject(design.id);
                          }}>View Project</button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="design-content" style={{ position: 'relative', zIndex: 2 }}>
                          <h3>{design.title}</h3>
                          <span>{design.type}</span>
                        </div>
                        <div className="design-overlay">
                          <button onClick={(e) => {
                            e.stopPropagation();
                            onViewProject && onViewProject(design.id);
                          }}>View Project</button>
                        </div>
                      </>
                    )}
                  </>
                )}
                {design.isImage && (
                  <>
                    <img src={centerImg} alt="Profile" className="profile-img" />
                    <div className="design-overlay image-overlay">
                      <a
                        href="https://bento.me/rayasurya"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button>Know Me</button>
                      </a>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <style>{`
        .design-masonry {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          align-items: flex-start;
        }

        .design-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          flex: 1;
          min-width: 0; /* Prevent flex overflow */
        }

        .design-item {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          width: 100%;
        }

        .design-item:hover {
          transform: scale(1.05);
          z-index: 10;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        /* Special glow effect for Project Udhaar card */
        .design-item:hover:has([style*="linear-gradient"]) {
          box-shadow: 0 0 60px -15px hsl(28 80% 55% / 0.6);
        }

        .design-content {
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .design-item:hover .design-content {
          transform: translateY(-10px);
        }

        .design-content h3 {
          font-size: 1.4rem;
          margin-bottom: 0.25rem;
          color: #fff;
          font-weight: 700;
        }

        .design-content span {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }

        .design-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,0.15);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        /* Special style for the image overlay to be slightly transparent black or just maintain white style */
        .image-overlay {
            background: rgba(0,0,0,0.4);
        }

        .design-item:hover .design-overlay {
          opacity: 1;
        }

        .design-overlay button {
          padding: 12px 24px;
          background: #000;
          color: #fff;
          border: none;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }
        
        .image-overlay button {
            background: #fff;
            color: #000;
        }

        .design-item:hover .design-overlay button {
          transform: translateY(0);
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .design-masonry {
            gap: 1rem;
          }
          .design-column {
            flex: 1 1 45%; /* 2 columns */
            padding-top: 0 !important; /* Reset offsets */
          }
          .design-item {
            height: auto !important;
            min-height: 250px;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 0 1rem 3rem !important;
            margin: -2rem auto 0 !important;
          }
          
          /* 1. The Container */
          .design-masonry {
            display: grid;
            grid-template-columns: 1fr !important; /* Force Single Column */
            gap: 24px !important;
            padding-bottom: 40px; /* Space for scrolling */
          }
          
          .design-column {
            display: contents; /* Let items participate in the grid directly */
          }

          /* 2. The Card Itself */
          .design-item {
            height: 280px !important;      /* Fixed Tall Height */
            min-height: 280px !important;  /* Safety enforcement */
            width: 100%;                   /* Full width */
            
            /* Layout: Push text to bottom left */
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
            padding: 24px;
            
            /* Visuals */
            border-radius: 24px;
            overflow: hidden;
            position: relative; /* Essential for background images */
            background-color: #f3f4f6; /* Fallback color if image fails */
            aspect-ratio: auto;
            z-index: 1;
          }

          /* Reordering for Mobile */
          /* Project Udhaar (ID 51) */
          .design-item:has(img[alt="Project Udhaar thumbnail"]) {
            order: -2;
          }
          
          /* Know Me / Center Piece (ID 31) */
          .design-item:has(img[alt="Profile"]) {
            order: -1;
          }

          /* 3. Text Readability Layer */
          /* Ensure text sits ON TOP of the image */
          .design-content h3, 
          .design-content span,
          .design-overlay button {
            position: relative;
            z-index: 10;
            /* color: white;  -- Removed assumption of dark background for all cards, keeping original colors but ensuring z-index */
            text-shadow: 0 2px 10px rgba(255,255,255,0.5); /* Legibility protection for light backgrounds */
          }
          
          /* Specific fix for Profile Image Card */
           .design-item:has(.profile-img) {
              padding: 0 !important;    /* Remove padding so image bleeds to edge */
              background: #e5e7eb;      /* Loading state color */
           }
        }

        @media (max-width: 480px) {
          .design-content h3 {
            font-size: 1.1rem;
          }
          .design-overlay button {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
        }
        
        /* Profile Image Fix */
        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;        /* CRITICAL: Prevents squashing */
          object-position: center 25%; /* Focus on the face (25% from top) */
          position: absolute;
          top: 0;
          left: 0;
          display: block;
        }
      `}</style>
    </section>
  );
};

export default DesignWall;
