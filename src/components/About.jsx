import React from 'react';

export default function About() {
    return (
        <section
            id="about"
            className="
        bg-white text-gray-900
        dark:bg-gray-800 dark:text-gray-200
        py-20
      "
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-lg mb-8">
                    I’m a passionate front-end developer specializing in React and modern CSS. With a background in visual design and an eye for detail, I bridge the gap between aesthetics and functionality to build engaging, accessible interfaces. When I’m not coding, you’ll find me sketching UI mockups, exploring new JS frameworks, or tinkering with open-source tools.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Core Skills</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>React &amp; Vite – Component-driven UIs with fast build times</li>
                    <li>Tailwind CSS – Utility-first styling for rapid, consistent layouts</li>
                    <li>Responsive Design – Mobile-first approach that scales to any device</li>
                    <li>JavaScript (ES6+) – Clean, modular, maintainable code</li>
                    <li>Version Control (Git/GitHub) – Collaborative workflows and CI integration</li>
                    <li>UX/UI Fundamentals – Wireframing, prototyping, and user-centered design</li>
                </ul>
            </div>
        </section>
    );
}