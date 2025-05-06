// src/components/About.jsx
import React, { useState } from 'react';

export default function About() {
    const [open, setOpen] = useState(false);

    return (
        <section
            id="about"
            className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 py-20"
        >
            <div className="container mx-auto px-6">
                <button
                    onClick={() => setOpen(o => !o)}
                    className="
                    group w-full flex items-center justify-between
                    bg-gradient-to-r from-teal-500 to-teal-700
                    text-white px-6 py-3 rounded-xl
                    shadow-2xl           /* heavier base shadow */
                    hover:shadow-[0_25px_50px_rgba(0,0,0,0.25)] /* super deep shadow on hover */
                    hover:scale-105 active:scale-95
                    focus:outline-none focus:ring-4 focus:ring-teal-300
                    transition-transform transition-shadow duration-200
                  "

                >
                    <span className="text-lg font-semibold">About Me</span>
                    {/* Unicode ▼ that flips to ▲ when open */}
                    <span
                        className={`
              text-2xl transform transition-transform duration-300
              ${open ? 'rotate-180' : 'rotate-0'}
            `}
                    >
                        ▼
                    </span>
                </button>

                <div
                    className={`
            mt-4 overflow-hidden transition-[max-height,opacity] duration-500
            ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
          `}
                >
                    <div className="pt-4">
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
                </div>
            </div>
        </section>
    );
}