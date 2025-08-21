import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  // Portfolio data (you can replace with your real projects)
  const projects = [
    {
      id: 1,
      title: "Task Manager App",
      description: "A full-stack app to manage tasks with React & Laravel.",
      image: "https://via.placeholder.com/400x250",
      link: "#",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description: "Responsive shopping platform using React & Tailwind.",
      image: "https://via.placeholder.com/400x250",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Personal portfolio built with React.js & TailwindCSS.",
      image: "https://via.placeholder.com/400x250",
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="portfolio bg-gray-900 text-white py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">My Portfolio</h2>
        <p className="text-gray-400 mb-12">
          A showcase of some of my projects, highlighting my work with React.js and modern web technologies.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="portfolio-card bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
