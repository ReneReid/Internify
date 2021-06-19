import React from "react";
import { Link } from "react-router-dom";
import "./styles/AuthNavbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';


const Navbar = () => {
  return (
    <Container>
      <Grid container className = "navbar_container">

        <Grid item xs = {6} sm = {6} md = {6} style={{height: 70, width: '100%'}} className="logo">
          <Link className = "auth_navbar_logo" to="/">
            Internify
          </Link>


        </Grid>
        <Grid container xs = {6} sm = {6} md = {6} className="auth_navbar_right_items">
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
      
    </Container>
  );
};

export default Navbar;
