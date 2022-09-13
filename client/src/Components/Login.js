import React, { useContext, useState } from 'react'
import { GoogleLogin } from 'react-google-login'

import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { UserContext } from './UserContext';
import { refreshTokenSetup } from '../refreshToken';


const Login = () => {
  const userContext = useContext(UserContext);

  const handleResponse = (res) => {
    console.log("Login successfull! ", res.profileObj, res.tokenId);
    userContext.login(res.profileObj.name, res.profileObj.email, res.tokenId);
    refreshTokenSetup(res);
  }

  const customStyle = {
    backgroundColor: "deep-orange",
    background: "deep-orange",
    border: "none",
    fontWeight: "bold",
  };
  return (
    <Container className='mt-5 align-content-center'>
      <Row>
        <Col md='6'>
          <Card className='card-image' style={{ backgroundColor: 'black' }}>
            <div className="text-white text-center rounded border border-dark d-flex align-items-center justify-content-center rgba-black-strong py-5 px-4">
              <div>
                <GoogleLogin
                  clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
                  buttonText="Login"
                  onSuccess={handleResponse}
                  onFailure={handleResponse}
                  cookiePolicy={'single_host_origin'}
                />
              </div>
            </div>
          </Card>
        </Col>
      </Row>

    </Container>
  )
}

export default Login;