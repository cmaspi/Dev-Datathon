import React from "react";
import { useState, useContext, useEffect } from "react";
import {Container} from "react-bootstrap";

const Summary = ({ courseId }) => {
  const baseURL = process.env.REACT_APP_API_BASEURL;
  const [summary, setSummary] = useState("This course is awesome");
  const [grade, setGrade] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("tokenId");
    fetch(`${baseURL}courses/summary/`, {
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
        setSummary(obj.body["review"]);
        setGrade(obj.body["median_grade"]);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  return (
    <>
      <div>
        <h3>Summary</h3>
        {summary}
      </div>
      <br />

      <h3>Median Grade</h3>
      {grade}
    </>
  );
};

export default Summary;
