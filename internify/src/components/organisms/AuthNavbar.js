import React from "react";
import { Link } from "react-router-dom";
import "./styles/AuthNavbar.css";
import MenuIcon from '@material-ui/icons/Menu';



const Navbar = () => {
  return (
    <div className="auth_navbar_container">
      <Link className="auth_navbar_logo" to="/">
        Internify
      </Link>

      <ul className="auth_navbar_links">
          <li className="auth_navbar_item">
            <a href="thing1" className="auth_navbar_link">
                <MenuIcon className='auth_navbar_menuIcon'></MenuIcon>
            </a>
          </li>
          <li className="auth_navbar_item">
            <a href="thing2" className="auth_navbar_link">
                Profile
            </a>
          </li>
          <li className="auth_navbar_item">
            <a href="thing3" className="auth_navbar_link">
                Analytics
            </a>
          </li>
          <li className="auth_navbar_item">
            <a href="thing4" className="auth_navbar_link">
                Browse
            </a>
          </li>
          <li className="auth_navbar_item">
            <a href="thing5" className="auth_navbar_link">
                Home
            </a>
          </li>

      </ul>

    </div>
  );
};

export default Navbar;
