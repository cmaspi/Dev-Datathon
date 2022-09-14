import React, { useContext, useState } from "react";
import { Navigate as Redirect } from "react-router-dom";

import Login from "./Login";

const Default = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  if (isLoggedIn) {
    console.log("Inside Default ", localStorage.getItem("tokenId"));
    return <Redirect to="/courses" />;
  } else {
    console.log("First render");
    return (
      <>
        <Login setIsLoggedIn={setIsLoggedIn} />
      </>
    );
  }
};

export default Default;
