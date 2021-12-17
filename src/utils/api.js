import React from "react";
import { Home } from "../components/Home/home";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";
import { Projects } from "../components/Portfolio/Projects";
import { Route, Switch, Redirect } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </div>
  );
};
