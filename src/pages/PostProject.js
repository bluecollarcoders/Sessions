import React from "react";
import Footer from "../components/Footer";
import ProjectPost from "../components/ProjectPost";

export const PostProject = () => {
  return (
    <div>
      <h1
        className="font-weight-light display-1 text-center"
        style={{ marginTop: "4rem" }}
      >
        Post A Project
      </h1>

      <ProjectPost />
      <Footer />
    </div>
  );
};

export default PostProject;
