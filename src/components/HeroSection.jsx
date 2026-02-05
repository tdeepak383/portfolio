import React from "react";
import deepakImg from '../assets/deepak.png'
import dot from '../assets/icon-sub-heading.svg'
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-dark)] text-white py-20 px-6 lg:px-16"
      id="home"
    >
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT SIDE */}
        <motion.div variants={slideLeft}>

          <motion.div
            className="flex items-center gap-2 mb-3"
            variants={fadeUp}
          >
            <img src={dot} alt="" />
            <h1 className="text-sm font-semibold">
              Your Vision, My Development Expertise
            </h1>
          </motion.div>
          <motion.div variants={fadeUp}>
            <h1 className="text-4xl textbg md:text-6xl max-sm:text-3xl font-semibold leading-tight md:mb-3">
            I'm Deepak Kumar,
          </h1>

          <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
            [{" "}
            <span>
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React Developer",
                  2000,
                  "UI Specialist",
                  2000,
                  "JavaScript Expert",
                  2000,
                ]}
                speed={20}
                deletionSpeed={65}
                repeat={Infinity}
                cursor={true}
                style={{ display: "inline-block" }}
              />
            </span>
            {" "}]
          </h1>
          </motion.div>
          

          <motion.p
            variants={fadeUp}
            className="text-gray-300 mb-6"
          >
            "Hi, I'm Deepak, a passionate Frontend Developer. I specialize in
            building modern, responsive user interfaces with a focus on
            performance, accessibility, and pixel-perfect precision—creating
            seamless web experiences that blend design with technology."
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r hover:bg-gradient-to-l from-[var(--accent-gradient1)] to-[var(--accent-gradient2)] text-[var(--accent-dark)] px-6 py-3 rounded-full font-medium"
            >
              Let's Talk
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="card-border-hover px-5 rounded-full font-medium flex items-center gap-3"
            >
              <GoPlay className="text-4xl text-[var(--accent-gradient1)]" />
              Watch Intro
            </motion.button>
          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={slideRight}
          className="flex justify-center"
        >
          <motion.img
            src={deepakImg}
            alt="Deepak"
            className="w-64 md:w-96 mx-auto border rounded-full border-[var(--accent-gradient1)]"
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;