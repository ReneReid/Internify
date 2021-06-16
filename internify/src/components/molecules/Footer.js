import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_links">
        <ul className="footer_list">
          <li className="footer_item">
            <a href="placeholder1" className="navbar_login_link">
              About us
            </a>
          </li>
          <li className="footer_item">
            <a href="placeholder2" className="navbar_login_link">
              Our mission
            </a>
          </li>
          <li className="footer_item">
            <a href="placeholder3" className="navbar_login_link">
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div className="footer_logo">
        <h3 className="appNameFooter">Internify</h3>
      </div>
    </div>
  );
};

export default Footer;
