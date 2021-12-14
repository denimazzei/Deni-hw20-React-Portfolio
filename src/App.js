import React, { useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Portfolio/Projects";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [currentTab, setCurrentTab] = useState("");

  const renderTab = () => {
    switch (currentTab) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };
  return (
    <div>
      <Container fluid className="p-0">
        <Header
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          className="p-0 m-0"
        ></Header>
      </Container>
      <Container fluid>
        <main>{renderTab()}</main>
      </Container>
      <Container fluid>
        <Footer />
      </Container>
    </div>
  );
}
