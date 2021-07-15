import { Grid } from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { EditModal, TableBasic, CreateJobButton } from "../molecules/index";
import angela from "../../assets/Profile/angela_brown.png";
import { ButtonOutlined, ChipBasic } from "../atoms/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUser, updateUser } from "../../store/actions/userActions";
import {
  RoomOutlined,
  MailOutlineOutlined,
  PhoneAndroidOutlined,
  Star,
  CheckCircleOutline,
} from "@material-ui/icons";
import "./styles/Profile.css";

const Profile = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState({
    name: "",
    handle: "",
    jobTitle: "",
    company: "",
    bio: "",
    email: "",
    website: "",
    linkedIn: "",
    location: "",
    profilePicture: "",
    contact: "",
    jobPostings: [],
    status: "",
  });
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    setUser(data);
    setLabels([user.jobPostings.length + " postings"]);
  }, [data, user]);

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justify="center"
      alignItems="center"
      style={{ marginBottom: "10em" }}
    >
      {/* Left-hand grid item: profile img, descsription, labels & contact */}
      <Grid item xs={6}>
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
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
              style={{ paddingBottom: "2em" }}
            >
              <Grid item>
                <div className="profile_left_heading">
                  <h1> Your Profile </h1>
                </div>
              </Grid>

              <Grid item>
                <div className="profile_edit_button">
                  <ButtonOutlined onClick={() => setToggle(true)}>
                    Edit Profile
                  </ButtonOutlined>
                </div>
              </Grid>
            </Grid>

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
                    <b>{user.name}</b>
                  </li>
                  <li>
                    <b>@{user.handle}</b>
                  </li>
                  <li>
                    {user.jobTitle}
                    {user.company ? " @ " + user.company : ""}
                  </li>
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
            >
              <div className="profile_labels">
                <ul id="profile_labels_list">
                  {labels.map((label) => (
                    <li>
                      <ChipBasic
                        icon={<CheckCircleOutline style={{ color: "white" }} />}
                        label={label}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </Grid>

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
                  <p> {user.bio} </p>
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
                    <h3>Contact</h3>
                    {user.location ? (
                      <li>
                        <RoomOutlined color="secondary" fontSize="medium" />
                        {user.location}
                      </li>
                    ) : null}
                    {user.email ? (
                      <li>
                        <MailOutlineOutlined
                          color="primary"
                          fontSize="medium"
                        />
                        {user.email}
                      </li>
                    ) : null}
                    {user.contact ? (
                      <li>
                        <PhoneAndroidOutlined
                          color="primary"
                          fontSize="medium"
                        />
                        {user.contact}
                      </li>
                    ) : null}
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Right-hand grid item: Status,  */}
      <Grid item xs={6} style={{ paddingTop: "5em" }}>
        {/* Recruiting status & postings container */}
        <Grid
          container
          spacing={1}
          direction="column"
          alignItems="flex-start"
          style={{ paddingLeft: "5em" }}
        >
          {/* Recruiting status */}
          <Grid item>
            <div className="profile_left_status">
              <ul className="profile_left_status_list">
                <h2>{user.status ? "Status" : "Postings"}</h2>
                {user.status ? (
                  <li>
                    <Star color="secondary" fontSize="inherit" />
                    <b>{user.status}</b> {"  "}
                  </li>
                ) : null}
              </ul>
            </div>
          </Grid>

          {/* Posting status */}
          <Grid item>
            <div className="profile_left_posting_table">
              <TableBasic
                className="posting_table"
                data={user.jobPostings}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
      <EditModal toggle={toggle} setToggle={setToggle} />
      <CreateJobButton />
    </Grid>
  );
};

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { getUser: getUser, updateUser: updateUser }, dispatch),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile);
