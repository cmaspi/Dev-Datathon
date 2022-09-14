import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SignUp = () => {
  const baseURL = process.env.REACT_APP_API_BASEURL;

  const onSubmit = () => {
    console.log("Upload File");

    const token = localStorage.getItem("tokenId");
    fetch(`${baseURL}user/signup/`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h3>Sign Up</h3>
      <Form onSubmit={onSubmit()}>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control
              plaintext
              readOnly
              defaultValue={localStorage.getItem("email")}
            />
          </Col>
        </Form.Group>

        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>AIMS HTML File </Form.Label>
          <Form.Control type="file" size="lg" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignUp;
