import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import SessionApi from "../api/sessionsApi";
import AddProposal from "../components/AddProposal";
import Footer from "../components/Footer";
import Proposals from "../components/Proposals";

const DetailPage = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    async function getProjectId() {
      let response = await SessionApi.getProjectsById(id);
      console.log(response);
      setDetail(response);
    }
    getProjectId();
  }, [id]);
  return (
    <div>
      {detail && (
        <React.Fragment>
          <h1
            style={{ paddingTop: "4rem", marginBottom: "5rem" }}
            className="text-center display-1"
            key={detail}
          >
            {detail.project_name}
          </h1>
          <div className="mt-3">
            {detail.proposals && <Proposals proposals={detail.proposals} />}
          </div>

          <AddProposal />
          <Footer />
        </React.Fragment>
      )}
    </div>
  );
};

export default DetailPage;
