import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/images/icons/github.png";
import linkedin from "../assets/images/icons/linkedin.png";
import gmail from "../assets/images/icons/gmail.png";
import resume from "../assets/resume.pdf";
import resumeIcon from "../assets/images/icons/resume.png";

export default function Contact() {
  return (
    <div className="container" id="contact">
      <h1 className="me"> Contact me</h1>
      <ul className="list-unstyled">
        <a href="https://github.com/chaalexander " target="_blank">
          <img src={github} className="icon" alt="github" />
        </a>
        <a href="https://www.edin.com/in/cha-alexander" target="_blank">
          <img src={linkedin} className="icon" alt="linkedin" />
        </a>
        <a href="mailto:charlennep@gmail.com">
          <img src={gmail} className="icon" alt="gmail" />
        </a>
        <Link to={resume} target="_blank">
          <img className="icon" alt="resume" src={resumeIcon} />
        </Link>
      </ul>
    </div>
  );
}
