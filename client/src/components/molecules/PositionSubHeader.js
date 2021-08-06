import { useState } from "react";
import CheckBox from "../atoms/CheckBox";
import React from "react";

function PositionSubHeader(props) {
  const jobData = props.jobData;
  const [checkedState, setCheckedState] = useState(false);
 
  const handleChange = (e, v, l) => {
    setCheckedState(!checkedState);
    filterChecked(e);
    props.updateKeysList(e, v, l);
  };

  function filterChecked(e){
    if (e.target.checked) {
      jobData.position.push(e.target.name);
    } else {
      if (jobData.position.includes(e.target.name)) {
        jobData.position = jobData.position.filter(
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
          checked={jobData.position.includes("Internship") ? true : false}
        />
        <CheckBox
          name={"Coop"}
          label={"Co-op"}
          onChange={(e) => handleChange(e, "position", "Co-op")}
          checked={jobData.position.includes("Coop") ? true : false}
        />
        <CheckBox
          name={"NewGrad"}
          label={"New Grad"}
          onChange={(e) => handleChange(e, "position", "New Grad")}
          checked={jobData.position.includes("NewGrad") ? true : false}
        />
        <CheckBox
          name={"PartTime"}
          label={"Part-time"}
          onChange={(e) => handleChange(e, "position", "Part-time")}
          checked={jobData.position.includes("PartTime") ? true : false}
        />
      </div>
    </div>
  );
}


export default PositionSubHeader;
