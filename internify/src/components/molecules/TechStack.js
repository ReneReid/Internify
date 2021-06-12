import React from "react";
import { TextField } from "@material-ui/core";
import CheckBox from "../atoms/CheckBox";
import "./styles/TechStack.css";

const TechStack = (props) => {
  const languages = props.languages;
  const frameworks = props.frameworks;
  const workTools = props.workTools;
  const csConcepts = props.csConcepts;

  return (
    <React.Fragment>
      <h2>Tech stack</h2>
      <div className="tech_stack_container">
        <h3>Coding Languages*</h3>
        <div className="tech_stack_checkbox_container">
          {languages.map((x) => {
            return <CheckBox name={x} label={x} />;
          })}
        </div>
        <TextField id="languages" label="Custom..." variant="filled" />
      </div>
      <div className="tech_stack_container">
        <h3>Frameworks*</h3>
        <div className="tech_stack_checkbox_container">
          {frameworks.map((x) => {
            return <CheckBox name={x} label={x} />;
          })}
        </div>
        <TextField id="languages" label="Custom..." variant="filled" />
      </div>
      <div className="tech_stack_container">
        <h3>Work Tools and Others*</h3>
        <div className="tech_stack_checkbox_container">
          {workTools.map((x) => {
            return <CheckBox name={x} label={x} />;
          })}
        </div>
        <TextField id="languages" label="Custom..." variant="filled" />
      </div>
      <div className="tech_stack_container">
        <h3>Computer Science Concepts</h3>
        <div className="tech_stack_checkbox_container">
          {csConcepts.map((x) => {
            return <CheckBox name={x} label={x} />;
          })}
        </div>
        <TextField id="languages" label="Custom..." variant="filled" />
      </div>
    </React.Fragment>
  );
};

export default TechStack;
