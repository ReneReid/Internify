import React from "react";
import TextFieldInput from "../atoms/TextFieldInput";
import "./styles/InputFormJobHeader.css";

function InputFormJobHeader(props) {
  const jobData = props.jobData;
  const handleChange = props.handleChange;

  return (
    <form className="input_title_form">
      <div className="input_title_row">
        <TextFieldInput
          id={"header-form-title"}
          className={"i-form-outer"}
          label={"Job Title"}
          type={"text"}
          onChange={(e) => handleChange({...jobData, title: e.target.value})}
          onBlur={() => props.updateKeysText("title", jobData)}
          defaultValue={jobData.title}
        />
      </div>
      <div className="input_title_row">
        <TextFieldInput
          id={"header-form-company"}
          className={"i-form-outer"}
          label={"Company"}
          type={"text"}
          onChange={(e) => handleChange({...jobData, company: e.target.value})}
          onBlur={() => props.updateKeysText("company", jobData)}
          defaultValue={jobData.company}
        />
      </div>
      <div className="input_title_row">
        <div className="input_title_col">
          <TextFieldInput
            id={"header-form-location"}
            className={"i-form-inner"}
            label={"Location"}
            type={"text"}
            onChange={(e) => handleChange({...jobData, location: e.target.value})}
            onBlur={() => props.updateKeysText("location", jobData)}
            defaultValue={jobData.location}
          />
        </div>
        <div className="input_title_col">
          <TextFieldInput
            id={"header-form-date"}
            className={"i-form-inner"}
            label={"Start Date"}
            type={"date"}
            onChange={(e) => handleChange({...jobData, startDate: e.target.value})}
            onBlur={() => props.updateKeysText("startDate", jobData)}
            defaultValue={jobData.startDate}
          />
        </div>
      </div>
    </form>
  );
}

export default InputFormJobHeader;

