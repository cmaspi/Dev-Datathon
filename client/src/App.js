import { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';

import LoginButton from "./components/Login"
import LogoutButton from "./components/Logout"

const clientId = "739559908237-bf47v9n6rocl61d6r0hktqm2jh3564t9.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }

    gapi.load('client:auth2', initClient);
  })

  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
