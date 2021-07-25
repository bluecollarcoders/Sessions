import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import jwt from "jsonwebtoken";
import LoginForm from "./auth/LoginForm";
import { ProjectsContext } from "./auth/ProjectsContext";
import { UserContext } from "./auth/UserContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserContext.Provider>
        {/* user context
        uses acrosss site

        
        
        */}
      </UserContext.Provider>
      <ProjectsContext.Provider>
        {/* 
        uses across project pages
        
        */}
      </ProjectsContext.Provider>
    </BrowserRouter>
  );
};

export default App;
