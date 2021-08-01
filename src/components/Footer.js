import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <p className="footer-links">
            <a href="#">Login</a>
            <a href="#">Signup</a>
            <a href="#">Projects</a>
          </p>
          <p className="footer-company-name">SESSIONS </p>
          <p />
        </div>
        <button className="btn btn-dark">Post Project</button>
      </footer>
      <footer id="main-footer">
        <p>SESSIONS © 2021 all rights reserverd</p>
      </footer>
    </div>
  );
};

export default Footer;
