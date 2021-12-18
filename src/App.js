import React from "react";

import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navigation";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/portfolio/Projects";
import Contact from "./components/contact/Contact";
import Home from "./components/Home/home";

function App() {
  return (
    <div id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <Navbar />

          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black font-mono">
            Hi! I'm Deni.
            <br className="hidden lg:inline-block" />
            I'd love to build your next amazing app!
          </h1>

          <p className="mb-8 leading-relaxed font-mono">
            Check out my past projects and reach out if you'd like to work
            together.
          </p>
        </div>
      </div>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>

      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center"></div>
      <Footer />
    </div>
  );
}

export default App;
