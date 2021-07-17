import React from "react";
import "./styles/Footer.css";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Footer = (props) => {
  const landing = props.landing;

  if (landing) {
    return (
      <div className="footer_landing">
        <div className="footer_links_container">
          <ul className="footer_links">
            <li className="footer_item">
              Made with <FavoriteIcon fontSize="small" color="secondary" /> in
              Vancouver, BC
            </li>
            <li className="footer_item">
              <a
                href="https://github.com/aleemer/Internify"
                target="_blank"
                className="navbar_main_link1"
              >
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
  }
  return (
    <div className="footer">
      <div className="footer_links_container">
        <ul className="footer_links">
          <li className="footer_item">
            Made with <FavoriteIcon fontSize="small" color="secondary" /> in
            Vancouver, BC
          </li>
          <li className="footer_item">
            <a
              href="https://github.com/aleemer/Internify"
              target="_blank"
              className="navbar_main_link1"
            >
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
