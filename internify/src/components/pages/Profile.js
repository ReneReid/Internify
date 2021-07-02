import "./styles/Profile.css";
import { Grid } from "@material-ui/core";

import React from "react";

const Profile = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid container item xs={2}>
        <h1> Hello </h1>
      </Grid>
      <Grid container item xs={2}>
        <h1> World </h1>
      </Grid>
    </Grid>
  );
};
export default Profile;
