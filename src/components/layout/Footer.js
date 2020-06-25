import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <h6>
        <i class="far fa-copyright"></i> Cha Alexander{" "}
        <Link to="https://github.com/chaalexander " target="_blank">
          <i class="fab fa-github"></i>
        </Link>{" "}
        <Link to="https://www.linkedin.com/in/cha-alexander" target="_blank">
          <i class="fab fa-linkedin"></i>
        </Link>
      </h6>
    </div>
  );
}
