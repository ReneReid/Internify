import React from "react";
import Container from "@material-ui/core/Container";
import {
  PositionSubHeader,
  InputFormJobHeader,
  LengthSubHeader,
  Stepper,
} from "../../molecules/index";
import "./styles/CreateJobHeader.css";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addJobsData } from '../../../store/actions/jobPostActions';

function CreateJobHeader(props) {
  
  if(props.currentStep !== 1){
    return null;
  } else {
    return (
      <div className="create">
        <Container maxWidth="md" className={"container"} style={{ padding: "0 10em" }}>
          <Stepper stepNumber={0} />
          <div className="create_job_header_container">
            <h1>1. Create a Job Header</h1>
            <InputFormJobHeader handle={props.handleChange} jobData={props.jobData}/>
            <LengthSubHeader jobData={props.jobData}/>
            <PositionSubHeader jobData={props.jobData}/>
          </div>
        </Container>
      </div>
    );
  }
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
