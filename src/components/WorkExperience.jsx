import React from 'react'
import { PiBuildingsBold } from "react-icons/pi";

function WorkExperience() {


  return (
    <section className="bg-[var(--accent-dark)] py-20 px-6 md:px-16" id='education'>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center textbg">
          My Work Experience
        </h2>

        <p className="mb-12 text-center text-white max-w-xl mx-auto">
          Turning knowledge into impact through real-world projects and professional experience.
        </p>


        <div className='bg-[var(--accent-gradient1)] text p-5 rounded-2xl'>
            <div className='flex items-center gap-4'>
              <PiBuildingsBold className='text-3xl'/>
              <div>
                <h3 className='text-lg font-semibold'>LOGINATSOLUTION PVT. LTD., NOIDA</h3>
                <p className='font-semibold'>[Sr. Associate Frontend Engineer]</p>
              </div>
            </div>
            
            <div>
              <ul className='list-disc ml-5 text-sm mt-5'>
                  <li>Work on MyHCLTech Software for HCLTech Clients</li>
                  <li>Developed a dynamic React web application with advanced filters, routes, and responsive UI design.</li>
                  <li>Integrated Node.js, Express, and MongoDB for seamless backend functionality.</li>
                  <li>Implemented smooth animations and interactions using GSAP for an engaging user experience.</li>
              </ul>
            </div>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience