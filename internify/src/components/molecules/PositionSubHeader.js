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
      props.handleKeysChange([...props.keysData, l]);
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

export default PositionSubHeader;
