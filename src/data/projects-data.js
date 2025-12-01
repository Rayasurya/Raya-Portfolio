/**
 * Centralized project metadata
 * Used for project navigation and portfolio organization
 */

export const projects = [
    {
        id: 1,
        slug: 'udhaar-app',
        title: 'Udhaar - Digital Lending Platform',
        description: 'Fintech solution for offline payments in India - Bridging the connectivity gap for 60M+ merchants',
        thumbnail: null, // User will add
        hero: null, // User will add
        category: 'Fintech • UX Strategy',
        year: 2024,
        client: 'Concept Project',
        role: 'Product Designer',
        timeline: '4 Weeks',
        team: ['Designer'],
        tags: ['Fintech', 'Mobile', 'User Research', 'Offline Protocols'],
        route: 'project-udhaar-v2'
    }
];

export const getProjectById = (id) => {
    return projects.find(p => p.id === id);
};

export const getProjectByRoute = (route) => {
    return projects.find(p => p.route === route);
};

export const getNextProject = (currentId) => {
    const currentIndex = projects.findIndex(p => p.id === currentId);
    if (currentIndex === -1) return null;
    const nextIndex = (currentIndex + 1) % projects.length;
    return projects[nextIndex];
};

export const getPreviousProject = (currentId) => {
    const currentIndex = projects.findIndex(p => p.id === currentId);
    if (currentIndex === -1) return null;
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    return projects[prevIndex];
};
