import TextFieldInput from "../atoms/TextFieldInput";
import React from "react";
import "./styles/InputFormJobHeader.css";

function InputFormJobHeader(props) {

  const data = props.jobData;

  return (
    <form className="input_title_form">
      <div className="input_title_row">
        <TextFieldInput
          id={"header-form-title"}
          className={"i-form-outer"}
          label={"Job Title"}
          type={"text"}
          onChange={(e) => props.handle({...data, title: e.target.value})}
        />
      </div>
      <div className="input_title_row">
        <TextFieldInput
          id={"header-form-company"}
          className={"i-form-outer"}
          label={"Company"}
          type={"text"}
          onChange={(e) => props.handle({...data, company: e.target.value})}
        />
      </div>
      <div className="input_title_row">
        <div className="input_title_col">
          <TextFieldInput
            id={"header-form-location"}
            className={"i-form-inner"}
            label={"Location"}
            type={"text"}
            onChange={(e) => props.handle({...data, location: e.target.value})}
          />
        </div>
        <div className="input_title_col">
          <TextFieldInput
            id={"header-form-date"}
            className={"i-form-inner"}
            label={"Start Date"}
            type={"date"}
            onChange={(e) => props.handle({...data, startDate: e.target.value})}
          />
        </div>
      </div>
    </form>
  );
}

export default InputFormJobHeader;