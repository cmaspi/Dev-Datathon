import React, { useContext } from 'react'
import {Navigate as Redirect} from 'react-router-dom'

import Login from './Login'
import { UserContext } from './UserContext'

const Default = () => {
  const userContext = useContext(UserContext);
  if(userContext && userContext.name !== '' && userContext.exists)
  {
    return <Redirect to="/courses"/>
  }
  return (
    <>
      <Login />
    </>
  )
}

export default Default