import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "../auth/UserContext";
import "../routes-nav/Navigation.css";

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);
  console.debug("Navigation", "currentUser=", currentUser);

  const loggedInNav = () => {
    return (
      <ul>
        <li>
          <NavLink className="nav-link" to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/projectspost">
            ProjectPost
          </NavLink>
        </li>
        <li>
          <Link className="nav-link" to="/" onClick={logout}>
            Log out {currentUser.first_name || currentUser.username}
          </Link>
        </li>
      </ul>
    );
  };

  const loggedOutNav = () => {
    return (
      <ul>
        <li>
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/projects">
            Projects
          </NavLink>
        </li>
      </ul>
    );
  };

  return (
    <nav id="navbar">
      <h1 className="logo">
        <Link
          style={{
            textDecoration: "none",
            fontSize: "20px",
          }}
          to="/"
        >
          SESSIONS
        </Link>
      </h1>

      {currentUser ? loggedInNav() : loggedOutNav()}
    </nav>
  );
}

export default Navigation;
