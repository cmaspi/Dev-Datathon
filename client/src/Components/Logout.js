import React, { useContext } from 'react'
import {Navigate as Redirect} from 'react-router-dom'
import { GoogleLogout } from "react-google-login";

import { UserContext } from './UserContext';

const clientId = "739559908237-bf47v9n6rocl61d6r0hktqm2jh3564t9.apps.googleusercontent.com";


const Logout = () => {
  const userContext = useContext(UserContext);

  const onSuccess = () => {
    console.log("Logged Out!");
    userContext.logout();
  }
  if(!userContext || userContext.name == '')
  {
    return <Redirect to="/"/>
  }
  return (
    <GoogleLogout
      clientId={clientId}
      buttonText={"Logout"}
      onLogoutSuccess={onSuccess}
    />
  )
}

export default Logout;