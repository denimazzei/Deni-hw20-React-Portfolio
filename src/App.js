import React, { useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Portfolio/Projects";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const routes = [
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/",
    component: Home,
  },
];

export default routes;
