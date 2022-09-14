import React, { useContext, useState } from 'react'
import {Navigate as Redirect} from 'react-router-dom'

import Login from './Login'
import { UserContext } from './UserContext'

const Default = () => {
  const userContext = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // if(userContext && userContext.tokenId != '' && userContext.exists)
  if(isLoggedIn)
  {
    console.log("Inside Default " ,userContext.tokenId, localStorage.getItem('tokenId'));
    return <Redirect to="/courses"/>
  }
  else {
    console.log('First render');
    return (
      <>
        <Login setIsLoggedIn={setIsLoggedIn}/>
      </>)
  }
}

export default Default