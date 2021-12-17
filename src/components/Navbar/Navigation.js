import React from "react";
import { Home } from "../components/Home/home";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";
import { Projects } from "../components/Portfolio/Projects";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white-800 top-0 z-10 font-mono">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0 font-mono">
          <a href="/about" className="ml-3 text-xl">
            <img src="./profile_image.png" alt="" className="" />
          </a>
        </a>
        <Router>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center focus:outline-none hover:bg-gray-700 rounded">
            <Link to="/home" className="mr-5 hover:text-white">
              Home
            </Link>
            <Link to="/about" className="mr-5 hover:text-white">
              About
            </Link>
            <Link to="/projects" className="mr-5 hover:text-white">
              Projects
            </Link>
            <Link to="/contact" className="mr-5 hover:text-white">
              Contact
            </Link>
          </nav>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
      </div>
    </header>
  );
}
