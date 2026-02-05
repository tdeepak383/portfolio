import React from 'react'
import { PiBuildingsBold } from "react-icons/pi";
import { FaRegCalendar } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import { BsBuildings } from "react-icons/bs";
import dot from '../assets/icon-sub-heading.svg'

function WorkExperience() {

  const data = [
    {
      company: "LOGINATSOLUTION PVT. LTD.",
      position: "Sr. Associate Frontend Engineer",
      date: "Jun 2025 - Now",
      location: "NOIDA",
      points: [
        "Contributed to the development and enhancement of the MyHCLTech platform, delivering solutions for HCLTech clients.",        
        "Built dynamic and responsive web applications using React, implementing advanced filtering and routing for improved usability.",        
        "Engineered robust backend services with Node.js, Express, and MongoDB to ensure scalable and efficient data management.",        
        "Enhanced user engagement by implementing smooth animations and interactive interfaces using GSAP."
      ]
    },
    {
      company: "PROPERTY.SALE",
      position: "Frontend Engineer",
      date: "Jun 2024 - May 2025",
      location: "NOIDA",
      points: [
        "Developed and integrated advanced filtering, routing, and schema architecture using Node.js, Express, and MongoDB to enhance application scalability.",        
        "Designed and implemented RESTful APIs with structured controllers and models, ensuring efficient data handling and seamless front-end integration.",        
        "Optimized front-end performance through code refactoring, reducing load times and improving overall user experience.",        
        "Built a location-based search feature to deliver dynamic, user-specific results backed by MongoDB.",        
        "Collaborated with cross-functional teams to deliver high-quality features in an Agile development environment.",        
        "Implemented smooth, interactive UI animations using GSAP and managed complex application state with Redux."
      ]
    },
    {
      company: "MISSION20 ZERO",
      position: "Web Developer",
      date: "Jan 2021- May 2024",
      location: "DOHA, QATAR",
      points: [
        "Developed a digital Restaurant QR Menu with intuitive front-end design, optimized React Hooks, and improved application performance.",        
        "Designed and built a comprehensive ERP system interface using HTML and CSS, focusing on usability and structured layout.",        
        "Created responsive, modern web pages ensuring cross-browser compatibility and mobile-first design principles.",        
        "Collaborated with team members to translate business requirements into functional and visually appealing web solutions.",        
        "Improved code quality through refactoring and adoption of reusable components, enhancing maintainability.",        
        "Integrated APIs and dynamic data rendering to deliver interactive user experiences."
      ]
    },
  ]


  return (
    <section className="bg-[var(--accent-dark)] py-20 px-6 md:px-16" id='work-experience'>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <img src={dot} alt="" />
          <h1 className="text-sm font-semibold text-white">Experience that drives results.</h1>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 textbg">
          My Work Experience
        </h2>

        <p className="mb-12 text-white max-w-xl">
          Turning knowledge into impact through real-world projects and professional experience.
        </p>

        <div className="grid grid-cols-1 gap-10">
        {data.map((item, index) => 
          (
          <div key={index} className='bg-[var(--accent-primary)] relative text-white p-8 rounded-3xl transition-all duration-500'>
            <div className="text-black text-6xl md:absolute right-5 top-5 transition-all duration-300 bg-gradient-to-r  hover:bg-gradient-to-l from-[var(--accent-gradient1)] to-[var(--accent-gradient2)] text-[var(--accent-dark)] p-5 inline-block rounded-full">
              <BsBuildings />
              </div>
              <div>
                <h3 className='text-xl md:text-3xl textbg font-bold'>{item.company}</h3>
                <p className='font-semibold'>[{item.position}]</p>
              </div>
            <div className='flex max-sm:flex-col max-sm:items-start gap-6 items-center mt-5'>
                <div className='flex gap-4 items-center'>
                  <div className="text-black transition-all duration-300 bg-gradient-to-r  hover:bg-gradient-to-l from-[var(--accent-gradient1)] to-[var(--accent-gradient2)] text-[var(--accent-dark)] p-2 rounded-full">
                  <FaRegCalendar />
                  </div>
                  <p>{item.date}</p>
                  </div>
                <div className='flex gap-4 items-center'>
                  <div className="text-black transition-all duration-300 bg-gradient-to-r  hover:bg-gradient-to-l from-[var(--accent-gradient1)] to-[var(--accent-gradient2)] text-[var(--accent-dark)] p-2 rounded-full">
                  <ImLocation />
                  </div>
                  <p>{item.location}</p>
                  </div>
            </div>
            <div>
              <ul className='text-sm mt-6'>
                  {item.points.map((p, i) => (
                    <li key={i} className='flex items-center gap-3 mt-3'><img src={dot} alt="" />{p}</li>
                  ))}
              </ul>
            </div>
        </div>
      ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience