import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Portfolio/Projects";
import Home from "./components/Home/home";

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
