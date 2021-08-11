import React, { useState } from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";
import { Button, Label, Form } from "reactstrap";
import SessionApi from "../api/sessionsApi";

const AddProposal = () => {
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  const history = useHistory();
  console.log(id);
  console.log(formData);

  const intialState = {
    producer_name: "",
    proposal_details: "",
    contact: "",
    projects_id: id,
    id: "",
  };

  const [formData, setFormData] = useState(intialState);

  const [errors, setErrors] = useState([]);

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
      await SessionApi.submitProposal(id, formData);

      history.push(`/projects`);
      // history.push(location.pathname);
    } catch (err) {
      setErrors(err);
      console.log(err);
    }
  };

  return (
    <div style={{ marginLeft: "7rem" }} className="mb-2 container">
      {errors.map((error) => {
        return <div>{error}</div>;
      })}
      <Form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-8">
            <Label htmlFor="Producer Name">Producer Name</Label>
            <input
              value={formData.producer_name}
              onChange={handleChange}
              id="producer_name"
              name="producer_name"
              placeholder="producer"
              type="text"
              className="form-control"
            />
            <Label htmlFor="Contact">Contact</Label>
            <input
              value={formData.contact}
              onChange={handleChange}
              id="contact"
              name="contact"
              placeholder="contact"
              type="text"
              className="form-control"
            />
            <Label htmlFor="Details">Proposal Details</Label>
            <textarea
              value={formData.proposal_details}
              onChange={handleChange}
              id="proposal_details"
              name="proposal_details"
              className="form-control"
            ></textarea>
          </div>
          <br></br>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddProposal;
