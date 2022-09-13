import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';

import { Navbar, Nav, Container } from 'react-bootstrap'

import { Login, Logout, NavBar } from './Components'
import { HomePage, About, Contact, Default } from './Components'
import UserContextProvider from './Components/UserContext'

const clientId = "739559908237-bf47v9n6rocl61d6r0hktqm2jh3564t9.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        clientId: clientId,
        scope: ""
      })
    }

    gapi.load('client:auth2', initClient);
  })

  return (
    <UserContextProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Default />} />
        </Switch>
      </Router>
    </UserContextProvider>

  );
}

export default App;
