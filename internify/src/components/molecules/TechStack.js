import React from "react";
import { TextField, FormHelperText, Container } from "@material-ui/core";
import { useState } from "react";
import CheckBox from "../atoms/CheckBox";
import "./styles/TechStack.css";

const TechStack = (props) => {
  let jobData = props.jobData;
  const languages = props.languages;
  const frameworks = props.frameworks;
  const workTools = props.workTools;
  const csConcepts = props.csConcepts;

  const [langState, setLangState] = useState({
    Java: false,
    JavaScript: false,
    Cpp: false,
    C: false,
  });

  const [frameState, setFrameState] = useState({
    React: false,
    Angular: false,
    HTML: false,
    CSS: false,
  });

  const [toolsState, setToolsState] = useState({
    Jira: false,
    Asana: false,
    Confluence: false,
    Notion: false,
  });

  const [conceptsState, setConceptsState] = useState({
    ObjectOrientedProgramming: false,
    FunctionalProgramming: false,
    Recursion: false,
  });

  function handleLanguageChange(event) {
    setLangState({ ...langState, [event.target.name]: event.target.checked });
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

  function handleFrameworksChange(event) {
    setFrameState({ ...frameState, [event.target.name]: event.target.checked });
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

  function handleWorkToolsChange(event) {
    setToolsState({ ...toolsState, [event.target.name]: event.target.checked });
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

  function handleConceptsChange(event) {
    setConceptsState({
      ...conceptsState,
      [event.target.name]: event.target.checked,
    });
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
                onChange={handleLanguageChange}
                checked={langState.x}
              />
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
              <CheckBox
                key={x}
                name={x}
                label={x}
                onChange={handleFrameworksChange}
                checked={frameState.x}
              />
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
              <CheckBox
                key={x}
                name={x}
                label={x}
                onChange={handleWorkToolsChange}
                checked={toolsState.x}
              />
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
              <CheckBox
                key={x}
                name={x}
                label={x}
                onChange={handleConceptsChange}
                checked={conceptsState.x}
              />
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
