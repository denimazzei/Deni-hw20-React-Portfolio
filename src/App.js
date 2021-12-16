import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/Navbar/Navigation";
import About from "./components/About/About";
import Projects from "./components/Portfolio/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Deni.
            <br className="hidden lg:inline-block" />
            I'd love to build your next amazing app!
          </h1>
          <p className="mb-8 leading-relaxed">
            Check out my past projects and reach out if you'd like to work
            together.
          </p>
        </div>
      </div>

      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes exact path="/" component={About} />
          <Routes exact path="/about" component={About} />
          <Routes exact path="/projects" component={Projects} />
          <Routes exact path="/contact" component={Contact} />
        </div>
      </Router>
    </section>
  );
}

export default App;
