import React from "react";
import { CheckBox } from "../atoms";
import RadioButtonsGroup from "./RadioButtonsGroup";
import { TextField } from "@material-ui/core";

function ApplicantDetails(props) {
  let jobData = props.jobData;
  const location = props.location;
  const payment = props.payment;
  const citizenship = props.citizenship;
  const academicReq = props.academicReq;
  const coopReq = props.coopReq;

  const handleChange = (event) => {
    if (event.target.checked) {
      jobData["academicReq"].push(event.target.name);
    } else {
      if (jobData["academicReq"].includes(event.target.name)) {
        jobData["academicReq"] = jobData["academicReq"].filter(
          (obj) => obj !== event.target.name
        );
      }
    }
  };

  return (
    <React.Fragment>
      <div className="job_details_container">
        <h3>Is this position remote?*</h3>
        <div className="job_details_radio_container">
          <RadioButtonsGroup
            jobData={jobData}
            property={"position"}
            data={location}
          />
        </div>
      </div>
      <div className="job_details_container">
        <h3>How will this position pay?*</h3>
        <div className="job_details_radio_container">
          <RadioButtonsGroup
            jobData={jobData}
            property={"pay"}
            data={payment}
          />
        </div>
      </div>
      <div className="job_details_container">
        <h3>What candidates will this position accept?*</h3>
        <div className="job_details_radio_container">
          <RadioButtonsGroup
            jobData={jobData}
            property={"candidates"}
            data={citizenship}
          />
        </div>
      </div>
      <div className="job_details_container">
        <h3>Are there academic requirements?*</h3>
        <div className="job_details_radio_container">
          {academicReq.map((x) => {
            return (
              <CheckBox key={x} name={x} label={x} onChange={handleChange} />
            );
          })}
          <TextField id="optional_academics" label="Other" variant="filled" />
        </div>
      </div>
      <div className="job_details_container">
        <h3>Is co-op enrollment required?*</h3>
        <div className="job_details_radio_container">
          <RadioButtonsGroup
            jobData={jobData}
            property={"coOp"}
            data={coopReq}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ApplicantDetails;
