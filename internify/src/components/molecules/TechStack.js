import React from "react";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import CheckBox from "../atoms/CheckBox";
import "./styles/TechStack.css";

const TechStack = (props) => {
  let jobData = props.jobData;

  const[langState, setLangState] = useState({
    Java: false,
    JavaScript: false,
    Cpp: false,
    C: false,
  });

  const[frameState, setFrameState] = useState({
    React: false,
    Angular: false,
    HTML: false,
    CSS: false,
  });

  const[toolsState, setToolsState] = useState({
    Jira: false,
    Asana: false,
    Confluence: false,
    Notion: false,
  });

  const[conceptsState, setConceptsState] = useState({
    ObjectOrientedProgramming: false,
    FunctionalProgramming: false,
    Recursion: false,
  });


  function handleLanguageChange(event) {
    setLangState({...langState, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      jobData.languages.push(event.target.name);
    } else {
      if (jobData.languages.includes(event.target.name)) {
        jobData.languages = jobData.languages.filter(
          (obj) => obj !== event.target.name
        );
      }
    }
  };


  function handleFrameworksChange(event) {
    setFrameState({...frameState, [event.target.name]: event.target.checked});
    if (event.target.checked) {
      jobData.frameworks.push(event.target.name);
    } else {
      if (jobData.frameworks.includes(event.target.name)) {
        jobData.frameworks = jobData.frameworks.filter(
          (obj) => obj !== event.target.name
        );
      }
    }
  };


  function handleWorkToolsChange(event) {
    setToolsState({...toolsState, [event.target.name]: event.target.checked});
    if (event.target.checked) {
      jobData.tools.push(event.target.name);
    } else {
      if (jobData.tools.includes(event.target.name)) {
        jobData.tools = jobData.tools.filter(
          (obj) => obj !== event.target.name
        );
      }
    }
  };

  function handleConceptsChange(event) {
    setConceptsState({...conceptsState, [event.target.name]: event.target.checked});
    if (event.target.checked) {
      jobData.concepts.push(event.target.name);
    } else {
      if (jobData.concepts.includes(event.target.name)) {
        jobData.concepts = jobData.concepts.filter(
          (obj) => obj !== event.target.name
        );
      }
    }
  };


  return (
    <React.Fragment>
      <h2>Tech stack</h2>
      <div className="tech_stack_container">
        <h3>Coding Languages*</h3>
        <div className="tech_stack_checkbox_container">
          <CheckBox
          key={"Java"}
          name={"Java"}
          label={"Java"}
          onChange={handleLanguageChange}
          checked={langState.Java}
          />
          <CheckBox 
          key={"JavaScript"}
          name={"JavaScript"}
          label={"JavaScript"}
          onChange={handleLanguageChange}
          checked={langState.JavaScript}
          />
          <CheckBox 
          key={"Cpp"}
          name={"Cpp"}
          label={"C++"}
          onChange={handleLanguageChange}
          checked={langState.Cpp}
          />
          <CheckBox 
          key={"C"}
          name={"C"}
          label={"C"}
          onChange={handleLanguageChange}
          checked={langState.C}
          />
        </div>
        <TextField id="languages" label="Custom..." variant="filled" />
      </div>
      <div className="tech_stack_container">
        <h3>Frameworks*</h3>
        <div className="tech_stack_checkbox_container">
          <CheckBox 
          key={"React"}
          name={"React"}
          label={"React"}
          onChange={handleFrameworksChange}
          checked={frameState.React}
          />
          <CheckBox 
          key={"Angular"}
          name={"Angular"}
          label={"Angular"}
          onChange={handleFrameworksChange}
          checked={frameState.Angular}
          />
          <CheckBox 
          key={"HTML"}
          name={"HTML"}
          label={"HTML"}
          onChange={handleFrameworksChange}
          checked={frameState.HTML}
          />
          <CheckBox 
          key={"CSS"}
          name={"CSS"}
          label={"CSS"}
          onChange={handleFrameworksChange}
          checked={frameState.CSS}
          />
        </div>
        <TextField id="languages" label="Custom..." variant="filled" />
      </div>
      <div className="tech_stack_container">
        <h3>Work Tools and Others*</h3>
        <div className="tech_stack_checkbox_container">
          <CheckBox 
          key={"Jira"}
          name={"Jira"}
          label={"Jira"}
          onChange={handleWorkToolsChange}
          checked={toolsState.Jira}
          />
          <CheckBox 
          key={"Asana"}
          name={"Asana"}
          label={"Asana"}
          onChange={handleWorkToolsChange}
          checked={toolsState.Asana}
          />
          <CheckBox 
          key={"Confluence"}
          name={"Confluence"}
          label={"Confluence"}
          onChange={handleWorkToolsChange}
          checked={toolsState.Confluence}
          />
          <CheckBox 
          key={"Notion"}
          name={"Notion"}
          label={"Notion"}
          onChange={handleWorkToolsChange}
          checked={toolsState.Notion}
          />
        </div>
        <TextField id="languages" label="Custom..." variant="filled" />
      </div>
      <div className="tech_stack_container">
        <h3>Computer Science Concepts</h3>
        <div className="tech_stack_checkbox_container">
          <CheckBox 
          key={"ObjectOrientedProgramming"}
          name={"ObjectOrientedProgramming"}
          label={"Object Oriented Programming"}
          onChange={handleConceptsChange}
          checked={conceptsState.ObjectOrientedProgramming}
          />
          <CheckBox 
          key={"FunctionalProgramming"}
          name={"FunctionalProgramming"}
          label={"Functional Programming"}
          onChange={handleConceptsChange}
          checked={conceptsState.FunctionalProgramming}
          />
          <CheckBox 
          key={"Recursion"}
          name={"Recursion"}
          label={"Recursion"}
          onChange={handleConceptsChange}
          checked={conceptsState.Recursion}
          />
        </div>
        <TextField id="languages" label="Custom..." variant="filled" />
      </div>
    </React.Fragment>
  );
};

export default TechStack;
