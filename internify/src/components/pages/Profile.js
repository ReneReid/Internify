import "./styles/Profile.css";
import { Grid } from "@material-ui/core";
import { React, useState } from "react";
import angela from "../../assets/Profile/angela_brown.png";

const Profile = () => {
  const [profileDesc, setProfileDesc] = useState(
    "Angela is a university recruiter at Synch incorporated. Synch Inc. is a fast-paced security solutions tech startup founded in 2018. With a team of 30, we are looking to expand with young and fresh talent!"
  );
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
                <ul className="profile_handle_desc">
                  <li>
                    <b> Angela Brown </b>
                  </li>
                  <li>
                    <b> @angelab </b>
                  </li>
                  <li> Technical Recruiter @ Synch Inc </li>
                </ul>
              </Grid>
            </Grid>

            {/* Placeholder for future labels */}
            <Grid
              container
              spacing={1}
              direction="row"
              justify="center"
              alignItems="center"
            ></Grid>

            {/* Profile description */}
            <Grid
              container
              spacing={1}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <div className="profile_inner_desc">
                  <p> {profileDesc} </p>
                </div>
              </Grid>
            </Grid>

            {/* Contact Information */}
            <Grid
              container
              spacing={1}
              direction="row"
              justify="left"
              alignItems="left"
            >
              <Grid item>
                <div className="profile_inner_contact">
                  <h3>Contact</h3>
                  <ul className="profile_inner_contact_list">
                    <li> Vancouver, BC </li>
                    <li> angela@sync.com </li>
                    <li> +1 699 (234) 1234 </li>
                  </ul>
                </div>
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
