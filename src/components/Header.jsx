import React, { useState } from "react";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="bg-[var(--accent-primary)] text-white py-4 px-6 lg:px-16 sticky top-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" className="hover:text-[var(--accent-gradient2)] transition">Home</a>
          <a href="#projects" className="hover:text-[var(--accent-gradient2)] transition">Projects</a>
          <a href="#skills" className="hover:text-[var(--accent-gradient2)] transition">Skills</a>
          <a href="#education" className="hover:text-[var(--accent-gradient2)] transition">Education</a>
          <a href="#work" className="hover:text-[var(--accent-gradient2)] transition">Work Experience</a>
          <a href="#contact" className="hover:text-[var(--accent-gradient2)] transition">Contact Me</a>
        </nav>
        <div className="md:block">
          <button className="gradient px-5 py-2 rounded-full font-medium text-[var(--accent-primary)] transition">
            Download CV
          </button>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button (if required) */}
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
       {isOpen && (
        <div className="md:hidden bg-[var(--accent-primary)] py-4 px-6 space-y-4 text-sm font-medium">
          <a href="#home" className="block hover:text-[var(--accent-gradient2)] transition">Home</a>
          <a href="#services" className="block hover:text-[var(--accent-gradient2)] transition">Services</a>
          <a href="#about" className="block hover:text-[var(--accent-gradient2)] transition">About</a>
          <a href="#projects" className="block hover:text-[var(--accent-gradient2)] transition">Projects</a>
          <a href="#pricing" className="block hover:text-[var(--accent-gradient2)] transition">Pricing</a>
          <a href="#contact" className="block hover:text-[var(--accent-gradient2)] transition">Contact</a>
          <button className="mt-4 w-full bg-[var(--accent-gradient2)] px-5 py-2 rounded-full font-medium text-white hover:bg-[#059669] transition">
            Let's Talk
          </button>
        </div>
      )}
    </header>
  );
};


export default Header