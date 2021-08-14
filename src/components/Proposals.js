import React from "react";

const Proposals = ({ proposals }) => {
  return (
    <div className="row row-cols-3 mb-2">
      {proposals.map((proposal) => {
        return (
          <div
            key={proposal.id}
            className="card text-white bg-primary mb-3 mr-4"
            style={{ maxWidth: "30%", marginLeft: "8rem" }}
          >
            <div
              className="card-header d-flex justify-content-between"
              style={{ fontSize: "20px", fontFamily: "sans-serif" }}
            >
              <span>{proposal.producer_name}</span>
            </div>
            <div className="card-body">
              <p className="card-text">{proposal.proposal_details}</p>
              <p className="card-text">{proposal.contact}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Proposals;
