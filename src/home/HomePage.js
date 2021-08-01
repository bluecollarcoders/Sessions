import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";

const HomePage = () => {
  const { currentUser } = useContext(UserContext);
  console.debug("Homepage", "currentUser=", currentUser);
  return (
    <div>
      <header>
        <div id="showcase">
          <div className="containers">
            <div className="showcase-content">
              <h1>
                <span className="text-primarys">GETTING</span> THE RIGHT SOUND
                IS JUST A CLICK AWAY
              </h1>
              <p className="leads">QUALITY TALENT FOR INDIE ARTIST</p>
              {currentUser ? (
                <h2>
                  Welcom Back, {currentUser.firstname || currentUser.name}
                </h2>
              ) : (
                <p>
                  <Link className="btn btn-dark" to="/login">
                    Log in
                  </Link>
                  <Link className="btn btn-dark" to="/signup">
                    POST PROJECT
                  </Link>
                </p>
              )}
            </div>
          </div>
        </div>
      </header>

      <section id="home-info" className="bg-light">
        <div className="info-img" />
        <div className="info-content">
          <h2>
            <span className="text-primarys">VIEW</span> PROJECTS
          </h2>
          <p>
            Producers find an artist whose project you can contribute too.
            Finding the right colloaboration has just become interest.
          </p>
          <button href="#" className="btn btn-dark">
            View Projects
          </button>
        </div>
      </section>
      <section className="row">
        <div className="column">
          <img src="/images/pexels-cottonbro-4088014.jpg" />
          <img src="/images/pexels-kevin-bidwell-3925035.jpg" />
        </div>
        <div className="column">
          <img src="/images/pexels-papa-yaw-2531728.jpg" />
          <img src="/images/pexels-starter-cam-4387718.jpg" />
        </div>
      </section>
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

export default HomePage;
