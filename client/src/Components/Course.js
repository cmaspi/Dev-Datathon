import React from "react";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
import Summary from "./Summary";

const Course = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Summary>courseId={location.state.courseId}</Summary>
    </>
  );
};

export default Course;
