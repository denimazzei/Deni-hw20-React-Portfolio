import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <Footer className="footer text-center my-auto py-auto">
      <div id="social-icons">
        <div>
          <SocialIcon
            url="https://github.com/denimazzei"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div>
          <SocialIcon
            url="https://www.linkedin.com/in/deni-mazzei/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
        <div>
          <SocialIcon
            url="https://deni-8082.medium.com/"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </Footer>
  );
}
