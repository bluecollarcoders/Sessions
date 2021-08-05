import React from "react";
import Footer from "../components/Footer";
import ProjectList from "../components/ProjectList";

export const Projects = () => {
  return (
    <div>
      <h1 className="font-weight-light display-1 text-center">Project List</h1>
      <ProjectList />
      <Footer />
    </div>
  );
};
