import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";

const About = () => {
  return (
    <section id="about" className="about bg-gray-900 text-white py-30 px-10 lg:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Image */}
        <div className="flex justify-center">
          <img
            src={assets.suvi}
            alt="Suvithan"
            className="my-pic rounded-2xl shadow-lg border-2 border-gray-700 hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right side - Content */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Hi, I’m <span className="text-indigo-400 font-semibold">Suvithan</span>,  
            a passionate <span className="text-indigo-300">React.js Frontend Developer</span> 
            who loves building responsive, user-friendly, and modern web applications.  
            My focus is on creating clean UI designs with seamless user experiences.
          </p>
          <p className="text-gray-400 leading-relaxed">
            With expertise in React.js, TailwindCSS, and JavaScript,  
            I enjoy transforming ideas into real-world projects that deliver value.  
            Always eager to learn, improve, and collaborate on innovative solutions.
          </p>
          <div className="mt-6">
            <a
              href="#projects"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-md"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
