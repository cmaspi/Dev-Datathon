import React from "react";
import { useLocation } from "react-router-dom";
import Reviews from "./Reviews";
import Summary from "./Summary";
import {Container} from "react-bootstrap";

const Course = () => {
  const location = useLocation();
  console.log(location);

  console.log("course.js pe hai");

  return (
    <>
        <Container style={{display: 'center'}}>
            <Summary courseId={location.state.courseId} />

        <h3>Reviews</h3>
        <Reviews courseId={location.state.courseId} />
        </Container>

    </>
  );
};

export default Course;
