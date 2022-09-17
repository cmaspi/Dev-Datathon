import React, { useState } from "react";

import { Navigate as Redirect } from "react-router-dom";
export default function FileUploadPage() {
  const baseURL = process.env.REACT_APP_API_BASEURL;

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {

    event.preventDefault();
    console.log(event.target.files);
    console.log(event.target.files[0]);

    const formData = new FormData();
    formData.append("grade_card", event.target.files[0]);
    // formData.append("ab", "cd");
    for (var [key, value] of formData.entries()) {
     console.log(key, value);
    }
    const token = localStorage.getItem("tokenId");
    console.log(formData);

    fetch(`${baseURL}user/signup/`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: token,
        // "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log("I'm here");
    setIsSubmitted(true);
  };
  if (isSubmitted) return <Redirect to="/courses" />;

  return (
    <div>
        <h2>Signup</h2>
        <p>Upload AIMS HTML File.</p>
        <input id="file" type="file" onChange={handleSubmit}></input>
        <input type="submit"></input>
    </div>
  );
}
