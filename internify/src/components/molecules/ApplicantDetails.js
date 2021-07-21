import React from "react";
import { CheckBox } from "../atoms";
import RadioButtonsGroup from "./RadioButtonsGroup";
import { TextField, FormHelperText } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateRegKeys } from "../../store/actions/jobPostActions";

function ApplicantDetails(props) {
  let jobData = props.jobData;
  const location = props.location;
  const payment = props.payment;
  const citizenship = props.citizenship;
  const academicReq = props.academicReq;
  const coopReq = props.coopReq;
  const keysList = props.keysList;
  const registeredKeys = props.jobs.registeredKeys;

  function updateKeys(event, key, label){
    if(keysList.includes(key)){
      if(registeredKeys.hasOwnProperty(key)){
        if (event.target.checked) {
          props.actions.updateRegKeys(key, [...registeredKeys[key], label]);
        } else {
          if (registeredKeys[key].includes(label)) {
            registeredKeys[key] = registeredKeys[key].filter(
              (obj) => obj !== label
            );
            props.actions.updateRegKeys(key, registeredKeys[key]);
          }
        }
      } else {
        props.actions.updateRegKeys(key, [label]);
      }
    }
  }

  const handleChange = (event, key, label) => {
    updateKeys(event, key, label);
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
            keysList={props.keysList}
          />
        </div>
        <FormHelperText>Required</FormHelperText>
      </div>
      <div className="job_details_container">
        <h3>How will this position pay?*</h3>
        <div className="job_details_radio_container">
          <RadioButtonsGroup
            jobData={jobData}
            property={"pay"}
            data={payment}
            keysList={props.keysList}
          />
        </div>
        <FormHelperText>Required</FormHelperText>
      </div>
      <div className="job_details_container">
        <h3>What candidates will this position accept?*</h3>
        <div className="job_details_radio_container">
          <RadioButtonsGroup
            jobData={jobData}
            property={"candidates"}
            data={citizenship}
            keysList={props.keysList}
          />
        </div>
      </div>
      <FormHelperText>Required</FormHelperText>
      <div className="job_details_container">
        <h3>Are there academic requirements?*</h3>
        <div className="job_details_radio_container">
          {academicReq.map((x) => {
            return (
              <CheckBox key={x} name={x} label={x} onChange={(e) => handleChange(e, "academicReq", x)} />
            );
          })}
          <TextField id="optional_academics" label="Other" variant="filled" />
        </div>
      </div>
      <FormHelperText>Required</FormHelperText>
      <div className="job_details_container">
        <h3>Is co-op enrollment required?*</h3>
        <div className="job_details_radio_container">
          <RadioButtonsGroup
            jobData={jobData}
            property={"coOp"}
            data={coopReq}
            keysList={props.keysList}
          />
        </div>
      </div>
      <FormHelperText>Required</FormHelperText>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        updateRegKeys: updateRegKeys
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(ApplicantDetails);
