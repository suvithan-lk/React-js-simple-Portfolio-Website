import React from "react";
import Navbar from "./components/Navbar/Navbar"
import Hero from "./Hero/Hero"
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
