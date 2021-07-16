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
import { useSelector } from "react-redux";

const Profile = ({ data }) => {
  const [toggle, setToggle] = useState(false);

  const currentUser = useSelector((state) => state.users.user);

  console.log(currentUser);
  console.log(currentUser.hasOwnProperty("email"));
  console.log(currentUser.email);

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

  console.log(user);
  const [labels, setLabels] = useState([]);

  // useEffect(() => {
  //   setUser(user);
  //   setLabels([user.jobPostings.length + " postings"]);
  // }, [currentUser, user]);

  useEffect(() => {
    setUser({
      name: currentUser.hasOwnProperty("name") ? currentUser.name : "",
      handle: currentUser.hasOwnProperty("handle") ? currentUser.handle : "",
      jobTitle: currentUser.hasOwnProperty("jobTitle")
        ? currentUser.jobTitle
        : "",
      company: currentUser.hasOwnProperty("company") ? currentUser.company : "",
      bio: currentUser.hasOwnProperty("bio") ? currentUser.bio : "",
      email: currentUser.hasOwnProperty("email") ? currentUser.email : "",
      website: currentUser.hasOwnProperty("website") ? currentUser.website : "",
      linkedIn: currentUser.hasOwnProperty("linkedIn")
        ? currentUser.linkedIn
        : "",
      location: currentUser.hasOwnProperty("location")
        ? currentUser.location
        : "",
      profilePicture: currentUser.hasOwnProperty("profilePicture")
        ? currentUser.profilePicture
        : "",
      contact: currentUser.hasOwnProperty("contact") ? currentUser.contact : "",
      jobPostings: currentUser.hasOwnProperty("jobPostings")
        ? currentUser.jobPostings
        : [],
      status: currentUser.hasOwnProperty("status") ? currentUser.status : "",
    });
    setLabels([user.jobPostings.length + " postings"]);
  }, [currentUser, ]);

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
                  <li key={"displayName"}>
                    <b>{user.name}</b>
                  </li>
                  <li key={"handle"}>
                    <b>@{user.handle}</b>
                  </li>
                  <li key={"jobTitle"}>
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
                    <li key={label}>
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
                      <li key={user.location}>
                        <RoomOutlined color="secondary" />
                        {user.location}
                      </li>
                    ) : null}
                    {user.email ? (
                      <li key={user.email}>
                        <MailOutlineOutlined color="primary" />
                        {user.email}
                      </li>
                    ) : null}
                    {user.contact ? (
                      <li key={user.contact}>
                        <PhoneAndroidOutlined color="primary" />
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
              <TableBasic className="posting_table" data={user.jobPostings} />
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
      { getUser: getUser, updateUser: updateUser },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile);
