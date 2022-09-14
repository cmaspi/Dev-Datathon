import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { useEffect } from "react";
import { gapi } from "gapi-script";

import {
  NavBar,
  Footer,
  Details,
  HomePage,
  About,
  Contact,
  Default,
  CoursePage,
  Reviews,
} from "./Components";
import Course from "./Components/Course";

function App() {
  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
        scope: "",
      });
    };

    gapi.load("client:auth2", initClient);
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/details" element={<Details />} />
          <Route exact path="/courses/:id" element={<Course />} />
          <Route exact path="/courses" element={<CoursePage />} />
          <Route path="/" element={<Default />} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
