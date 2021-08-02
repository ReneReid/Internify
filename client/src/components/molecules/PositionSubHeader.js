import CheckBox from "../atoms/CheckBox";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateCheckBox } from "../../store/actions/jobPostActions";

function PositionSubHeader(props) {
  const data = props.jobData;
  const checked = props.jobs.checkedBoxes;

  const handleChange = (e, v, l) => {
    props.actions.updateCheckBox(e.target.name);
    filterChecked(e);
    props.updateKeysList(e, v, l);
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

  return (
    <div>
      <div>
        <h3>Position</h3>
        <CheckBox
          name={"Internship"}
          label={"Internship"}
          onChange={(e) => handleChange(e, "position", "Internship")}
          checked={checked.Internship}
        />
        <CheckBox
          name={"Coop"}
          label={"Co-op"}
          onChange={(e) => handleChange(e, "position", "Co-op")}
          checked={checked.Coop}
        />
        <CheckBox
          name={"NewGrad"}
          label={"New Grad"}
          onChange={(e) => handleChange(e, "position", "New Grad")}
          checked={checked.NewGrad}
        />
        <CheckBox
          name={"PartTime"}
          label={"Part-time"}
          onChange={(e) => handleChange(e, "position", "Part-time")}
          checked={checked.PartTime}
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
        updateCheckBox: updateCheckBox
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(PositionSubHeader);
