// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Creative Portfolio Website",
    description: "A modern, animated portfolio site for designers and developers.",
    image: "/assets/project1.jpg",
  },
  {
    title: "Business Landing Page",
    description: "Responsive website for startups with lead capture features.",
    image: "/assets/project2.jpg",
  },
  {
    title: "E-commerce UI Kit",
    description: "Component-based shop interface built with Tailwind CSS.",
    image: "/assets/project3.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[rgb(22,48,49)] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-[rgb(240,255,108)]">My Projects</h2>
        <p className="mb-12 text-[rgb(255,255,255)] max-w-xl mx-auto">
          Take a look at some of the design and development projects we've brought to life.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[rgb(43,67,68)] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[rgb(240,255,108)]">{project.title}</h3>
                <p className="mt-2 text-[rgb(255,255,255)]">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
