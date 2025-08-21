import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="bg-gray-900 text-white">
         <div className="hero relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900">
      <div className="relative isolate px-6 lg:px-5">
        {/* Top Gradient Shape */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div className="hero-shape-top relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-400 via-purple-500 to-pink-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]" />
        </div>

        {/* Hero Content */}
        <div className="mx-auto max-w-3xl py-35 sm:py-48 lg:py-50 text-center">
          {/* Announcement Badge */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-200 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition">
              🚀 I'm 
            </div>
          </div>

          {/* Hero Heading */}
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl drop-shadow-lg">
            Anantharasa <span className="text-indigo-400">Suvithan</span>
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8">
           Frontend Developer specializing in React.js, focused on turning ideas into seamless digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-xl backdrop-blur-md bg-indigo-500/80 px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-400/80 transition"
            >
              Get Started
            </a>
            <a
              href="#"
              className="text-sm font-semibold text-white hover:text-indigo-400 transition"
            >
              Learn More →
            </a>
          </div>
        </div>

        {/* Bottom Gradient Shape */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div className="hero-shape-bottom relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-400 via-purple-500 to-pink-500 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]" />
        </div>
      </div>
    </div>

    </section>
   
  );
};

export default Hero;
