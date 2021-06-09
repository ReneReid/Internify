import React from "react";
import "./styles/NavBarMain.css";

const NavBar_Main = () => {
  return (
    <div className="navbar_home_guest">
      <div className="navbar_home_guest_left">
        <ul className="home_guest_list">
          <li className="navbar_main_item">
            <a href="thing1" className="navbar_main_link1">
              About us
            </a>
          </li>
          <li className="navbar_main_item">
            <a href="thing2" className="navbar_main_link2">
              Our mission
            </a>
          </li>
          <li className="navbar_main_item">
            <a href="thing3" className="navbar_main_link3">
              Contact us
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar_home_guest_centre">
        <p className="internify-logo">Internify</p>
      </div>

      <div className="navbar_home_guest_right">
        <p className="sign_in">
          <a href="/">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default NavBar_Main;
