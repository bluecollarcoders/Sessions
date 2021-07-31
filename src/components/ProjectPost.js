import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SessionApi from "../api/sessionsApi";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
} from "reactstrap";

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
    <div className="container col-md-10 offset-md-3 col-lg-4 offset-lg-4">
      <h3 className="mb-3" style={{ paddingTop: "2rem", alignItems: "center" }}>
        Project Post Form
      </h3>

      <Card style={{ padding: "20px", paddingRight: "15px" }}>
        <div className="card-body">
          <Form onSubmit={handleSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label htmlFor="Title">Title</Label>
                  <Input
                    id="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="Title"
                  />
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label htmlFor="ProjectName">ProjectName</Label>
                  <Input
                    id="projectName"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    placeholder="projectName"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Col md={6}>
              <FormGroup>
                <Label htmlFor="projectDescription">Project Description</Label>
                <Input
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="projectDescription"
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label htmlFor="musicLink">Music Link</Label>
                <Input
                  id="musicLink"
                  name="musicLink"
                  value={formData.musicLink}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  placeholder="musicLink"
                />
              </FormGroup>
            </Col>

            <Button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "10px" }}
            >
              Add
            </Button>
          </Form>
        </div>
      </Card>
    </div>
  );
}

export default ProjectPost;
