import "./styles/Profile.css";
import { Grid } from "@material-ui/core";

import React from "react";

const Profile = () => {
  return (
    <Grid
      container
      spacing={12}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid container item xs={5}>
        <div className="profile_header_outer">
          <div className="profile_header_tag">
            <h1>Your Profile</h1>
          </div>

          <div className="profile_header_inner_1">
            <h3> Pic and name </h3>
          </div>

          <div className="profile_header_inner_2">
            <h3> Description </h3>
          </div>

          <div className="profile_header_inner_3">
            <h3> Contact details </h3>
          </div>
        </div>
      </Grid>
      <Grid container item xs={5}>
        <h1> World </h1>
      </Grid>
    </Grid>
  );
};
export default Profile;
