import React from 'react';

const experience = [
  {
    role: 'Product Designer',
    company: 'nference',
    period: 'Apr 2024 - Present',
    description: 'Launched 5+ flagship features. Drove 50% premium sales increase through strategic UX. Created motion graphics for marketing. Collaborated with CEO on product vision.',
  },
  {
    role: 'Jr Product Designer',
    company: 'Togepe',
    period: 'Apr 2024 - Sep 2024',
    description: 'Delivered 15+ projects across Product Inventory, Healthcare, and AI Chatbot. Partnered with PMs and Directors on global UX challenges.',
  },
  {
    role: 'AI Content Producer',
    company: 'AI Content',
    period: 'Apr 2024 - Sep 2024',
    description: 'Led AI-powered content creation. Scaled YouTube to 100K subscribers in 2 months. Managed team of 4.',
  },
  {
    role: 'Digital Marketing Executive',
    company: 'Excel Prodigy',
    period: 'Nov 2022 - Apr 2024',
    description: 'Grew LinkedIn by 300% through content strategy. Influenced web design and brand direction.',
  },
  {
    role: 'Designer',
    company: 'Talentpepz',
    period: 'Sep 2020 - Oct 2022',
    description: 'Created marketing materials increasing followers by 15% and engagement by 20%.',
  },
];

const Resume = () => {
  return (
    <section style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '6rem 2rem',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '5rem',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        paddingBottom: '2rem'
      }}>
        <h2 style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          letterSpacing: '-0.03em',
          color: '#111',
          margin: 0,
          lineHeight: '1.1'
        }}>Experience</h2>
        <a href="https://rayasurya.designfolio.me" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button className="download-btn">
            View Full Resume
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </button>
        </a>
      </div>

      <div className="experience-list">
        {experience.map((job, index) => (
          <div key={index} className="job-item">
            <div style={{ flex: '0 0 220px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111', marginBottom: '0.5rem' }}>{job.role}</h3>
              <span style={{ fontSize: '1.1rem', color: '#666', fontWeight: '500' }}>{job.company}</span>
            </div>
            <div style={{ flex: '1' }}>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#444', marginBottom: '0' }}>{job.description}</p>
            </div>
            <div style={{ flex: '0 0 180px', textAlign: 'right' }}>
              <span style={{ fontSize: '1rem', color: '#999', fontWeight: '500', whiteSpace: 'nowrap' }}>{job.period}</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .download-btn {
          background: #111;
          color: #fff;
          border: none;
          padding: 14px 28px;
          border-radius: 100px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .download-btn:hover {
          background: #000;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .job-item {
          display: flex;
          padding: 2.5rem 0;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          gap: 2rem;
        }
        .job-item:last-child {
          border-bottom: none;
        }
        .job-item:hover {
          background-color: rgba(0,0,0,0.02);
          border-radius: 16px;
        }
        @media (max-width: 768px) {
          section {
            padding: 4rem 1.5rem !important;
          }
          h2 {
            font-size: 2.5rem !important;
          }
          div[style*="flex"][style*="space-between"] {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem;
          }
          .download-btn {
            align-self: flex-start;
          }
          .job-item {
            flex-direction: column !important;
            gap: 1rem !important;
            padding: 2rem 0 !important;
          }
          .job-item > div {
            padding-left: 0 !important;
            text-align: left !important;
            flex: 1 1 auto !important;
          }
          .job-item h3 {
            font-size: 1.3rem !important;
          }
          .job-item p {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 2rem !important;
          }
          .job-item h3 {
            font-size: 1.2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Resume;
