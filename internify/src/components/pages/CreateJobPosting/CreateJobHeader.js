import React, { useEffect, useState } from "react";
import { Container, FormHelperText } from "@material-ui/core";
import {
  PositionSubHeader,
  InputFormJobHeader,
  LengthSubHeader,
  Stepper,
} from "../../molecules/index";
import "./styles/CreateJobHeader.css";

function CreateJobHeader(props) {
  const [header, setHeader] = useState({
    title: props? props.jobData.header.title: "",
    company: props? props.jobData.header.company: "",
    location: props? props.jobData.header.location: "",
    startDate: props? props.jobData.header.startDate: "",
    position: props? props.jobData.header.position: [],
    length: props? props.jobData.header.length: "",
  });

  useEffect(() => {
    props.jobData.header = header;
  });

  if (props.currentStep !== 1) {
    return null;
  } else {
    return (
      <div className="create_form_container">
        <Container
          maxWidth="md"
          className={"container"}
        >
          <Stepper stepNumber={0} />
          <div className="create_job_header_container">
            <h1>1. Create a Job Header</h1>
            <InputFormJobHeader handleChange={setHeader} jobData={header} />
            <LengthSubHeader handleChange={setHeader} jobData={header} />
            <FormHelperText>Required</FormHelperText>
            <PositionSubHeader handleChange={setHeader} jobData={header} />
            <FormHelperText>Required</FormHelperText>
          </div>
        </Container>
      </div>
    );
  }
}

export default CreateJobHeader;
