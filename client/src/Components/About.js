import React from 'react'
import "./About.css"
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

const About = () => {
  return (
    <div>
      <div class='about-section'>
        <h1>About Us</h1>
        <p>Text about ourselves. Lorem ipsum ipsum da lorem wa</p>
        <p>Just some blah blah text. Needs to be changed anyways</p>
      </div>

      <center>
        <h2>Our Team</h2>
      </center>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Chirag Mehta</Card.Title>
            <Card.Text>
              AI20BTECH11006 <br></br>
              Email: ai20btech11006@iith.ac.in
              </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Dishank Jain</Card.Title>
            <Card.Text>
              AI20BTECH11011 <br></br>
              Email: ai20btech11011@iith.ac.in
              </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Pranav Sai</Card.Title>
            <Card.Text>
              AI20BTECH11004 <br></br>
              Email: ai20btech11004@iith.ac.in
              </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Umesh Kalvakuntla</Card.Title>
            <Card.Text>
              AI20BTECH11024 <br></br>
              Email: cs20btech11024@iith.ac.in
              </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Yashas Tadikamalla</Card.Title>
            <Card.Text>
              AI20BTECH11027 <br></br>
              Email: ai20btech11027iith.ac.in
              </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Vaibhav Ramola</Card.Title>
            <Card.Text>
              EP20BTECH11025 <br></br>
              Email: ep20btech11025@iith.ac.in
              </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

    </div>
  )
}

export default About