// Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Tadoo',
    description: `Tadoo is a simple family To-Do app built with Angular that stores all tasks locally in the browser’s localStorage. You can add, edit, and check off tasks without any external database. This was my very first Angular project, and it helped me learn the core concepts—components, services, and two-way data binding with ngModel—while structuring a basic application from scratch. It’s still a work in progress, and I’ll be adding more changes and features as I continue learning.`,
    image: 'images/Tadoo.png',
    link: 'https://tadoo.netlify.app/',
    repoLink: 'https://github.com/robfil50219/tadoo.git',  
  },
  {
    title: 'Holidaze',
    description: `An accommodation-booking site that consumes the Noroff API, featuring dynamic filtering, date-picker integrations, and user reviews.`,
    image: '/images/Holidaze.png',
    link: 'https://holidaze-robert-filep.netlify.app',
    repoLink: 'https://github.com/robfil50219/project-exam-2.git',
  },
  {
    title: 'ShopSphere',
    description: `A modern e-commerce storefront built with React and Tailwind, complete with lazy-loaded images, cart state persistence.`,
    image: '/images/ShopSphere.png',
    link: 'https://shopspherenow.netlify.app',
    repoLink: 'https://github.com/robfil50219/Javascript-Frameworks-Ca.git', 
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((p) => (
          <div key={p.title} className="h-full">
            <ProjectCard
              title={p.title}
              description={p.description}
              image={p.image}
              link={p.link}
              repoLink={p.repoLink}  // ← PASS repoLink HERE
            />
          </div>
        ))}
      </div>
    </section>
  );
}