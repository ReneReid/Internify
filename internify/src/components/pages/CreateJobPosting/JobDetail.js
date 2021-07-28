import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { Stepper } from "../../molecules/index";
import ApplicantDetails from "../../molecules/ApplicantDetails";
import MultiLineTextField from "../../atoms/MultiLineTextField";
import "./styles/JobDetail.css";

function JobDetail(props) {
  const data = props.data;
  const [details, setDetails] = useState({
    description: "",
    positionType: "",
    pay: "",
    candidates: "",
    academicReq: [],
    coOp: "",
  });

  useEffect(() => {
    props.jobData.details = details;
  });

  return props.currentStep === 3 ? (
    <div className="create_form_container">
      <Container maxWidth="md">
        <Stepper stepNumber={2} />
        <h1>3. Job Details</h1>
        <MultiLineTextField
          className={"job_detail_multi_p"}
          id={"job_detail_p1"}
          label={"Job Description"}
          type={"text"}
          rows={8}
          maxRows={200}
          onChange={(e) => setDetails({...details, description: e.target.value})}
          defaultValue={details.description}
          helperText={"Required"}
        />
        <ApplicantDetails
          location={data.location}
          payment={data.payment}
          citizenship={data.citizenship}
          academicReq={data.academicReq}
          coopReq={data.coopReq}
          jobData={details}
        />
      </Container>
    </div>
  ) : null;
}

export default JobDetail;
