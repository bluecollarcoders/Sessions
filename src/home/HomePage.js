import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../auth/UserContext";
import Footer from "../components/Footer";

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
                  Welcome Back, {currentUser.firstname || currentUser.name}
                </h2>
              ) : (
                <p>
                  <br />
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
          <Link to="/projects" className="btn btn-dark">
            View Projects
          </Link>
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
      <Footer />
    </div>
  );
};

export default HomePage;
