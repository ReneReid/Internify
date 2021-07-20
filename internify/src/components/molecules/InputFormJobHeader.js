import React from "react";
import TextFieldInput from "../atoms/TextFieldInput";
import "./styles/InputFormJobHeader.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateRegKeys } from "../../store/actions/jobPostActions";

function InputFormJobHeader(props) {
  const data = props.jobData;
  const handleChange = props.handleChange;

  function updateKeys(v){
    if(props.keysList.includes(v)){
      props.actions.updateRegKeys(v, data[v]);
    }
  }

  return (
    <form className="input_title_form">
      <div className="input_title_row">
        <TextFieldInput
          id={"header-form-title"}
          className={"i-form-outer"}
          label={"Job Title"}
          type={"text"}
          onChange={(e) => handleChange({...data, title: e.target.value})}
          onBlur={() => updateKeys("title")}
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
          onBlur={() => updateKeys("company")}
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
            onBlur={() => updateKeys("location")}
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
            onBlur={() => updateKeys("startDate")}
            defaultValue={data.startDate}
          />
        </div>
      </div>
    </form>
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

export default connect(mapStateToProps, matchDispatchToProps)(InputFormJobHeader);

