import React, { useState, useEffect } from "react";
import SessionApi from "../api/sessionsApi";
import { useHistory } from "react-router-dom";
import { Table } from "reactstrap";

/* list of projects pulled from backend */

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  let history = useHistory();
  useEffect(() => {
    async function getAllProjects() {
      let response = await SessionApi.getProjects("/projects");
      setProjects(response);
    }

    getAllProjects();
  }, []);

  const handleProjectSelect = (id) => {
    history.push(`/projects/${id}`);
  };

  // const handleUpdate = (e, id) => {
  //   e.stopPropagation();
  //   history.push(`/projects/${id}/update`);
  // };
  return (
    <div className="container">
      <div className="list-group">
        <Table className=" table-hover">
          <thead>
            <tr className="bg-primary">
              <th scope="col">Title</th>
              <th scope="col">Project Name</th>
              <th scope="col">Project Description</th>
              <th scope="col">Music Link</th>
            </tr>
          </thead>

          <tbody>
            {projects &&
              projects.map((project) => {
                return (
                  <tr
                    onClick={() => handleProjectSelect(project.id)}
                    key={project.id}
                  >
                    <td>{project.title}</td>
                    <td>{project.project_name}</td>
                    <td>{project.project_description}</td>
                    <td>
                      <a href={project.music_link}>{project.music_link}</a>
                    </td>
                    {/* <button onClick={(e) => handleUpdate(e, project.id)}>
                      Update
                    </button> */}
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ProjectList;
