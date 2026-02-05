import React from 'react'
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import dot from '../assets/icon-sub-heading.svg'
import { motion } from "framer-motion";

function Education() {
  const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
  return (
    <section className="bg-[var(--accent-primary)] text-white py-20 px-6 md:px-16" id='education'>
      <motion.div
        className="max-w-7xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-2 mb-3"
        >
          <img src={dot} alt="" />
          <h1 className="text-sm font-semibold">
            The foundation behind my technical journey
          </h1>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold mb-6 textbg"
        >
          My Education
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mb-12 max-w-xl"
        >
          A strong academic foundation that shaped my problem-solving mindset and passion for technology.
        </motion.p>
        <motion.div
          variants={container}
          className='grid md:grid-cols-2 gap-10'
        >
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className='bg-[var(--accent-dark)] p-8 rounded-2xl'
          >
            <div className='flex items-center gap-4 mt-4'>
              <div className="text-black transition-all duration-300 bg-gradient-to-r  hover:bg-gradient-to-l from-[var(--accent-gradient1)] to-[var(--accent-gradient2)] text-[var(--accent-dark)] p-3 rounded-full hover:rotate-45">
                  <LuGraduationCap  className='text-2xl'/>
                </div>
              
              <h3>BACHELOR OF COMPUTER APPLICATION (BCA)</h3>
            </div>
            <div className='flex items-center gap-4 mt-4'>
              <div className="text-black transition-all duration-300 bg-gradient-to-r  hover:bg-gradient-to-l from-[var(--accent-gradient1)] to-[var(--accent-gradient2)] text-[var(--accent-dark)] p-3 rounded-full hover:rotate-45">
              <FaRegBuilding className='text-2xl'/>
              </div>
              <p>BON Maharaj Institute, Mathura</p>
            </div>
            <div className='flex items-center gap-4 mt-4'>
              <div className="text-black transition-all duration-300 bg-gradient-to-r  hover:bg-gradient-to-l from-[var(--accent-gradient1)] to-[var(--accent-gradient2)] text-[var(--accent-dark)] p-3 rounded-full hover:rotate-45">
              <MdOutlineCalendarToday className='text-2xl'/>
              </div>
            <p>2015-2018</p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className='bg-gradient-to-br from-[var(--accent-dark)] via-[var(--accent-dark)] to-[var(--accent-gradient2)] p-8 rounded-2xl'
          >
              <div className='lg:flex items-center gap-10'>
                <h3 className='text-[100px] font-bold textbg'>05</h3>
                <p className='text-4xl font-bold lg:mb-0 mb-5'>Years Of <br />Experience</p>
              </div>
              <p>The journey that built my technical expertise and prepared me for real-world development.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Education