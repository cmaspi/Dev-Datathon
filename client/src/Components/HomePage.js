import React, { useState } from 'react'
import {Navigate as Redirect} from 'react-router-dom'
import Logout from './Logout'

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <Logout />
    </>
  )
}

export default HomePage