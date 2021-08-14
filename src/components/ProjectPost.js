import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
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
  const { id } = useParams();
  const history = useHistory();
  const intialState = {
    title: "",
    project_name: "",
    project_description: "",
    music_link: "",
    id: id,
  };

  const [formData, setFormData] = useState(intialState);

  const handleChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    console.log(handleSubmit);
    e.preventDefault();
    try {
      await SessionApi.postProjects(formData);

      history.push(`/projects`);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container col-md-10 offset-md-3 col-lg-4 offset-lg-4">
      {/* <h3 className="mb-3" style={{ paddingTop: "2rem", alignItems: "center" }}>
        Project Post Form
      </h3> */}

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
                    id="project_name"
                    name="project_name"
                    value={formData.project_name}
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
                  id="project_description"
                  name="project_description"
                  value={formData.project_description}
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
                  id="music_link"
                  name="music_link"
                  value={formData.music_link}
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
