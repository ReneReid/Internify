import { React } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { ButtonClear } from "../atoms";
import { TemplatePosting } from "../molecules/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCurrentJob } from "../../store/actions/jobPostActions";
import firebase from "firebase/app";
import "firebase/auth";
import {
  backEndStudent,
  frontEndStudent,
  dataScienceStudent,
  fullStackStudent,
} from "../../models/templateJobDataObjects";
import "./styles/Templates.css";

const Templates = (props) => {
  const user = firebase.auth().currentUser;

  return (
    <Grid>
      <Grid item xs={2}>
        <Grid container justifyContent="flex-end">
          <Link to="/selection">
            <ButtonClear startIcon={<ChevronLeft />}>Back</ButtonClear>
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <div className="page_title">
          <h1>Select Prefills</h1>
          <h4 className="message">Select from 4 available templates</h4>
        </div>
      </Grid>
      <Grid
        container
        style={{ paddingTop: "1em" }}
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-end"
      >
        <Grid item xs={10}>
          <Grid container direction="row">
            <div className="templates_container">
            <div className="template" onClick={() => props.actions.setCurrentJob("backEnd", user.uid)}>
            <Link to="/create" style={{ textDecoration: 'none', color: "black" }}>
              <TemplatePosting data={backEndStudent} hide={true} />
            </Link>
            </div>
            <div className="template" onClick={() => props.actions.setCurrentJob("frontEnd", user.uid)}>
            <Link to="/create" style={{ textDecoration: 'none', color: "black"}}>
              <TemplatePosting data={frontEndStudent} hide={true} />
            </Link>
            </div>
            <div className="template" onClick={() => props.actions.setCurrentJob("dataScience", user.uid)}>
            <Link to="/create" style={{ textDecoration: 'none', color: "black" }}>
              <TemplatePosting data={dataScienceStudent} hide={true} />
            </Link>
            </div>
            <div className="template" onClick={() => props.actions.setCurrentJob("fullStack", user.uid)}>
            <Link to="/create" style={{ textDecoration: 'none', color: "black" }}>
              <TemplatePosting data={fullStackStudent} hide={true} />
            </Link>
            </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        setCurrentJob: setCurrentJob
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Templates);
