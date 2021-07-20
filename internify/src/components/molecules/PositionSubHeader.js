import CheckBox from "../atoms/CheckBox";
import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateRegKeys } from "../../store/actions/jobPostActions";

function PositionSubHeader(props) {
  const data = props.jobData;
  const [state, setCheckedState] = useState({
    Internship: false,
    Coop: false,
    NewGrad: false,
    PartTime: false,
  });

  const handleChange = (e, v, l) => {
    setCheckedState({ ...state, [e.target.name]: e.target.checked });
    filterChecked(e);
    updateKeys(v, l);
  };

  function filterChecked(e){
    if (e.target.checked) {
      data.position.push(e.target.name);
    } else {
      if (data.position.includes(e.target.name)) {
        data.position = data.position.filter(
          (obj) => obj !== e.target.name
        );
      }
    }
  }

  function updateKeys(v, l){
    if(props.keysList.includes(v)){
      if(props.jobs.registeredKeys.hasOwnProperty(v)){
        props.actions.updateRegKeys(v, [...props.jobs.registeredKeys[v], l]);
      } else {
        props.actions.updateRegKeys(v, [l]);
      }
    }
  }

  return (
    <div>
      <div>
        <h3>Position</h3>
        <CheckBox
          name={"Internship"}
          label={"Internship"}
          onChange={(e) => handleChange(e, "position", "Internship")}
          checked={state.Internship}
        />
        <CheckBox
          name={"Coop"}
          label={"Co-op"}
          onChange={(e) => handleChange(e, "position", "Co-op")}
          checked={state.Coop}
        />
        <CheckBox
          name={"NewGrad"}
          label={"New Grad"}
          onChange={(e) => handleChange(e, "position", "New Grad")}
          checked={state.NewGrad}
        />
        <CheckBox
          name={"PartTime"}
          label={"Part-time"}
          onChange={(e) => handleChange(e, "position", "Part-time")}
          checked={state.PartTime}
        />
      </div>
    </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(PositionSubHeader);
