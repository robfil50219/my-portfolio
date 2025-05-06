import React from 'react';

export default function ProjectCard({ title, description, image, link }) {
    return (
        <div
            className="
        bg-white text-gray-900
        dark:bg-gray-800 dark:text-gray-200
        rounded-lg overflow-hidden
        transform transition-transform duration-500
        hover:-translate-y-2 hover:scale-105
        shadow-lg hover:shadow-2xl
      "
        >
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="mb-4">{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener"
                    className="
            inline-block px-4 py-2 bg-teal-600 text-white rounded-full
            hover:bg-teal-700 transition
          "
                >
                    View Project
                </a>
            </div>
        </div>
    );
}