import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <p className="footer-links">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/projects">Projects</Link>
          </p>
          <p className="footer-company-name">SESSIONS </p>
          <p />
        </div>
        <Link to="/signup" className="btn btn-dark">
          Post Project
        </Link>
      </footer>
      <footer id="main-footer">
        <p>SESSIONS © 2021 all rights reserverd</p>
      </footer>
    </div>
  );
};

export default Footer;
