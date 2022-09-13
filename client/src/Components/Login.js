import React, { useContext, useEffect, useState } from 'react'
import { GoogleLogin } from 'react-google-login'
import { Navigate as Redirect } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { UserContext } from './UserContext';
import { refreshTokenSetup } from '../refreshToken';
import CoursePage from './CoursePage';


const Login = () => {
  const baseURL = process.env.REACT_APP_API_BASEURL;
  const userContext = useContext(UserContext);
  const [done, onDone] = useState(false);

  const handleSuccess = (res) => {
    console.log("Login successfull! ", res.profileObj, res.tokenId);

    userContext.login(res.profileObj.name, res.profileObj.email, res.tokenId);
    refreshTokenSetup(res);

    console.log(res.tokenId);
    // setOnDone(true);
    // console.log("Here", userContext.tokenId);
    fetch(`${baseURL}user/check/`, {
      method: "POST",
      headers: {
        Authorization: res.tokenId,
        "Content-Type": "application/json",
      }
    })
      .then(res => {
        console.log(res.json());
      })
      .catch(() => {
        console.log("Error signing in");
      })

  }


  const handleFailure = (res) => {
    console.log("Login Failed!");
  }
  return (
    <Container className='mt-5 align-content-center'>

      {localStorage.getItem('tokenId') && 
      <Row>
        <Col md='6'>
          <Card className='card-image' style={{ backgroundColor: 'black' }}>
            <div className="text-white text-center rounded border border-dark d-flex align-items-center justify-content-center rgba-black-strong py-5 px-4">
              <div>
              <GoogleLogin
                clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
                buttonText="Login"
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
              />
              </div>
              </div>
            </Card>
        </Col>
      </Row>}
        
      { !localStorage.getItem('tokenId') && <CoursePage></CoursePage> }

    </Container >
  )
}

export default Login;