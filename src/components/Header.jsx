import React, { useEffect, useState } from "react";

const Header = () => {

  const navItems = [
    {label: "Home", id: "home"},
    {label: "Projects", id: "projects"},
    {label: "Skills", id: "skills"},
    {label: "Education", id: "education"},
    {label: "Work Experience", id: "work-experience"},
    {label: "Contact", id: "contact"}
  ]

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = 50; // height of header
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header className="bg-[var(--accent-primary)] text-white py-5 px-6 lg:px-16 sticky top-0 w-full z-50 shadow-lg shadow-[var(--accent-dark)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {/* <a href="/" className="hover:text-[var(--accent-gradient2)] transition">Home</a> */}
          {navItems.map((item, index) => (
            <button
            key={index}
            className="hover:text-[var(--accent-gradient2)] transition-all"
            onClick={() => scrollToSection(item.id)}
            >{item.label}</button>
          ))}
        </nav>
        <div className="md:block">
          <a href="/portfolio/Resume.pdf" target="_blank" className="px-5 py-3 rounded-full font-medium bg-gradient-to-r hover:bg-gradient-to-l from-[var(--accent-gradient1)] to-[var(--accent-gradient2)] text-[var(--accent-primary)] transition-all delay-500 duration-500">
            Download CV
          </a>
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
        <div className="md:hidden bg-[var(--accent-primary)] flex flex-col py-4 px-6 space-y-4 text-sm font-medium">
          {/* <a href="/" className="hover:text-[var(--accent-gradient2)] text-center transition-all">Home</a> */}
          {navItems.map((item, index) => (
            <button
            key={index}
            className="hover:text-[var(--accent-gradient2)] transition-all"
            onClick={() => scrollToSection(item.id)}
            >{item.label}</button>
          ))}
          <button className="mt-4 w-full bg-gradient-to-r hover:bg-gradient-to-l from-[var(--accent-gradient1)] to-[var(--accent-gradient2)] text-[var(--accent-dark)] px-5 py-2 rounded-full font-medium transition-all">
            Let's Talk
          </button>
        </div>
      )}
    </header>
  );
};


export default Header