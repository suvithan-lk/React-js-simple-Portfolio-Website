import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-indigo-600">A.Suvithan.lk</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-700 hover:text-indigo-600 transition font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="text-gray-700 hover:text-indigo-600 focus:outline-none"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-indigo-600">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-indigo-600"
          >
            <X size={28} />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col p-4 space-y-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-700 hover:text-indigo-600 transition font-medium text-lg"
              onClick={() => setIsOpen(false)} // Close sidebar when clicking link
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-10 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
