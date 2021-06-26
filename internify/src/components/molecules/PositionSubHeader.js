import CheckBox from "../atoms/CheckBox";
import React from "react";
import { useState } from "react";

function PositionSubHeader(props) {
  const data = props.jobData;
  const [state, setCheckedState] = useState({
    Internship: false,
    Coop: false,
    NewGrad: false,
    PartTime: false,
  });

  const handleChange = (event) => {
    setCheckedState({ ...state, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      data.position.push(event.target.name);
    } else {
      if (data.position.includes(event.target.name)) {
        data.position = data.position.filter(
          (obj) => obj !== event.target.name
        );
      }
    }
  };

  return (
    <div>
      <div>
        <h3>Position</h3>
        <CheckBox
          name={"Internship"}
          label={"Internship"}
          onChange={handleChange}
          checked={state.Internship}
        />
        <CheckBox
          name={"Coop"}
          label={"Co-op"}
          onChange={handleChange}
          checked={state.Coop}
        />
        <CheckBox
          name={"NewGrad"}
          label={"New Grad"}
          onChange={handleChange}
          checked={state.NewGrad}
        />
        <CheckBox
          name={"PartTime"}
          label={"Part-time"}
          onChange={handleChange}
          checked={state.PartTime}
        />
      </div>
    </div>
  );
}

export default PositionSubHeader;
