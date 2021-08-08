import { React } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { ButtonClear } from "../atoms";
import { TemplatePosting } from "../molecules/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setSelectedJob } from "../../store/actions/jobPostActions";
import {
  backEndStudent,
  frontEndStudent,
  dataScienceStudent,
  fullStackStudent,
} from "../../models/templateJobDataObjects";
import "./styles/Templates.css";

const Templates = (props) => {
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
            <div className="template" onClick={() => props.actions.setSelectedJob("backEnd")}>
            <Link to="/create" style={{ textDecoration: 'none', color: "black" }}>
              <TemplatePosting data={backEndStudent} hide={true} />
            </Link>
            </div>
            <div className="template" onClick={() => props.actions.setSelectedJob("frontEnd")}>
            <Link to="/create" style={{ textDecoration: 'none', color: "black"}}>
              <TemplatePosting data={frontEndStudent} hide={true} />
            </Link>
            </div>
            <div className="template" onClick={() => props.actions.setSelectedJob("dataScience")}>
            <Link to="/create" style={{ textDecoration: 'none', color: "black" }}>
              <TemplatePosting data={dataScienceStudent} hide={true} />
            </Link>
            </div>
            <div className="template" onClick={() => props.actions.setSelectedJob("fullStack")}>
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
        setSelectedJob: setSelectedJob
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Templates);
