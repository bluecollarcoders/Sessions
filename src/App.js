import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import LoginForm from "./auth/LoginForm";
import { UserContext } from "./auth/UserContext";
import ProjectList from "./components/ProjectList";
import ProjectPost from "./components/ProjectPost";
import PostProject from "./pages/PostProject";
import DetailPage from "./pages/DetailPage";
import { Projects } from "./pages/Projects";
import {
  ProjectsContext,
  ProjectsContextProvider,
} from "./auth/ProjectsContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/projects/post" component={PostProject} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={DetailPage} />
      </Switch>
    </Router>
  );
};

export default App;
