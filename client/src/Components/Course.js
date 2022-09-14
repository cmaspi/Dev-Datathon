import React from "react";
import { useLocation } from "react-router-dom";
import Reviews from "./Reviews";
import Summary from "./Summary";

const Course = () => {
  const location = useLocation();
  console.log(location);

  console.log("course.js pe hai");

  return (
    <>
      <Summary courseId={location.state.courseId} />
      <br />
      <h3>Reviews</h3>
      <Reviews courseId={location.state.courseId} />
    </>
  );
};

export default Course;
