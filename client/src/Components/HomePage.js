import React, { useState, useContext, useRef, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import { Navigate as Redirect } from "react-router-dom";

import Logout from "./Logout";

const HomePage = () => {
  const baseURL = process.env.REACT_APP_API_BASEURL;

  return (
    <>
      <Logout />
    </>
  );
};

export default HomePage;
