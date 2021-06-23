import React from "react";
import { useState } from 'react';
import Container from "@material-ui/core/Container";
import {
  PositionSubHeader,
  InputFormJobHeader,
  LengthSubHeader,
  Stepper,
} from "../../molecules/index";
import { ButtonFilled } from "../../atoms/Button";
import "./styles/CreateJobHeader.css";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addJobsData } from '../../../store/actions/jobPostActions';

function CreateJobHeader(props) {

  const [jobPosting, setJobPosting] = useState({
        jobTitle: "",
        companyName: "",
        companyAddress: "",
        startDate: "",
        positionLength: "",
        positionType: [],
  });
  
  function updateStore(){
    props.actions.addJobsData(jobPosting);
  }

  return (
    <div className="create">
      <Container maxWidth="md" className={"container"} style={{ padding: "0 10em" }}>
        <Stepper stepNumber={0} />
        <div className="create_job_header_container">
          <h1>1. Create a Job Header</h1>
          <InputFormJobHeader handle={setJobPosting} jobData={jobPosting}/>
          <LengthSubHeader jobData={jobPosting}/>
          <PositionSubHeader jobData={jobPosting}/>
        </div>
        <ButtonFilled onClick={() => updateStore()}>Continue</ButtonFilled>
      </Container>
    </div>
  );
}

function mapStateToProps(state){
  return {
      jobs: state.jobs
  };
};

function matchDispatchToProps(dispatch){
   return {
       actions: bindActionCreators({addJobsData: addJobsData}, dispatch)
   };
}

export default connect(mapStateToProps, matchDispatchToProps)(CreateJobHeader);
