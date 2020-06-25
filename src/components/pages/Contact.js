import React from 'react'
import { Link } from "react-router-dom";

export default function Contact() {
    return (
        
    <div className="container" id="contact">

      <h1 className="me"> Contact me</h1>
      <ul className="list-unstyled">

        <Link to="https://github.com/chaalexander " target="_blank"><img src="assets/images/github.png" className="icon"
            alt="github"></Link>
        <Link to="https://www.linkedin.com/in/cha-alexander" target="_blank"><img src="assets/images/linkedin.png"
            className="icon" alt="linkedin"></Link>
       <Link to="mailto:charlennep@gmail.com"><img src="assets/images/gmail.png" className="icon" alt="gmail"></Link>
       <Link to="assets/resume/Resume.pdf" target="_blank"><img src="assets/images/resume.png" className="icon"
            alt="resume"></Link>
      </ul>
      
     
    </div>
    )
}
