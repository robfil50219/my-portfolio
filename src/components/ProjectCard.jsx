import React from 'react';

export default function ProjectCard({ title, description, image, link }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="mb-4">{description}</p>
                <a
                    href={link}
                    className="inline-block px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700"
                    target="_blank" rel="noopener"
                >
                    View Project
                </a>
            </div>
        </div>
    );
}