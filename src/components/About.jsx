// src/components/About.jsx
import React from 'react';

export default function About({ open }) {
    return (
        // Outer wrapper handles the collapse/expand and fade
        <div
            className={`
        overflow-hidden transition-[max-height,opacity] ease-in-out duration-500
        ${open ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}
      `}
        >
            {/* Inner section only shows when wrapper expands */}
            <section
                id="about"
                className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 py-10"
            >
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p className="mb-4">
                        I’m a passionate front-end developer specializing in React and modern CSS. With a background in visual design and an eye for detail, I bridge the gap between aesthetics and functionality to build engaging, accessible interfaces. When I’m not coding, you’ll find me sketching UI mockups, exploring new JS frameworks, or tinkering with open-source tools.
                    </p>
                    <h3 className="text-xl font-semibold mb-2">Core Skills</h3>
                    <ul className="list-disc list-inside space-y-1">
                        <li>React &amp; Vite – Component-driven UIs & fast builds</li>
                        <li>Tailwind CSS – Utility-first styling</li>
                        <li>Responsive Design – Mobile-first, cross-device</li>
                        <li>JavaScript (ES6+) – Clean, modular code</li>
                        <li>Git/GitHub – Collaborative workflows</li>
                        <li>UX/UI – Wireframing & user-centered design</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
