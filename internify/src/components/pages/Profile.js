import "./styles/Profile.css";
import { Grid } from "@material-ui/core";

import React from "react";

const Profile = () => {
  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justify="center"
      alignItems="center"
    >
      {/* Left-hand grid item: profile img, descsription, labels & contact */}
      <Grid item xs={5}>
        {/* Two containers, one for heading, another for content */}
        <Grid
          container
          spacing={1}
          direction="row"
          justify="left"
          alignItems="left"
        >
          <div className="profile_left_heading">
            <h1> Your Profile </h1>
          </div>
        </Grid>

        <Grid
          container
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center"
        ></Grid>
      </Grid>

      {/* Right-hand grid item: Status,  */}
      <Grid item xs={7}>
        <h3>Placeholder</h3>
      </Grid>
    </Grid>
  );
};
export default Profile;
