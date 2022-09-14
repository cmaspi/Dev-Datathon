import React, { useState, useContext, useEffect } from "react";
import { Link, Navigate as Redirect, useLocation } from "react-router-dom";
import Course from "./Course";
import Reviews from "./Reviews";
import { Container, Card, CardGroup, Row, Col } from "react-bootstrap";

const CoursePage = () => {
  const baseURL = process.env.REACT_APP_API_BASEURL;

  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("tokenId");
    console.log("Inside coursepage/js", token);

    fetch(`${baseURL}courses/`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json().then((data) => ({ status: r.status, body: data })))
      .then((obj) => {
        console.log("Here", obj);
        console.log(typeof obj);
        setCoursesList(obj.body);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
    <>
      <Row xs={1} md={6} className="g-4">


      {coursesList.map((course) => {
        return (
          <>
              <Col>
            <Container
              key={course.id}
              style={{textDecoration:'none'}}
            >
              <Link
                to={`/courses/${course.id}`}
                state={{ courseId: course.id }}
              >
                <Card
                  bg={"primary"}
                  key={course.id}
                  text={"dark"}
                  style={{ width: "16rem", cursor: "pointer" }}
                  className="mb-2"
                >
                  <Card.Header>{course.code}</Card.Header>
                  <Card.Body>
                    <Card.Title>{course.name} </Card.Title>
                    <Card.Text>
                      {course.offering}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Container>
                  </Col>
          </>
        );
      })}
         </Row>
    </>
  );
};

export default CoursePage;
