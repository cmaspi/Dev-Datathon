import React from "react";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
import Summary from "./Summary";

const Course = () => {
  const location = useLocation();
  console.log(location);

  console.log("course.js pe hai");

  return (
    <>
      <Summary courseId={location.state.courseId} />
    </>
  );
};

export default Course;
