import React from "react";
import { useState, useEffect } from 'react';
import Container from "@material-ui/core/Container";
import {
  PositionSubHeader,
  InputFormJobHeader,
  LengthSubHeader,
  Stepper,
} from "../../molecules/index";
import { ButtonFilled } from "../../atoms/Button";
import "./styles/CreateJobHeader.css";

function CreateJobHeader() {

  const [jobPosting, setJobPosting] = useState({
        jobTitle: "",
        companyName: "",
        companyAddress: "",
        startDate: "",
        positionLength: "",
        positionType: [],
  });
  
  function updateStore(){
    console.log("Job Posting: ", jobPosting);
  }

  return (
    <div className="create">
      <Container maxWidth="md" className={"container"} style={{ padding: "0 10em" }}>
        <Stepper stepNumber={0} />
        <div className="create_job_header_container">
          <h1>1. Create a Job Header</h1>
          <InputFormJobHeader jobData={jobPosting}/>
          <LengthSubHeader jobData={jobPosting}/>
          <PositionSubHeader jobData={jobPosting}/>
        </div>
        <ButtonFilled onClick={() => updateStore()}>Continue</ButtonFilled>
      </Container>
    </div>
  );
}

export default CreateJobHeader;
