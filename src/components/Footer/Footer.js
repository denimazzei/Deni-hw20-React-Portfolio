import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer text-center bg-gray-200 my-auto py-auto font-mono">
      <h3>Let's Get Social!</h3>
      <a
        href="https://www.facebook.com/denimazzei/"
        className="facebook social "
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://github.com/denimazzei" className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/deni-mazzei/"
        className="linkedin social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <div class="text-center p-6 bg-gray-200">
        <span>© 2021 Copyright - </span>
        <a class="text-black-600 font-semibold">Deni Mazzei</a>
      </div>
    </div>
  );
}
