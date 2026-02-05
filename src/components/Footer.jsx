import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footerbg text-black py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-5 items-center">
          <div>
            <h4 className="font-semibold text-3xl mb-3">Follow Me On</h4>
            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/tdeepak-kumar/" className="text-2xl hover:text-[var(--accent-hover)]"><FaLinkedin/></a>
              <a href="https://www.instagram.com/tdeepak_sanatani/" className="text-2xl hover:text-[var(--accent-hover)]"><FaInstagram/></a>
              <a href="https://x.com/Deepakt97023890" className="text-2xl hover:text-[var(--accent-hover)]"><FaXTwitter /></a>
              <a href="https://www.facebook.com/tdeepak383/" className="text-2xl hover:text-[var(--accent-hover)]"><FaFacebook/></a>              
            </div>
          </div>
          <div>
            <p className="text-sm">© {new Date().getFullYear()} All rights reserved | Designed by Deepak.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;