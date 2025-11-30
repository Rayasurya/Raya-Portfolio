import React from 'react';
import { Connect } from './Connect';

const About = () => {
    return (
        <section id="about" style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '6rem 2rem',
            textAlign: 'center',
        }}>
            <h2 style={{
                fontSize: '3.5rem',
                fontWeight: '800',
                marginBottom: '3rem',
                letterSpacing: '-0.03em',
                color: '#111',
                lineHeight: '1.1'
            }}>About Me</h2>

            <p style={{
                color: '#333',
                marginBottom: '5rem',
                fontWeight: '400',
                maxWidth: '700px',
                marginLeft: 'auto',
                marginRight: 'auto',
                textAlign: 'left',  /* Force left alignment */
                fontSize: '16px',   /* Standard readable size */
                lineHeight: '1.6',  /* Breathing room */
                padding: '0 16px'   /* Safety gutters */
            }}>
                Designed & launched key features at nference. Executed 15+ UX projects at Togepe. Grew an AI Youtube content to 100K+ audience. Proficient in Figma, Blender, AI tools. Skilled in user research, motion graphics & content strategy.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '4rem',
                textAlign: 'left',
            }}>
                <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#000' }}>Skills</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {['User Research', 'Interaction Design', 'Visual Design', 'Leveraging AI for work', 'User Testing', 'Content Management', 'Continuous Learning', 'Content strategy', 'Prompt Engineering'].map(skill => (
                            <span key={skill} className="skill-pill">{skill}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#000' }}>Tools</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {['Figma', 'Figjam', 'DaVinci Resolve', 'Illustrator', 'Blender', 'Midjourney', 'Stable diffusion', 'UX', 'UI', 'Kling AI', 'Elevenlabs', 'Helper AI', 'Comfy UI', 'Foocus AI'].map(skill => (
                            <span key={skill} className="skill-pill">{skill}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#000' }}>Education</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        <span className="skill-pill">B.Sc. Psychology</span>
                        <span className="skill-pill">Google UX Design Professional</span>
                        <span className="skill-pill">Associate Certified in Microsoft</span>
                    </div>
                </div>
                <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#000' }}>Languages</h3>
                    <div className="languages-container">
                        <span className="skill-pill language-pill">English</span>
                        <span className="skill-pill language-pill">हिंदी Hindi</span>
                        <span className="skill-pill language-pill">தமிழ் Tamil</span>
                        <span className="skill-pill language-pill">తెలుగు Telugu</span>
                        <span className="skill-pill language-pill">ಕನ್ನಡ Kannada</span>
                    </div>
                </div>
            </div>
            <style>{`
                .skill-pill {
                    background: #f5f5f5;
                    color: #333;
                    padding: 8px 16px;
                    border-radius: 100px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    transition: all 0.2s ease;
                }
                .skill-pill:hover {
                    background: #000;
                    color: #fff;
                    transform: translateY(-2px);
                }

                .languages-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center; /* Center the cluster */
                    gap: 10px; /* Consistent tight spacing */
                }

                .language-pill {
                    margin: 0; /* Remove random margins */
                    flex: 0 1 auto; /* Allow pills to size based on text */
                }

                @media (max-width: 768px) {
                    section {
                        padding: 4rem 1.5rem !important;
                    }
                    h2 {
                        font-size: 2.5rem !important;
                        margin-bottom: 2rem !important;
                    }
                    p {
                        font-size: 1.2rem !important;
                        margin-bottom: 3rem !important;
                    }
                    div[style*="grid"] {
                        grid-template-columns: 1fr !important;
                        gap: 2.5rem !important;
                    }
                }

                @media (max-width: 480px) {
                    h2 {
                        font-size: 2rem !important;
                    }
                    p {
                        font-size: 1.1rem !important;
                    }
                    h3 {
                        font-size: 1.1rem !important;
                    }
                }
            `}</style>

            <Connect />
        </section>
    );
};

export default About;
