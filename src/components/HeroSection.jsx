import React from "react";
import deepakImg from '../assets/deepak.png'
import dot from '../assets/icon-sub-heading.svg'
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-dark)] text-white py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={dot} alt="" />
            <h1 className="text-sm font-semibold">Your Vision, My Development Expertise</h1>
          </div>
          <h1 className="text-4xl textbg md:text-6xl max-sm:text-3xl font-semibold leading-tight md:mb-3">
            I'm Deepak Kumar,
          </h1>
          <h1 className="text-3xl md:text-4xl max-sm:text-2xl font-semibold mb-6">
           [Frontend Developer]
          </h1>
          <p className="text-gray-300 mb-6">
            "Hi, I'm Deepak, a passionate Frontend Developer. I specialize in building modern, responsive user interfaces with a focus on performance, accessibility, and pixel-perfect precision—creating seamless web experiences that blend design with technology."
          </p>
          <div className="flex gap-4">
            <button className="gradient text-[var(--accent-dark)] px-6 py-3 rounded-full font-medium">Let's Talk</button>
            <button className="border border-white px-6 py-3 rounded-full font-medium">Watch Intro</button>
          </div>
        </div>
        <div className="flex justify-center md:justify-center">
          <img src={deepakImg} alt="James" className="w-64 md:w-80 border rounded-full border-[var(--accent-gradient2)]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;