import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/">Home</Link>
      <Link to="/snack">Snack</Link>
      <Link to="/soda">Soda</Link>
      <Link to="/candy">Candy</Link>
    </nav>
  );
}

export default NavBar;
