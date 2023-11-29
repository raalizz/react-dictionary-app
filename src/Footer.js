import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project is{" "}
        <a
          className="githubLink"
          href="https://github.com/raalizz/react-dictionary-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced{" "}
        </a>
        and was coded by{" "}
        <a
          className="linkedinProfile"
          href="https://www.linkedin.com/in/raghdaalizz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Raghda Alizz Al-Shaikhli
        </a>
      </p>
    </div>
  );
}
