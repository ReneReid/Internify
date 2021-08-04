import { React, useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getUser } from "../../store/actions/userActions";

const Home = (props) => {
  useEffect(() => {
    props.actions.getUser(props.user.uid);
  }, [props.actions, props.user]);

  return <div className="home_page"></div>;
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
