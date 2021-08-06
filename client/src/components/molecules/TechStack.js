import React, { useState } from "react";
import { TextField, FormHelperText, Container } from "@material-ui/core";
import CheckBox from "../atoms/CheckBox";
import "./styles/TechStack.css";

const TechStack = (props) => {
  let jobData = props.jobData;
  const languages = props.languages;
  const frameworks = props.frameworks;
  const workTools = props.workTools;
  const csConcepts = props.csConcepts;
  const [checkedLangState, setCheckedLangState] = useState(false);
  const [checkedFrameState, setCheckedFrameState] = useState(false);
  const [checkedToolsState, setCheckedToolsState] = useState(false);
  const [checkedConceptState, setCheckedConceptState] = useState(false);


  function handleLanguageChange(event, val, label) {
    setCheckedLangState(!checkedLangState);
    props.updateKeysList(event, val, label);
    if (event.target.checked) {
      jobData.languages.push(event.target.name);
    } else {
      if (jobData.languages.includes(event.target.name)) {
        jobData.languages = jobData.languages.filter(
          (obj) => obj !== event.target.name
        );
      }
    }
  }

  function handleFrameworksChange(event, val, label) {
    setCheckedFrameState(!checkedFrameState);
    props.updateKeysList(event, val, label);
    if (event.target.checked) {
      jobData.frameworks.push(event.target.name);
    } else {
      if (jobData.frameworks.includes(event.target.name)) {
        jobData.frameworks = jobData.frameworks.filter(
          (obj) => obj !== event.target.name
        );
      }
    }
  }

  function handleWorkToolsChange(event, val, label) {
    setCheckedToolsState(!checkedToolsState);
    props.updateKeysList(event, val, label);
    if (event.target.checked) {
      jobData.tools.push(event.target.name);
    } else {
      if (jobData.tools.includes(event.target.name)) {
        jobData.tools = jobData.tools.filter(
          (obj) => obj !== event.target.name
        );
      }
    }
  }

  function handleConceptsChange(event, val, label) {
    setCheckedConceptState(!checkedConceptState);
    props.updateKeysList(event, val, label);
    if (event.target.checked) {
      jobData.concepts.push(event.target.name);
    } else {
      if (jobData.concepts.includes(event.target.name)) {
        jobData.concepts = jobData.concepts.filter(
          (obj) => obj !== event.target.name
        );
      }
    }
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
                <CheckBox
                  key={x}
                  name={x}
                  label={x}
                  onChange={(e) => handleLanguageChange(e, "languages", x)}
                  checked={jobData.languages.includes(x) ? true : false}
                />
              );
            })}
          </Container>
        </div>
        <FormHelperText>Required</FormHelperText>
      </div>
      <div className="tech_stack_container">
        <h3>Frameworks*</h3>
        <div className="tech_stack_checkbox_container">
          <Container maxWidth="md" style={{ padding: "0em" }}>
            {frameworks.map((x) => {
              return (
                <CheckBox
                  key={x}
                  name={x}
                  label={x}
                  onChange={(e) => handleFrameworksChange(e, "frameworks", x)}
                  checked={jobData.frameworks.includes(x) ? true : false}
                />
              );
            })}
          </Container>
        </div>
        <FormHelperText>Required</FormHelperText>
      </div>
      <div className="tech_stack_container">
        <h3>Work Tools and Others*</h3>
        <div className="tech_stack_checkbox_container">
          <Container maxWidth="md" style={{ padding: "0em" }}>
            {workTools.map((x) => {
              return (
                <CheckBox
                  key={x}
                  name={x}
                  label={x}
                  onChange={(e) => handleWorkToolsChange(e, "tools", x)}
                  checked={jobData.tools.includes(x) ? true : false}
                />
              );
            })}
          </Container>
        </div>
        <FormHelperText>Required</FormHelperText>
      </div>
      <div className="tech_stack_container">
        <h3>Computer Science Concepts</h3>
        <div className="tech_stack_checkbox_container">
          <Container maxWidth="md" style={{ padding: "0em" }}>
            {csConcepts.map((x) => {
              return (
                <CheckBox
                  key={x}
                  name={x}
                  label={x}
                  onChange={(e) => handleConceptsChange(e, "concepts", x)}
                  checked={jobData.concepts.includes(x) ? true : false}
                />
              );
            })}
          </Container>
        </div>
        <FormHelperText>Required</FormHelperText>
      </div>
    </React.Fragment>
  );
};

export default TechStack;
