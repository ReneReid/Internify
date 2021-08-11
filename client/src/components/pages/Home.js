import { React, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { getUser } from "../../store/actions/userActions";
import { getAllJobs } from "../../store/actions/jobPostActions";
import { TableUsers, CreateJobButton, MatchesLegend } from "../molecules/index";
import { ReactComponent as Banner } from "../../assets/Home/home_asset.svg";

import "./styles/Home.css";

const Home = (props) => {
  useEffect(() => {
    props.actions.getUser(props.user.uid);
    props.actions.getAllJobs();
  }, [props.actions, props.user]);

  const firstName = props.users.user?.name?.split(" ")[0];

  return (
    <div className="home_page">
      <Banner className="home_banner"/>
      <Grid container spacing={2} direction="column">
        <Grid container alignItems="center" className="home_header">
          <Grid item className="home_header_picture">
            {props.users.user?.profilePicture ? (
              <img
                src={props.users.user?.profilePicture}
                alt="Profile pic"
                className="profile_img"
              />
            ) : (
              <AccountCircle
                style={{ fontSize: "6em" }}
                className="profile_image_default"
              />
            )}
          </Grid>
          <Grid item className="home_header_bio">
            <h1 style={{ marginTop: 0 }}>Hi, {firstName}</h1>
            <p style={{ marginBottom: 0 }}>
              Take a look at the community's postings!
            </p>
          </Grid>
        </Grid>

        <Grid item style={{ paddingLeft: "15%"}}>
            <TableUsers data={props.jobs.allJobPostings} />
        </Grid>
      </Grid>
      <CreateJobButton />
      <MatchesLegend />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    users: state.users,
    jobs: state.jobs,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { getUser: getUser, getAllJobs: getAllJobs },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
