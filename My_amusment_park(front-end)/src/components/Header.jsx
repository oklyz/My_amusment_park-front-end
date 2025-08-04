import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Games">Games</NavLink>
      <NavLink to="/Services">Services</NavLink>
      <NavLink to="/buy-tickets">Tickets</NavLink>
      <NavLink to="/sign-up">Sign-up</NavLink>
      <NavLink to="/sign-in">Sign-in</NavLink>
      <NavLink to="/sign-out">Sign-Out</NavLink>
    </header>
  );
}

export default Header;
