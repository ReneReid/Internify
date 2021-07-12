import React, { useEffect, useState } from "react";
import { Container, Slider } from "@material-ui/core";
import { Stepper, TechStack } from "../../molecules/index";
import RadioButtonsGroup from "../../molecules/RadioButtonsGroup";
import "./styles/TechRequirements.css";

const workExpData = [
  "none",
  "≥ 4 months",
  "≥ 8 months",
  "≥ 12 months",
  "≥ 2 years",
];

const WorkingExperience = (props) => {
  return (
    <React.Fragment>
      <h3>Years of working experience</h3>
      <RadioButtonsGroup
        data={workExpData}
        jobData={props.jobData}
        property={"experience"}
      />
    </React.Fragment>
  );
};

const GradePoint = (props) => {
  const marks = [
    {
      value: 50,
      label: "≥ 50%",
    },
    {
      value: 60,
      label: "≥ 60%",
    },
    {
      value: 70,
      label: "≥ 70%",
    },
    {
      value: 80,
      label: "≥ 80%",
    },
    {
      value: 90,
      label: "≥ 90%",
    },
    {
      value: 100,
      label: "100%",
    },
  ];

  const gpaData = ["Required", "Optional"];

  return (
    <React.Fragment>
      <h3>GPA</h3>
      <div className="gpa_radio">
        <RadioButtonsGroup
          data={gpaData}
          jobData={props.jobData.requirements}
          property={"isGpaRequired"}
        />
      </div>
      <div className="gpa_slider">
        <Slider
          defaultValue={50}
          aria-labelledby="discrete-slider-always"
          step={1}
          min={50}
          max={100}
          marks={marks}
          valueLabelDisplay="on"
        />
      </div>
    </React.Fragment>
  );
};

function TechRequirements(props) {
  const data = props.data;
  const [requirements, setRequirements] = useState({
    experience: "",
    gpa: "",
    gpaValue: "",
    languages: [],
    frameworks: [],
    tools: [],
    concepts: [],
  });

  useEffect(() => {
    props.jobData.requirements = requirements;
  });

  if (props.currentStep !== 2) {
    return null;
  } else {
    return (
      <div className="create_form_container">
        <Container maxWidth="md">
          <Stepper stepNumber={1} />
          <h1>2. Technical Requirements</h1>
          <WorkingExperience
            handleChange={setRequirements}
            jobData={requirements}
          />
          <GradePoint handle={props.handleChange} jobData={props.jobData} />
          <TechStack
            languages={data.languages}
            frameworks={data.frameworks}
            workTools={data.workTools}
            csConcepts={data.csConcepts}
            handleChange={setRequirements}
            jobData={requirements}
          />
        </Container>
      </div>
    );
  }
}

export default TechRequirements;
