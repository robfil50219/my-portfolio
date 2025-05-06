import React from 'react';
import ProjectCard from './ProjectCard';


const projects = [
    {
        title: 'Auctionary',
        description: 'A real-time auction platform built with React and WebSockets. Users can create items, place live bids, and watch prices update instantly.',
        image: '/images/Auctionary.png',
        link: 'https://auctionarygo.netlify.app/',
    },
    {
        title: 'Holidaze',
        description: 'An accommodation-booking site that consumes the Noroff API, featuring dynamic filtering, date-picker integrations, and user reviews.',
        image: '/images/Holidaze.png',
        link: 'https://holidaze-robert-filep.netlify.app',
    },
    {
        title: 'ShopSphere',
        description: 'A modern e-commerce storefront built with React and Tailwind, complete with lazy-loaded images, cart state persistence.',
        image: '/images/ShopSphere.png',
        link: 'https://shopspherenow.netlify.app',
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