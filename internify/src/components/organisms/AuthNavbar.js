import React from "react";
import { Link } from "react-router-dom";
import "./styles/AuthNavbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from '@material-ui/core/Grid';


const Navbar = () => {
  return (
      <Grid container xs = {12} sm = {12} md = {12} className = "auth_navbar_container">

        <Grid item xs = {4} sm = {4} md = {4} style={{height: 70, width: '100%'}} className="logo" >
          <Link className = "auth_navbar_logo" to="/">
            Internify
          </Link>
        </Grid>
        <Grid container xs = {8} sm = {8} md = {8} className="auth_navbar_right_items" justify='flex-end'>
          <Grid className="auth_navbar_right_item">
          <Link className="auth_navbar_item" to="placeHolder">
              Home
            </Link>
          </Grid>

          <Grid className="auth_navbar_right_item">
            <Link className="auth_navbar_item" to="placeHolder">
              Browse
            </Link>
          </Grid>
          <Grid className="auth_navbar_right_item">
            <Link className="auth_navbar_item" to="placeHolder">
              Analytics
            </Link>
          </Grid>

          <Grid className="auth_navbar_right_item">
            <Link className="auth_navbar_item" to="placeHolder">
            Profile
              </Link>
          </Grid>

          <Grid className="auth_navbar_right_item">
            <Link className="auth_navbar_item" to="placeHolder">
                <MenuIcon className="auth_navbar_item"></MenuIcon>
            </Link>
          </Grid>
        </Grid>
      </Grid>
     
  );
};

export default Navbar;
