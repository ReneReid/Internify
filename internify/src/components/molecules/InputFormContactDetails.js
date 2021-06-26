import React from "react";
import TextFieldInput from "../atoms/TextFieldInput";
import MultiLineTextField from "../atoms/MultiLineTextField";
import "./styles/InputFormContactDetails.css";

function InputFormContactDetails(props) {
  let jobData = props.jobData;

  const handleChange = (value) => {
    props.handleChange({ ...jobData, applicationSteps: value });
  };

  return (
    <div className="input_contact_form">
      <div className="input_contact_row">
        <TextFieldInput
          id={"header-form-name"}
          className={"input_contact_row_i-form-outer"}
          label={"Recruiter Name"}
          type={"text"}
          onChange={(e) =>
            props.handleChange({ ...jobData, name: e.target.value })
          }
        />
      </div>

      <div className="input_contact_row">
        <TextFieldInput
          id={"header-form-email"}
          className={"input_contact_row_i-form-outer"}
          label={"Recruiter Email"}
          type={"text"}
          onChange={(e) =>
            props.handleChange({ ...jobData, email: e.target.value })
          }
        />
      </div>

      <div className="input_contact_row">
        <TextFieldInput
          id={"header-form-linkedin"}
          className={"input_contact_row_i-form-outer"}
          label={"LinkedIn"}
          type={"text"}
          onChange={(e) =>
            props.handleChange({ ...jobData, linkedIn: e.target.value })
          }
        />
      </div>

      <div className="input_contact_row">
        <TextFieldInput
          id={"header-form-other"}
          className={"input_contact_row_i-form-outer"}
          label={"Other contact"}
          type={"text"}
          onChange={(e) =>
            props.handleChange({ ...jobData, other: e.target.value })
          }
        />
      </div>

      <div className="input_contact_row">
        <MultiLineTextField
          id={"header-form-other"}
          className={"input_contact_row_i-form-alt"}
          label={"Application steps"}
          type={"text"}
          handleChange={handleChange}
          value={jobData.applicationSteps}
        />
      </div>
    </div>
  );
}

export default InputFormContactDetails;
