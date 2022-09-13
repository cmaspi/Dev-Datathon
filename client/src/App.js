import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

import { NavBar } from './Components'
import { HomePage, About, Contact, Default } from './Components'
import UserContextProvider from './Components/UserContext'

function App() {

  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
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
