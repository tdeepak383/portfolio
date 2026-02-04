import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import { RiArrowRightUpLine } from "react-icons/ri";

const projects = [
  {
    title: "Creative Portfolio Website",
    description: "A modern, animated portfolio for student can find their passion.",
    image: project1,
    link: "https://findmypassion.in/"
  },
  {
    title: "Creative Portfolio Website",
    description: "A modern, animated portfolio site for BPO Agency.",
    image: project2,
    link: "#"
  },
  {
    title: "Business Landing Page",
    description: "Responsive website for startups for Technologies, Design & Developers.",
    image: project3,
    link: "https://loginatsolution.com/"
  },
  {
    title: "Real-Estate Agency",
    description: "Component-based interface built for Real Estate Agency",
    image: project4,
    link: "https://property.sale/"
  },
];

const Projects = () => {
  return (
    <section className="bg-[var(--accent-primary)] text-white py-20 px-6 md:px-16" id="projects">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 textbg">
          My Projects
        </h2>

        <p className="mb-12 max-w-xl mx-auto">
          Take a look at some of the design and development projects we've brought to life.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div>
              <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-[500%]
                    object-cover
                    object-top
                    transition-all
                    duration-[4000ms]
                    ease-out
                    group-hover:translate-y-[-80%]
                  "
                />
              </div>

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/40
                  to-transparent
                "
              />

              {/* Text */}
              <div
                className="
                  absolute bottom-0
                  p-6
                  text-left
                  transition-all
                  duration-700
                  group-hover:translate-y-20
                  group-hover:opacity-0
                "
              >
                <h3 className="font-semibold text-[rgb(240,255,108)] text-lg">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-gray-200">
                  {project.description}
                </p>
              </div>
              
            </div>
              <a href={project.link} target="_blank" className="flex justify-end mt-2 mx-5 hover:mr-2 transition-all duration-300"><RiArrowRightUpLine className="border border-gray-600 rounded-lg text-4xl p-1" /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;