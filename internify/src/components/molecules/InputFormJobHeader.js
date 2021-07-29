import React from "react";
import TextFieldInput from "../atoms/TextFieldInput";
import "./styles/InputFormJobHeader.css";

function InputFormJobHeader(props) {
  const data = props.jobData;
  const handleChange = props.handleChange;

  return (
    <form className="input_title_form">
      <div className="input_title_row">
        <TextFieldInput
          id={"header-form-title"}
          className={"i-form-outer"}
          label={"Job Title"}
          type={"text"}
          onChange={(e) => handleChange({...data, title: e.target.value})}
          onBlur={() => props.updateKeysText("title", data)}
          defaultValue={data.title}
        />
      </div>
      <div className="input_title_row">
        <TextFieldInput
          id={"header-form-company"}
          className={"i-form-outer"}
          label={"Company"}
          type={"text"}
          onChange={(e) => handleChange({...data, company: e.target.value})}
          onBlur={() => props.updateKeysText("company", data)}
          defaultValue={data.company}
        />
      </div>
      <div className="input_title_row">
        <div className="input_title_col">
          <TextFieldInput
            id={"header-form-location"}
            className={"i-form-inner"}
            label={"Location"}
            type={"text"}
            onChange={(e) => handleChange({...data, location: e.target.value})}
            onBlur={() => props.updateKeysText("location", data)}
            defaultValue={data.location}
          />
        </div>
        <div className="input_title_col">
          <TextFieldInput
            id={"header-form-date"}
            className={"i-form-inner"}
            label={"Start Date"}
            type={"date"}
            onChange={(e) => handleChange({...data, startDate: e.target.value})}
            onBlur={() => props.updateKeysText("startDate", data)}
            defaultValue={data.startDate}
          />
        </div>
      </div>
    </form>
  );
}

export default InputFormJobHeader;

