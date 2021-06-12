import React from "react";
import { Container, RadioGroup, FormControl, Slider } from "@material-ui/core";
import { Stepper, TechStack } from "../../molecules/index";
import RadioButton from "../../atoms/RadioButton";
import { ButtonFilled } from "../../atoms/Button";
import "./styles/TechRequirements.css";

const WorkingExperience = () => {
  return (
    <React.Fragment>
      <h3>Years of working experience</h3>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="position-length"
          name="work-experience-radio-group"
        >
          <div>
            <RadioButton value={0} label={"none"} />
            <RadioButton value={4} label={"≥ 4 months"} />
            <RadioButton value={8} label={"≥ 8 months"} />
            <RadioButton value={12} label={"≥ 12 months"} />
            <RadioButton value={24} label={"≥ 2 years"} />
          </div>
        </RadioGroup>
      </FormControl>
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

  return (
    <React.Fragment>
      <h3>GPA</h3>
      <div className="gpa_radio">
        <RadioButton value={false} label={"Required"} />
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

  return (
    <div className="Create">
      <Container maxWidth="md" style={{ padding: "0 10em" }}>
        <Stepper stepNumber={1} />
        <h1>2. Technical Requirements</h1>
        <WorkingExperience />
        <GradePoint />
        <TechStack
          languages={data.languages}
          frameworks={data.frameworks}
          workTools={data.workTools}
          csConcepts={data.csConcepts}
        />
        <ButtonFilled>Continue</ButtonFilled>
      </Container>
    </div>
  );
}

export default TechRequirements;
