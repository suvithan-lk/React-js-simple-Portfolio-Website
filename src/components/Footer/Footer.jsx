import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-gray-300 py-10 px-6 lg:px-20 relative">
    <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500"></div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Suvithan</h2>
          <p className="text-sm text-gray-400">
            React.js Frontend Developer passionate about creating modern and responsive web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-indigo-400">About</a></li>
            <li><a href="#portfolio" className="hover:text-indigo-400">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-indigo-400">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-indigo-400">
              <FaLinkedin />
            </a>
            <a href="mailto:youremail@gmail.com" className="hover:text-indigo-400">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Suvithan. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
