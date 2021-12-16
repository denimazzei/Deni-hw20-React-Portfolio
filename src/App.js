import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/About";
import Projects from "./components/Portfolio/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Routes exact path="/" component={Home} />
        <Routes exact path="/about" component={About} />
        <Routes exact path="/projects" component={Projects} />
        <Routes exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
