import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <Container className="footer text-center my-auto py-auto">
      <Row id="social-icons">
        <Col>
          <SocialIcon
            url="https://github.com/denimazzei"
            target="_blank"
            rel="noopener noreferrer"
          />
        </Col>
        <Col>
          <SocialIcon
            url="https://www.linkedin.com/in/deni-mazzei/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </Col>
        <Col>
          <SocialIcon
            url="https://deni-8082.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </Col>
      </Row>
    </Container>
  );
}
