import "./styles/Profile.css";
import { Grid } from "@material-ui/core";

import React from "react";

const Profile = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <div className="header_tag_outer">
          <div className="header_tag_inner_left">
            <h2> Your Profile </h2>
          </div>
          <div className="header_tag_inner_right">
            <button>Edit profile</button>
          </div>
        </div>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <h1> Hello </h1>
        </Grid>
        <Grid item>
          <h1> World </h1>
        </Grid>
      </Grid>

      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      ></Grid>
    </Grid>
  );
};
export default Profile;
