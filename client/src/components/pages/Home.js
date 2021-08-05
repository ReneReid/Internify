import { React, useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { getUser } from "../../store/actions/userActions";

import "./styles/Home.css";

const Home = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    props.actions.getUser(props.user.uid);
    setUser(props.users.user);
  }, [props.actions, props.user]);

  const firstName = user.name.split(" ")[0];

  return (
    <div className="home_page">
      <Grid container spacing={2} direction="column">
        <Grid container alignItems="center" className="home_header">
          <Grid item className="home_header_picture">
            {user?.profilePicture ? (
              <img
                src={user?.profilePicture}
                alt="Profile pic"
                className="profile_img"
              />
            ) : (
              <AccountCircle className="profile_image_default" />
            )}
          </Grid>
          <Grid item className="home_header_bio">
            <h1 style={{ marginTop: 0 }}>Hi, {firstName}</h1>
            <p style={{ marginBottom: 0 }}>Take a look at the community's postings!</p>
          </Grid>
        </Grid>

        <Grid item>
          Placeholder
        </Grid>
      </Grid>
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
    actions: bindActionCreators({ getUser: getUser }, dispatch),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
