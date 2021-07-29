import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SessionApi from "../api/sessionsApi";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

function ProjectPost() {
  const history = useHistory();
  const intialState = {
    title: "",
    projectName: "",
    projectDescription: "",
    musicLink: "",
  };

  const [formData, setFormData] = useState(intialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await SessionApi.postProjects("projects", {
        intialState,
      });
      formData(response);
      history.push(`/projects`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="PostForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Title">Title</label>
        <input
          id="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Title"
        />
        <label htmlFor="ProjectName">ProjectName</label>
        <input
          id="projectName"
          name="projectName"
          value={formData.projectName}
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="projectName"
        />
        <label htmlFor="projectDescription">Project Description</label>
        <input
          id="projectDescription"
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="projectDescription"
        />
        <label htmlFor="musicLink">Music Link</label>
        <input
          id="musicLink"
          name="musicLink"
          value={formData.musicLink}
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="musicLink"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default ProjectPost;
