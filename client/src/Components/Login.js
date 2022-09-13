import React, { useContext, useState } from 'react'
import { GoogleLogin } from 'react-google-login'

import { Navigate as Redirect } from 'react-router-dom'

import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { UserContext } from './UserContext';

const clientId = "739559908237-bf47v9n6rocl61d6r0hktqm2jh3564t9.apps.googleusercontent.com";


const Login = () => {
  const userContext = useContext(UserContext);

  const handleResponse = (res) => {
    console.log("Login successfull! ", res.profileObj, res.tokenId);
    userContext.login(res.profileObj.name, res.profileObj.email, res.tokenId);
    
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
                  clientId={clientId}
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