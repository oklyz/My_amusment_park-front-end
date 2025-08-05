import React from "react";
import { NavLink } from "react-router-dom";
const Header=({ handleLogOut, user })=> {
  
  let userOptions

  if (user) {
    userOptions = (
      <header>
        <NavLink onClick={handleLogOut} to="/">Sign-Out</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Games">Games</NavLink>
        <NavLink to="/Services">Services</NavLink>
        <NavLink to="/buy-tickets">Tickets</NavLink>
        <NavLink to='/profile' className='profile-button'>profile</NavLink>
      </header>
    )
  } else {
    userOptions = (
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Games">Games</NavLink>
        <NavLink to="/Services">Services</NavLink>
        <NavLink to="/sign-up">Sign-up</NavLink>
        <NavLink to="/sign-in">Sign-in</NavLink>
      </header>
    )
  }
  return (
    <>
    {user ? userOptions : userOptions}
    </>
  );
}

export default Header;
