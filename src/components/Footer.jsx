import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footerbg text-[var(--accent-dark)] py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Deepak Kumar</h3>
          <p className="text-sm">© 2025 All rights reserved. <br/> Designed by Deepak.</p>
        </div>

        <div>
          <h4 className="font-semibold text-xl mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#projects" className="flex items-center gap-2 hover:text-[var(--accent-hover)] transition"><IoMdArrowDropright />Projects</a></li>
            <li><a href="#skills" className="flex items-center gap-2 hover:text-[var(--accent-hover)] transition"><IoMdArrowDropright />Skills</a></li>
            <li><a href="#education" className="flex items-center gap-2 hover:text-[var(--accent-hover)] transition"><IoMdArrowDropright />Education</a></li>
            <li><a href="#work" className="flex items-center gap-2 hover:text-[var(--accent-hover)] transition"><IoMdArrowDropright />Work Experience</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-xl mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#faq" className="flex items-center gap-2 hover:text-[var(--accent-hover)]"><IoMdArrowDropright />FAQ</a></li>
            <li><a href="#contact" className="flex items-center gap-2 hover:text-[var(--accent-hover)]"><IoMdArrowDropright />Contact Us</a></li>
            <li><a href="#privacy" className="flex items-center gap-2 hover:text-[var(--accent-hover)]"><IoMdArrowDropright />Privacy Policy</a></li>
            <li><a href="#terms" className="flex items-center gap-2 hover:text-[var(--accent-hover)]"><IoMdArrowDropright />Terms of Use</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-xl mb-3">Follow Me On</h4>
          <div className="flex gap-4">
            <a href="#" className="text-2xl hover:text-[var(--accent-hover)]"><FaFacebook/></a>
            <a href="#" className="text-2xl hover:text-[var(--accent-hover)]"><FaTwitter/></a>
            <a href="#" className="text-2xl hover:text-[var(--accent-hover)]"><FaLinkedin/></a>
            <a href="#" className="text-2xl hover:text-[var(--accent-hover)]"><FaInstagram/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;