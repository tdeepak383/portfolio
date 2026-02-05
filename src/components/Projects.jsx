import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import { RiArrowRightUpLine } from "react-icons/ri";
import dot from '../assets/icon-sub-heading.svg'
import { motion } from "framer-motion";

const projects = [
  {
    title: "Creative Portfolio Website",
    description: "A modern, animated portfolio for student can find their passion.",
    image: project1,
    link: "https://findmypassion.in/"
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
  {
    title: "Creative Portfolio Website",
    description: "A modern, animated portfolio site for BPO Agency.",
    image: project2,
    link: "#"
  },
];

const Projects = () => {

  const headingContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const headingItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};
  return (
    <section className="bg-[var(--accent-primary)] text-white py-20 px-6 md:px-16" id="projects">
      <div className="max-w-7xl mx-auto ">
        <motion.div 
          variants={headingContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={headingItem} className="flex items-center gap-2 mb-3">
            <img src={dot} alt="" />
            <h1 className="text-sm font-semibold">Built on experience. Driven by innovation.</h1>
          </motion.div>
          <motion.h2 variants={headingItem} className="text-4xl md:text-6xl font-bold mb-6 textbg">
            My Projects
          </motion.h2>

          <motion.p variants={headingItem} className="mb-12 max-w-xl">
            Take a look at some of the design and development projects we've brought to life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8">
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
              <div className="flex justify-end">
                <a href={project.link} target="_blank" className="inline-block">
                <div className="text-black mt-2 mx-5 transition-all duration-300 bg-gradient-to-r  hover:bg-gradient-to-l from-[var(--accent-gradient1)] to-[var(--accent-gradient2)] text-[var(--accent-dark)] p-3 rounded-full hover:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 44 45" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.2557 10.2031C27.9411 13.5177 21.7748 13.3932 18.3207 9.93912L16.9045 8.52293L14.1855 11.242L15.6016 12.6582C18.114 15.1705 21.5282 16.4694 24.9188 16.5399L8.14343 33.3154L10.9758 36.1477L27.7512 19.3723C27.8218 22.7629 29.1206 26.1772 31.6329 28.6895L33.0491 30.1057L35.7682 27.3866L34.352 25.9704C30.8979 22.5163 30.7735 16.3501 34.0881 13.0355L35.4476 11.676L32.6152 8.84357L31.2557 10.2031Z" fill="currentColor"></path></svg>
                </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;