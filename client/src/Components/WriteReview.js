import React, { useContext } from "react";

import { Button, Form } from "react-bootstrap";

const WriteReview = () => {
  // const
  const handleSubmit = (e) => {};
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Course Name: </Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTextArea">
        <Form.Label>Review</Form.Label>
        <Form.Control type="text" placeholder="This course is..." />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default WriteReview;
