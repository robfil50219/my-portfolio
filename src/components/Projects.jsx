import React from 'react';
import ProjectCard from './ProjectCard';

// Update these with your actual project details
const projects = [
    {
        title: 'Auctionary',
        description: 'Auctionary - Bid Smart, Win Big. Auctionary is a user-friendly auction platform with a dynamic carousel of featured items, comprehensive search, and user listings.',
        image: '/images/Auctionary.png',
        link: 'https://auctionarygo.netlify.app/',
    },
    {
        title: 'Holidaze',
        description: 'Holidaze is a modern accommodation booking platform where users can search and book venues, while managers can manage listings.',
        image: '/images/Holidaze.png',
        link: 'holidaze-robert-filep.netlify.app',
    },
    {
        title: 'ShopSphere',
        description: 'ShopSphere is an e-commerce platform built using React, offering product listings, a cart, checkout, and product search features.',
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