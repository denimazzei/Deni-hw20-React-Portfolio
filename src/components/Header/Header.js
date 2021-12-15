import React from "react";
import Navigation from "../Navbar/Navigation";

export default function Header(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <Container fluid className="p-0">
      <Row className="p-0">
        <Col className="text-center p-0" md={12}>
          <div className="jumbotron-fluid mt-2">
            <h2 className="display-2 mb-0 pb-0">Deni Mazzei</h2>
            <p className="lead pt-0 mt-0">Full Stack Developer</p>
          </div>
        </Col>
        <header>
          <div></div>
          <div>
            <Navigation
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            ></Navigation>
          </div>
        </header>
      </Row>
    </Container>
  );
}
