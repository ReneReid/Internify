import "./styles/Profile.css";
import { Grid } from "@material-ui/core";
import { React, useState } from "react";
import angela from "../../assets/Profile/angela_brown.png";

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
        {/* Heading container */}
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div className="profile_left_heading">
            <h1> Your Profile </h1>
          </div>
        </Grid>

        {/* Content container */}
        <Grid
          container
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center"
        >
          {/* Content within a profile: image, list, labels, description, contact */}
          <Grid item>
            {/* Image and handle headers */}
            <Grid
              container
              spacing={1}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <img src={angela} alt="Profile pic" className="profile_img" />
              </Grid>
              <Grid item>
                <p> List description </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Right-hand grid item: Status,  */}
      <Grid item xs={7}>
        <h3>Placeholder</h3>
      </Grid>
    </Grid>
  );
};
export default Profile;
