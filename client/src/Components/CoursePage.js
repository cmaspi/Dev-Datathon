import React, { useContext, useEffect } from 'react'
import {Navigate as Redirect} from 'react-router-dom'
import { UserContext } from './UserContext'

const CoursePage = () => {
  const baseURL = process.env.REACT_APP_API_BASEURL;
  const userContext = useContext(UserContext);
  
  useEffect(() => {
    console.log(userContext.tokenId);
  });
    
  return (
    <div>CoursePage</div>
    
  )
}

export default CoursePage;