import React, {useContext} from 'react'

import { GoogleLogin } from 'react-google-login'

const clientId = "739559908237-bf47v9n6rocl61d6r0hktqm2jh3564t9.apps.googleusercontent.com";


const Login = () => {

  const onSuccess = (res) => {
    console.log("Login successfull! ", res.profileObj);
  }

  const onFailure = (res) => {
    console.log("Login failed! ", res);
  }
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />


    </div>
  )
}

export default Login;