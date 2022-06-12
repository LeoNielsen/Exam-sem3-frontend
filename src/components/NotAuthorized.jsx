import React from 'react'
import {Link} from "react-router-dom";

const NotAuthorized = () => {
  return (
    <div>
        <p>you are not authorized, please login in to an user with the rights</p>
        <Link to="/login"> <p>login</p></Link>
    </div>
  )
}

export default NotAuthorized