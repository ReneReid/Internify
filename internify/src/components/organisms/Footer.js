import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_links_container">
        <ul className="footer_links">
          <li className="footer_item1">
            <a href="thing1" className="navbar_main_link1">
              Made with ❤️ in Vancouver, BC
            </a>
          </li>
          <li className="footer_item2">
            <a href="https://github.com/aleemer/Internify" className="navbar_main_link2">
              Github repo
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
