import React from 'react';
import ProjectCard from './ProjectCard';

// Update these with your actual project details
const projects = [
    {
        title: 'Auctionary',
        description: 'Real-time bidding platform built with React and WebSockets.',
        image: '/images/Auctionary.png',
        link: 'https://auctionarygo.netlify.app/',
    },
    {
        title: 'Holidaze',
        description: 'Accommodation booking site integrating Noroff API.',
        image: '/images/Holidaze.png',
        link: 'holidaze-robert-filep.netlify.app',
    },
    {
        title: 'ShopSphere',
        description: 'Modern e-commerce store built with React and Tailwind.',
        image: '/images/ShopSphere.png',
        link: 'shopspherenow.netlify.app',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="container mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
            <div className="grid gap-8 md:grid-cols-3">
                {projects.map(p => (
                    <ProjectCard key={p.title} {...p} />
                ))}
            </div>
        </section>
    );
}