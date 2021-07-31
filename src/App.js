import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import LoginForm from "./auth/LoginForm";
import { UserContext } from "./auth/UserContext";
import ProjectList from "./components/ProjectList";
import ProjectPost from "./components/ProjectPost";

const App = () => {
  return (
    <ProjectList />

    // <BrowserRouter>
    //   <UserContext.Provider>
    //     {/* user context
    //     uses acrosss site

    //     */}
    //   </UserContext.Provider>
    //   <ProjectsContext.Provider>
    //     {
    //       /*
    //     uses across project pages

    //     */
    //       <ProjectList></ProjectList>
    //     }
    //   </ProjectsContext.Provider>
    // </BrowserRouter>
  );
};

export default App;
