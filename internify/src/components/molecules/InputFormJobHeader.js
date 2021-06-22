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
          defaultValue={"Front-End Developer"}
          type={"text"}
          onChange={(e) => props.handle({...data, jobTitle: e.target.value})}
        />
      </div>
      <div className="input_title_row">
        <TextFieldInput
          id={"header-form-company"}
          className={"i-form-outer"}
          label={"Company"}
          defaultValue={"Astra Galatica Technologies"}
          type={"text"}
          onChange={(e) => props.handle({...data, companyName: e.target.value})}
        />
      </div>
      <div className="input_title_row">
        <div className="input_title_col">
          <TextFieldInput
            id={"header-form-location"}
            className={"i-form-inner"}
            label={"Location"}
            defaultValue={"Vancouver, BC"}
            type={"text"}
            onChange={(e) => props.handle({...data, companyAddress: e.target.value})}
          />
        </div>
        <div className="input_title_col">
          <TextFieldInput
            id={"header-form-date"}
            className={"i-form-inner"}
            label={"Start Date"}
            type={"date"}
            defaultValue={"2021-05-24"}
            onChange={(e) => props.handle({...data, startDate: e.target.value})}
          />
        </div>
      </div>
    </form>
  );
}

export default InputFormJobHeader;