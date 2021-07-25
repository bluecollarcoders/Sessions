import React, { useState, useContext } from "react";
import SessionApi from "../api/sessionsApi";
import { ProjectsContext } from "../auth/ProjectsContext";
import { useHistory } from "react-router-dom";

/* list of projects pulled from backend */

function ProjectList() {
  return (
    <div className="list-group">
      <thead>
        <tr className="bg-primary">
          <th scope="col">Title</th>
          <th scope="col">Project Name</th>
          <th scope="col">Project Description</th>
          <th scope="col">Music Link</th>
        </tr>
      </thead>
    </div>
  );
}

export default ProjectList;
