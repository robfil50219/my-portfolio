// ProjectCard.jsx
import React from 'react';

export default function ProjectCard({ title, description, image, link, repoLink }) {
  return (
    <div
      className="
        bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-200
        rounded-lg shadow-lg overflow-hidden
        flex flex-col
        transform transition-transform duration-500
        hover:-translate-y-2 hover:scale-105 hover:shadow-2xl
      "
    >
      {/* 1) Fixed‐height header image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />

      {/* 2) Padded container for title + text */}
      <div className="px-4 py-3 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {/* 
          Fixed-height text box:
            - h-32 (8 rem) so all cards match height.
            - overflow-y-auto to scroll if description is taller.
        */}
        <div className="h-32 overflow-y-auto text-sm mb-4">
          <p>{description}</p>
        </div>

        {/*
          3) Button wrapper:
             - mt-auto pushes the buttons to the bottom of the card.
             - flex justify-center centers them horizontally.
             - space-x-3 gives a little gap between “View Project” and “GitHub”.
        */}
        <div className="mt-auto flex justify-center space-x-3">
          {/* View Project button (always shown) */}
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

          {/* GitHub button (only shown if repoLink is provided) */}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener"
              className="
                inline-block px-4 py-2 bg-gray-700 text-white rounded-full
                hover:bg-gray-800 transition
              "
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}