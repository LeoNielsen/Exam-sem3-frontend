import React from 'react'
import {Link} from "react-router-dom";
import "../styles/Error.css"

const NotAuthorized = () => {
  return (
    <div className='message'>
        <p>you are not authorized, please login in to an user with the rights</p>
        <Link to="/login" className='error'> <p>login</p></Link>
    </div>
  )
}

export default NotAuthorized