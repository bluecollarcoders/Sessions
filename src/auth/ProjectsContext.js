import React, { useState, createContext } from "react";

export const ProjectsContext = createContext();

export const ProjectsContextProvider = (props) => {
  const [projects, setProjects] = useState([]);
  const [selectedProjects, setSelectedProjects] = useState(null);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        addProject,
        selectedProjects,
        setSelectedProjects,
      }}
    >
      {props.children}
    </ProjectsContext.Provider>
  );
};
