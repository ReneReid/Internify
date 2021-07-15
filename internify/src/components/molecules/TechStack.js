import React from "react";
import { TextField, FormHelperText, Container } from "@material-ui/core";
import CheckBox from "../atoms/CheckBox";
import "./styles/TechStack.css";

const TechStack = (props) => {
  let jobData = props.jobData;
  const handleChange = props.handleChange;
  const languages = props.languages;
  const frameworks = props.frameworks;
  const workTools = props.workTools;
  const csConcepts = props.csConcepts;

  function handleLanguageChange(event) {
    jobData.languages.push(event.target.name);
    handleChange({ ...jobData, languages: jobData.languages });
  }

  function handleFrameworksChange(event) {
    jobData.frameworks.push(event.target.name);
    handleChange({ ...jobData, frameworks: jobData.frameworks });
  }

  function handleWorkToolsChange(event) {
    jobData.tools.push(event.target.name);
    handleChange({ ...jobData, tools: jobData.tools });
  }

  function handleConceptsChange(event) {
    jobData.concepts.push(event.target.name);
    handleChange({ ...jobData, concepts: jobData.concepts });
  }

  return (
    <React.Fragment>
      <h2>Tech stack</h2>
      <div className="tech_stack_container">
        <h3>Coding Languages*</h3>
        <div className="tech_stack_checkbox_container">
          <Container maxWidth="md" style={{ padding: "0em" }}>
          {languages.map((x) => {
            return (
              <CheckBox key={x} name={x} label={x} onChange={handleLanguageChange} />
            );
          })}
          <FormHelperText>Required</FormHelperText>
          </Container>
        </div>
        <TextField id="languages" label="Custom..." variant="filled" />
      </div>
      <div className="tech_stack_container">
        <h3>Frameworks*</h3>
        <div className="tech_stack_checkbox_container">
        <Container maxWidth="md" style={{ padding: "0em" }}>
          {frameworks.map((x) => {
            return (
              <CheckBox key={x} name={x} label={x} onChange={handleFrameworksChange} />
            );
          })}
          <FormHelperText>Required</FormHelperText>
        </Container>
        </div>
        <TextField id="languages" label="Custom..." variant="filled" />
      </div>
      <div className="tech_stack_container">
        <h3>Work Tools and Others*</h3>
        <div className="tech_stack_checkbox_container">
        <Container maxWidth="md" style={{ padding: "0em" }}>
        {workTools.map((x) => {
            return (
              <CheckBox key={x} name={x} label={x} onChange={handleWorkToolsChange} />
            );
          })}
          <FormHelperText>Required</FormHelperText>
        </Container>
        </div>
        <TextField id="languages" label="Custom..." variant="filled" />
      </div>
      <div className="tech_stack_container">
        <h3>Computer Science Concepts</h3>
        <div className="tech_stack_checkbox_container">
        <Container maxWidth="md" style={{ padding: "0em" }}>
        {csConcepts.map((x) => {
            return (
              <CheckBox key={x} name={x} label={x} onChange={handleConceptsChange} />
            );
          })}
          <FormHelperText>Required</FormHelperText>
        </Container>
        </div>
        <TextField id="languages" label="Custom..." variant="filled" />
      </div>
    </React.Fragment>
  );
};

export default TechStack;
