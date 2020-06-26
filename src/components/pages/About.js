import React from "react";
// import { Link } from "react-router-dom";
import "./App.css";

function About() {
    return (
<div className="container" id="about">
<div className="media w3-black">
      <img src="public/assets/images/profile.png" className="img" alt="Profile Picture">
<div className="media-body">
        <h2 className="abt">About </h2>
        <p className="aboutme"> Brazilian full Stack Web Developer with a background in sales, fashion and customer service providing strong
        problem-solving skills with a keen eye for aesthetics and presentation. An excellent communicator and
        collaborator who works well in team-based projects and independently with very strong interpersonal
        skills. Effectively leverage interest in solving complex problems by contributing as a part of a fast paced,
        quality-driven team.
        </p>
        <p className="inconabt"><a href="https://github.com/chaalexander " target="_blank"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/cha-alexander" target="_blank"><i className="fab fa-linkedin"></i></a></p>
</div>
</div>
</div>)
}

export default About;
