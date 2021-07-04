import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import {
  PositionSubHeader,
  InputFormJobHeader,
  LengthSubHeader,
  Stepper,
} from "../../molecules/index";
import "./styles/CreateJobHeader.css";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addJobsData } from "../../../store/actions/jobPostActions";

function CreateJobHeader(props) {
  const [header, setHeader] = useState({
    title: "",
    company: "",
    location: "",
    startDate: "",
    position: [],
    length: "",
  });

  useEffect(() => {
    props.jobData.header = header;
  });

  if (props.currentStep !== 1) {
    return null;
  } else {
    return (
      <div className="create">
        <Container
          maxWidth="md"
          className={"container"}
          style={{ padding: "0 10em" }}
        >
          <Stepper stepNumber={0} />
          <div className="create_job_header_container">
            <h1>1. Create a Job Header</h1>
            <InputFormJobHeader handleChange={setHeader} jobData={header} />
            <LengthSubHeader handleChange={setHeader} jobData={header} />
            <PositionSubHeader handleChange={setHeader} jobData={header} />
          </div>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addJobsData: addJobsData }, dispatch),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(CreateJobHeader);
