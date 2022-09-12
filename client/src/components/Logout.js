import React from 'react'
import { GoogleLogout } from "react-google-login";

const clientId = "739559908237-bf47v9n6rocl61d6r0hktqm2jh3564t9.apps.googleusercontent.com";


const Logout = () => {

  const onSuccess = () => {
    console.log("Logged Out!");
  }

  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />

    </div>
  )
}

export default Logout;