import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_links_container">
        <ul className="footer_links">
          <li className="footer_item">
            <a href="thing1" className="navbar_main_link1">
              About us
            </a>
          </li>
          <li className="footer_item">
            <a href="thing2" className="navbar_main_link2">
              Our mission
            </a>
          </li>
          <li className="footer_item">
            <a href="thing3" className="navbar_main_link3">
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div className="footer_logo_container">
        <h4 className="footer_logo">Internify</h4>
      </div>
    </div>
  );
};

export default Footer;
