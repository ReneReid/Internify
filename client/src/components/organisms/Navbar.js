import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <Link className="navbar_logo" to="/">
        Internify
      </Link>

      <Link className="navbar_login" to="/login">
        Sign In
      </Link>
    </div>
  );
};

export default Navbar;
