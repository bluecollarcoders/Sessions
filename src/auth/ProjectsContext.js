import React, { useState, createContext } from "react";

export const ProjectsContext = createContext();

export const ProjectsContextProvider = (props) => {
  const [projects, setProjects] = useState([]);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {props.childeren}
    </ProjectsContext.Provider>
  );
};
