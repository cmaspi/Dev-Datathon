import React, { useState } from "react";
import { Navigate as Redirect } from "react-router-dom";

import Login from "./Login";

const Default = () => {
  const [userStat, setUserStat] = useState({ loggedIn: false, present: false });

  console.log("In default.js", userStat);
  if (userStat.loggedIn) {
    // if (userStat.present) {
    console.log("Inside Default ", localStorage.getItem("tokenId"), userStat);
    return <Redirect to="/signup" />;
    return <Redirect to="/courses" />;
    // }
  } else {
    console.log("First render");
    return (
      <>
        <Login setUserStat={setUserStat} />
      </>
    );
  }
};

export default Default;
