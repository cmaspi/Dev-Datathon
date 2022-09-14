import React from "react";
import { Navigate as Redirect } from "react-router-dom";
import { GoogleLogout } from "react-google-login";

const Logout = () => {
  const onSuccess = () => {
    console.log("Logged Out!");
  };
  // if(!userContext || userContext.name === '')
  {
    return <Redirect to="/" />;
  }
  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
      buttonText={"Logout"}
      onLogoutSuccess={onSuccess}
    />
  );
};

export default Logout;
