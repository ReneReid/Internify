import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <ul className="home_guest_links">
        <li className="navbar_main_item">
          <a href="thing1" className="navbar_main_link">
            About us
          </a>
        </li>
        <li className="navbar_main_item">
          <a href="thing2" className="navbar_main_link">
            Our mission
          </a>
        </li>
        <li className="navbar_main_item">
          <a href="thing3" className="navbar_main_link">
            Contact us
          </a>
        </li>
      </ul>

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
