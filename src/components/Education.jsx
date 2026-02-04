import React from 'react'
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineMenuBook } from 'react-icons/md';
import { MdOutlineCalendarToday } from "react-icons/md";


function Education() {
  return (
    <section className="bg-[var(--accent-primary)] text-white py-20 px-6 md:px-16" id='education'>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center textbg">
          My Education
        </h2>

        <p className="mb-12 text-center max-w-xl mx-auto">
          A strong academic foundation that shaped my problem-solving mindset and passion for technology.
        </p>
        <div className='grid md:grid-cols-2 gap-10'>
          <div className='bg-[var(--accent-dark)] p-8 rounded-2xl '>
            <div className='flex items-center gap-4 mt-4'>
              <MdOutlineMenuBook className='text-2xl'/>
              <h3>BACHELOR OF COMPUTER APPLICATION (BCA)</h3>
            </div>
            <div className='flex items-center gap-4 mt-4'>
              <FaRegBuilding className='text-2xl'/>
              <p>BON Maharaj Institute, Mathura</p>
            </div>
            <div className='flex items-center gap-4 mt-4'>
              <MdOutlineCalendarToday className='text-2xl'/>
            <p>2015-2018</p>
            </div>
          </div>
          <div className='bg-gradient-to-br from-[var(--accent-dark)] via-[var(--accent-dark)] to-[var(--accent-gradient2)] p-8 rounded-2xl'>
              <div className='flex items-center gap-10'>
                <h3 className='text-[100px] font-bold'>05</h3>
                <p className='text-4xl font-bold'>Years Of <br />Experience</p>
              </div>
              <p>The journey that built my technical expertise and prepared me for real-world development.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education