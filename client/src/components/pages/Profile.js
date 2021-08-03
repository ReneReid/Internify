import { Grid } from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { EditModal, TableBasic, CreateJobButton } from "../molecules/index";
import { ButtonOutlined, ChipBasic } from "../atoms/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUser } from "../../store/actions/userActions";
import {
  RoomOutlined,
  MailOutlineOutlined,
  PhoneAndroidOutlined,
  Star,
  CheckCircleOutline,
  AccountCircle
} from "@material-ui/icons";
import "./styles/Profile.css";

const Profile = (props) => {
  const [toggle, setToggle] = useState(false);

  var labels = [`${props.users.user.jobPostings?.length} Postings`];

  useEffect(() => {
    props.actions.getUser(props.user.uid);
  }, [props.actions, props.user]);


  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justifyContent="center"
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
          justifyContent="center"
          alignItems="center"
        >
          {/* Content within a profile: image, list, labels, description, contact */}
          <Grid item>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
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
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item>
                {props.users.user.profilePicture ? (
                  <img
                    src={props.users.user.profilePicture}
                    alt="Profile pic"
                    className="profile_img"
                  />
                ) : (
                  <AccountCircle
                    className="profile_image_default"
                    style={{ fontSize: 140 }}
                  />
                )}
              </Grid>
              <Grid item>
                <ul className="profile_handle_desc">
                  <li key={"displayName"}>
                    <h2>{props.users.user.name}</h2>
                  </li>
                  <li key={"handle"}>
                    <b>{props.users.user.handle ? "@" + props.users.user.handle : ""}</b>
                  </li>
                  <li key={"jobTitle"}>
                    {props.users.user.jobTitle}
                    {props.users.user.company ? " @ " + props.users.user.company : ""}
                  </li>
                </ul>
              </Grid>
            </Grid>

            {/* Placeholder for future labels */}
            <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
            <div className="profile_labels">
                <ul id="profile_labels_list">
                  {labels?.map((label) => (
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
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <div className="profile_inner_desc">
                  <p> {props.users.user.bio} </p>
                </div>
              </Grid>
            </Grid>

            {/* Contact Information */}
            <Grid
              container
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <div className="profile_inner_contact">
                  <ul className="profile_inner_contact_list">
                    <h3>Contact</h3>
                    {props.users.user.location ? (
                      <li key={props.users.user.location}>
                        <RoomOutlined color="secondary" />
                        {props.users.user.location}
                      </li>
                    ) : null}
                    {props.users.user.email ? (
                      <li key={props.users.user.email}>
                        <MailOutlineOutlined color="primary" />
                        {props.users.user.email}
                      </li>
                    ) : null}
                    {props.users.user.contact ? (
                      <li key={props.users.user.contact}>
                        <PhoneAndroidOutlined color="primary" />
                        {props.users.user.contact}
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
      <Grid item xs={6}>
        {/* Recruiting status & postings container */}
        <Grid
          container
          spacing={1}
          direction="column"
          alignItems="flex-start"
          justifyContent="center"
          style={{ paddingLeft: "5em" }}
        >
          {/* Recruiting status */}
          <Grid item>
            <div className="profile_left_status">
              <ul className="profile_left_status_list">
                {props.users.user.status ? (
                  <>
                    <h2>Status </h2>
                    <li>
                      <Star color="secondary" fontSize="inherit" />
                      <b>{"  "}{props.users.user.status}</b>
                    </li>
                  </>
                ) : null}
              </ul>
            </div>
          </Grid>

          {/* Posting table */}
          <Grid item>
            <h2>Postings</h2>
            <div className="profile_left_posting_table">
              {props.jobs.currentListOfJobs ? (
                <TableBasic className="posting_table" data={props.jobs.currentListOfJobs} />
              ) : (
                <div className="profile_no_posting_message">
                  You don't have any job postings. Create one by clicking on the
                  bright pink plus button below!
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </Grid>
      <EditModal toggle={toggle} setToggle={setToggle} user={props.users.user} />
      <CreateJobButton />
    </Grid>
  );
};

function mapStateToProps(state) {
  return {
    users: state.users,
    jobs: state.jobs
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { getUser: getUser },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile);
