import React from 'react';
import dashboardImg from '../assets/dashboard.png';
import threejsImg from '../assets/threejs.png';
import ecommerceImg from '../assets/ecommerce.png';

const projects = [
    {
        title: 'Project One',
        description: 'A futuristic dashboard with real-time data visualization.',
        color: '#e0f7fa', // Light Cyan
        thumbnail: dashboardImg,
        borderColor: '#006064',
    },
    {
        title: 'Project Two',
        description: 'An immersive 3D experience built with Three.js.',
        color: '#fce4ec', // Light Pink
        thumbnail: threejsImg,
        borderColor: '#880e4f',
    },
    {
        title: 'Project Three',
        description: 'A minimal e-commerce platform with seamless transitions.',
        color: '#f1f8e9', // Light Green
        thumbnail: ecommerceImg,
        borderColor: '#33691e',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section" style={{
            padding: '4rem 2rem',
            maxWidth: '100%',
        }}>
            <h2 style={{
                fontSize: '2rem',
                marginBottom: '2rem',
                textAlign: 'left',
                color: '#000000',
            }}>Selected Works</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card" style={{
                        background: project.color,
                        borderRadius: '0',
                        border: `2px solid ${project.borderColor}`,
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <div style={{
                            height: '200px',
                            backgroundColor: '#fff',
                            backgroundImage: `url(${project.thumbnail})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderBottom: `2px solid ${project.borderColor}`,
                        }} />
                        <div style={{ padding: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#000000' }}>{project.title}</h3>
                            <p style={{ color: '#333333', fontSize: '1rem' }}>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <style>
                {`
          .projects-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          @media (min-width: 640px) {
            .projects-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .projects-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .project-card:hover {
            transform: translate(-5px, -5px);
            box-shadow: 8px 8px 0px #000000;
          }

          @media (max-width: 640px) {
            .projects-section {
              padding: 2rem 1rem !important;
            }
            .projects-section h2 {
              fontSize: 1.75rem !important;
            }
          }
        `}
            </style>
        </section>
    );
};

export default Projects;
