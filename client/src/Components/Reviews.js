import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

const Reviews = ({ courseId }) => {
  const baseURL = process.env.REACT_APP_API_BASEURL;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("tokenId");
    fetch(`${baseURL}review/`, {
      method: "POST",
      body: JSON.stringify({
        id: courseId,
      }),
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json().then((data) => ({ status: r.status, body: data })))
      .then((obj) => {
        console.log(obj);
        setReviews(obj.body);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);
  return (
    <>
      {reviews.map((review) => {
        return (
          <>
            <Card
              bg={"primary"}
              key={review.id}
              text={"dark"}
              style={{ width: "48rem" }}
              className="mb-2 text-center"
            >
              <Card.Header>{review.id}</Card.Header>
              <Card.Body>
                <Card.Title>{review.student} </Card.Title>
                <Card.Text>{review.review}</Card.Text>
              </Card.Body>
            </Card>
            <br></br>
          </>
        );
      })}
    </>
  );
};

export default Reviews;
