import React from "react";
import star from '../assets/star-icon.svg'
function MovingStrip() {
  const skills = [
    "React.Js",
    "Next.js",
    "Redux",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Express",
    "HTML",
    "CSS",
    "AWS",
    "jQuery",
    "Bootstrap",
    "Tailwind CSS",
    "Material UI",
    "GSAP",
    "SEO",
    "AI Tools",
    "Figma",
    "Github",
    "Github Pages",
    "JSON",
    "NPM",
    "Wireframing",
    "Agile Methodology",
    "Trello",
    "Vercel",
    "Render",
    "Netlify",
  ];

  return (
    <div className="section-gradient py-5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {[...skills, ...skills].map((skill, index) => (
          <span
            key={index}
            className="mx-6 uppercase text-xl font-semibold flex items-center gap-6"
          >
            {skill}
            <img src={star} alt="" className="w-5"/>
          </span>
          
        ))}
      </div>
    </div>
  );
}

export default MovingStrip;