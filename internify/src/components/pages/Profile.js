import "./styles/Profile.css";
import { Grid } from "@material-ui/core";
import { React, useState } from "react";
import { TableBasic, TableStar } from "../molecules/Table";
import angela from "../../assets/Profile/angela_brown.png";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";
import StarIcon from "@material-ui/icons/Star";

const Profile = () => {
  const [profileDesc, setProfileDesc] = useState(
    "Angela is a university recruiter at Synch incorporated. Synch Inc. is a fast-paced security solutions tech startup founded in 2018. With a team of 30, we are looking to expand with young and fresh talent!"
  );

  const [postingContent, setPostingContent] = useState([
    {
      title: "Software Developer",
      dateCreated: "05/25/2021",
      score: "Excellent",
      link: "",
    },
    {
      title: "Quality Assurance Developer",
      dateCreated: "05/18/2021",
      score: "Excellent",
      link: "",
    },
    {
      title: "Software Developer",
      dateCreated: "04/30/2021",
      score: "Good",
      link: "",
    },
    {
      title: "Test Developer",
      dateCreated: "04/28/2021",
      score: "Okay",
      link: "",
    },
    {
      title: "QA Analyst",
      dateCreated: "04/28/2021",
      score: "Okay",
      link: "",
    },
    {
      title: "Software Developer",
      dateCreated: "04/22/2021",
      score: "Excellent",
      link: "",
    },
    {
      title: "Full-Stack Developer",
      dateCreated: "03/05/2021",
      score: "Excellent",
      link: "",
    },
  ]);

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
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <div className="profile_inner_contact">
                  <ul className="profile_inner_contact_list">
                    <li>
                      <h3>Contact</h3>
                    </li>
                    <li>
                      <RoomOutlinedIcon color="secondary" fontSize="inherit" />
                      {"  "}
                      Vancouver, BC
                    </li>
                    <li>
                      <MailOutlineOutlinedIcon
                        color="primary"
                        fontSize="inherit"
                      />
                      {"  "}
                      angela@sync.com
                    </li>
                    <li>
                      <PhoneAndroidOutlinedIcon
                        color="primary"
                        fontSize="inherit"
                      />
                      +1 699 (234) 1234{"  "}
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Right-hand grid item: Status,  */}
      <Grid item xs={7}>
        {/* Heading container */}
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <div className="profile_right_heading">
            <button>Edit profile</button>
          </div>
        </Grid>

        {/* Recruiting status & postings container */}
        <Grid
          container
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center"
        >
          {/* Recruiting status */}
          <Grid item>
            <div className="profile_left_status">
              <ul className="profile_left_status_list">
                <li>
                  <h2>Status</h2>
                </li>
                <li>
                  <StarIcon color="secondary" fontSize="inherit" />
                  <b>Actively recruiting interns!</b> {"  "}
                </li>
              </ul>
            </div>
          </Grid>

          {/* Posting status */}
          <Grid item>
            <div className="profile_left_posting_table">
              <TableBasic className="posting_table" data={postingContent} />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Profile;
