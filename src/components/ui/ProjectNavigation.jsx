import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

/**
 * ProjectNavigation - Next/Previous project links at bottom of case studies
 * Shows 2 adjacent projects with large clickable cards
 */
export function ProjectNavigation({ currentProject, projects, onNavigate, className }) {
    if (!projects || projects.length === 0) return null;

    const currentIndex = projects.findIndex(p => p.id === currentProject?.id);
    if (currentIndex === -1) return null;

    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    const nextIndex = (currentIndex + 1) % projects.length;

    const prevProject = projects[prevIndex];
    const nextProject = projects[nextIndex];

    const ProjectCard = ({ project, direction }) => (
        <div
            onClick={() => onNavigate(project.route)}
            className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 hover:border-orange-500 transition-all duration-300 cursor-pointer bg-white shadow-sm hover:shadow-xl"
        >
            {/* Thumbnail */}
            <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                {project.thumbnail ? (
                    <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <span className="text-gray-400 text-6xl font-bold opacity-20">
                            {project.title.charAt(0)}
                        </span>
                    </div>
                )}

                {/* Direction indicator overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex items-center gap-2 text-white">
                        {direction === 'prev' && <ArrowLeft size={20} />}
                        <span className="font-medium">
                            {direction === 'prev' ? 'Previous Project' : 'Next Project'}
                        </span>
                        {direction === 'next' && <ArrowRight size={20} />}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {project.category && (
                    <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                        {project.category}
                    </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                    {project.description}
                </p>
            </div>
        </div>
    );

    return (
        <section className={cn("py-20 bg-gray-50", className)}>
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                    More Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectCard project={prevProject} direction="prev" />
                    <ProjectCard project={nextProject} direction="next" />
                </div>
            </div>
        </section>
    );
}

export default ProjectNavigation;
