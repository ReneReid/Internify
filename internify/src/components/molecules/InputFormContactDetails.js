import React, { useState } from "react";
import TextFieldInput from "../atoms/TextFieldInput";
import MultiLineTextField from "../atoms/MultiLineTextField";
import "./styles/InputFormContactDetails.css";

function InputFormContactDetails(props) {
  let jobData = props.jobData.contact;
  const [multiText, setMultiText] = useState("");

  const handleChange = (value) => {
    setMultiText(value);
    jobData.applicationSteps = value;
  };

  return (
    <div className="input_contact_form">
      <div className="input_contact_row">
        <TextFieldInput
          id={"header-form-name"}
          className={"input_contact_row_i-form-outer"}
          label={"Recruiter Name"}
          type={"text"}
          onChange={(e) => jobData.name = e.target.value}
        />
      </div>

      <div className="input_contact_row">
        <TextFieldInput
          id={"header-form-email"}
          className={"input_contact_row_i-form-outer"}
          label={"Recruiter Email"}
          type={"text"}
          onChange={(e) => jobData.email = e.target.value}
        />
      </div>

      <div className="input_contact_row">
        <TextFieldInput
          id={"header-form-linkedin"}
          className={"input_contact_row_i-form-outer"}
          label={"LinkedIn"}
          type={"text"}
          onChange={(e) => jobData.linkedIn = e.target.value}
        />
      </div>

      <div className="input_contact_row">
        <TextFieldInput
          id={"header-form-other"}
          className={"input_contact_row_i-form-outer"}
          label={"Other contact"}
          type={"text"}
          onChange={(e) => jobData.other = e.target.value}
        />
      </div>

      <div className="input_contact_row">
        <MultiLineTextField
          id={"header-form-other"}
          className={"input_contact_row_i-form-alt"}
          label={"Application steps"}
          type={"text"}
          handleChange={handleChange}
          value={multiText}
        />
      </div>
    </div>
  );
}

export default InputFormContactDetails;
