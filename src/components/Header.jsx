import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom";
import facade from '../apiFacade';
import "../styles/Header.css"

const Header = ({ loggedIn, isAdmin, setLoggedIn, isUser, setIsUser, setIsAdmin }) => {

  function logout() {
    setLoggedIn(false)
    setIsAdmin(false)
    setIsUser(false)
    facade.logout();
  }

  return (
    <div>
      <header>
        <nav>
          <NavLink className="nav-link" to="/">Home</NavLink>
          {
            loggedIn ?
              <NavLink className="nav-button" to="/" onClick={logout}>Logout</NavLink>
              :
              <NavLink className="nav-button" to="login">Login</NavLink>
          }
          {
            loggedIn && isAdmin &&
            <NavLink className="nav-link" to="/Drivers">Driver</NavLink>
          }
          {
            loggedIn && isAdmin &&
            <NavLink className="nav-link" to="/races">Races</NavLink>
          }
          {
            loggedIn && isAdmin &&
            <NavLink className="nav-link" to="/cars">Cars</NavLink>
          }
          {
            loggedIn && isAdmin &&
            <NavLink className="nav-link" to="/Create">Create</NavLink>
          }
          {
            loggedIn && isUser &&
            <NavLink className="nav-link" to="/myraces">My Races</NavLink>
          }



        </nav>
      </header>
      <Outlet />
    </div>
  )
}

export default Header