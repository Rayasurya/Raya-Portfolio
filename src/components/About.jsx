import React from 'react';
import { Connect } from './Connect';
import { HoverPreview } from './ui/hover-preview';
import IDCard from './ui/IDCard';

const About = () => {
    const skills = ['User Research', 'Interaction Design', 'Visual Design', 'Leveraging AI for work', 'User Testing', 'Content Management', 'Continuous Learning', 'Content strategy', 'Prompt Engineering'];
    const tools = ['Figma', 'Figjam', 'DaVinci Resolve', 'Illustrator', 'Blender', 'Midjourney', 'Stable diffusion', 'UX', 'UI', 'Kling AI', 'Elevenlabs', 'Helper AI', 'Comfy UI', 'Foocus AI'];
    const education = ['B.Sc. Psychology', 'Google UX Design Professional', 'Associate Certified in Microsoft'];
    const languages = ['English', 'हिंदी Hindi', 'தமிழ் Tamil', 'తెలుగు Telugu', 'ಕನ್ನಡ Kannada'];

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

            <div style={{
                marginBottom: '4rem',
                textAlign: 'left',
            }}>
                <HoverPreview linkData={{
                    YouTube: {
                        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=560&h=320&fit=crop",
                        title: "YouTube Channel",
                        subtitle: "100K+ Subscribers • AI & Design",
                    }
                }}>
                    {"I'm a Product Designer blending psychology, AI, and storytelling to create human-centered experiences. My work spans healthcare and data platforms, turning complex ideas into intuitive interfaces. I enjoy solving messy problems, designing micro-interactions, and making technology feel effortless. I also run a {YouTube} channel exploring AI & Design."}
                </HoverPreview>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '4rem',
                textAlign: 'left',
            }}>
                <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#000' }}>Skills</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {skills.map((skill, index) => (
                            <span key={`skill-${index}`} className="skill-pill">{skill}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#000' }}>Tools</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {tools.map((tool, index) => (
                            <span key={`tool-${index}`} className="skill-pill">{tool}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#000' }}>Education</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {education.map((edu, index) => (
                            <span key={`edu-${index}`} className="skill-pill">{edu}</span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#000' }}>Languages</h3>
                    <div className="languages-container">
                        {languages.map((lang, index) => (
                            <span key={`lang-${index}`} className="skill-pill language-pill">{lang}</span>
                        ))}
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
                    justify-content: flex-start;
                    gap: 10px;
                }

                .language-pill {
                    margin: 0;
                    flex: 0 1 auto;
                    font-family: 'Space Grotesk', 'Segoe UI', Arial, sans-serif;
                    font-size: 0.85rem;
                    font-weight: 500;
                    background: linear-gradient(135deg, #f5f5f5 0%, #ececec 100%);
                    position: relative;
                }

                @media (max-width: 768px) {
                    #about {
                        padding: 4rem 1.5rem !important;
                    }
                    #about h2 {
                        font-size: 2.5rem !important;
                        margin-bottom: 2rem !important;
                    }
                    #about h3 {
                        font-size: 1.1rem !important;
                    }
                }

                @media (max-width: 480px) {
                    #about h2 {
                        font-size: 2rem !important;
                    }
                }
            `}</style>

            <IDCard />

            <div className="mt-16">
                <Connect />
            </div>
        </section>
    );
};

export default About;
