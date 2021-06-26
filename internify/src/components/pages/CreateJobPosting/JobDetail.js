import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { Stepper } from "../../molecules/index";
import ApplicantDetails from "../../molecules/ApplicantDetails";
import MultiLineTextField from "../../atoms/MultiLineTextField";
import "./styles/JobDetail.css";

function JobDetail(props) {
  const data = props.data;
  const [multiText, setMultiText] = useState("");

  const handleChange = (value) => {
    setMultiText(value);
    props.jobData.details.description = value;
  };

  return props.currentStep === 3 ? (
    <div className="create_form_container">
      <Container maxWidth="md" style={{ padding: "0 10em" }}>
        <Stepper stepNumber={2} />
        <h1>3. Job Details</h1>
        <MultiLineTextField
          className={"job_detail_multi_p"}
          id={"job_detail_p1"}
          label={"Job Description"}
          type={"text"}
          rowsMax={200}
          handleChange={handleChange}
          value={multiText}
        />
        <ApplicantDetails
          location={data.location}
          payment={data.payment}
          citizenship={data.citizenship}
          academicReq={data.academicReq}
          coopReq={data.coopReq}
          jobData={props.jobData}
        />
      </Container>
    </div>
  ) : (null);
}

export default JobDetail;
