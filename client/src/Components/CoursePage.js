import React, { useState, useContext, useEffect } from "react";
import { Link, Navigate as Redirect, useLocation } from "react-router-dom";
import Course from "./Course";
import Reviews from "./Reviews";
import { UserContext } from "./UserContext";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

const CoursePage = () => {
  const baseURL = process.env.REACT_APP_API_BASEURL;
  const userContext = useContext(UserContext);

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
        setCoursesList(obj.body.slice(0, 4));
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
    <>
      <div>CoursePage</div>
      {coursesList.map((course) => {
        return (
          <>
            <Container
              key={course.id}
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <Link
                to={`/courses/${course.id}`}
                state={{ courseId: course.id }}
              >
                <Card
                  bg={"primary"}
                  key={course.id}
                  text={"dark"}
                  style={{ width: "18rem", cursor: "pointer" }}
                  className="mb-2"
                >
                  <Card.Header>{course.id}</Card.Header>
                  <Card.Body>
                    <Card.Title>{course.code} </Card.Title>
                    <Card.Text>
                      {course.name}
                      {course.offering}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Container>
          </>
        );
      })}
    </>
  );
};

export default CoursePage;
