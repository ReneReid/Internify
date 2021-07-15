import React, { useState, useEffect } from "react";
import {
  CreateJobHeader,
  ContactDetails,
  TechRequirements,
  JobDetail,
  Review,
} from "./CreateJobPosting/index";
import { ButtonClear, ButtonFilled } from "../atoms/index";
import { Container, makeStyles, Grid } from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';
import { ChevronLeft } from "@material-ui/icons";
import { v4 as uuidv4 } from "uuid";
import { mockJobDetailData } from "../../models/mockData";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStudents } from "../../store/actions/studentActions";
import "./styles/Create.css";

const mockTechStackData = {
  languages: ["Java", "JavaScript", "C++", "C"],
  frameworks: ["React", "Angular", "HTML", "CSS"],
  workTools: ["Jira", "Asana", "Confluence", "Notion"],
  csConcepts: [
    "Object Oriented Programming",
    "Functional Programming",
    "Recursion",
  ],
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "5em",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const currStep = {
  1: "header",
  2: "requirements",
  3: "details",
  4: "contact"
}

function Create(props) {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState(false);
  const [jobData, setJobData] = useState({
    id: uuidv4(), // Add an underscore at some point (all instances of id across all objects and files)
    header: {
      title: "",
      company: "",
      location: "",
      startDate: "",
      position: [],
      length: "",
    },
    requirements: {
      experience: "",
      isGpaRequired: "",
      gpaValue: "",
      languages: [],
      frameworks: [],
      tools: [],
      concepts: [],
    },
    details: {
      description: "",
      position: "",
      pay: "",
      candidates: "",
      academicReq: [],
      coOp: "",
    },
    contact: {
      name: "",
      email: "",
      linkedIn: "",
      other: "",
      applicationSteps: "",
    },
  });

  function checkIfEmpty(obj){
    const sub = jobData[obj];
    for (var key in sub) {
      const currVal = sub[key];
      if(currVal === "" || currVal.length === 0){
        return true;
      }
    }
    return false;
  }

  useEffect(() => {
    props.actions.getStudents();
  }, [props.actions]);

  function updateStore() {
    const curr = currStep[currentStep];
    if(!checkIfEmpty(curr)){

      setError(false);
      setCurrentStep(currentStep + 1);
      console.log(jobData);
      
      window.scrollTo(0, 0);
    } else {
      setError(true);
    }
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justify="flex-end"
      >
        <Grid item xs={2}>
          <Grid container justify="flex-end" style={{ paddingTop: "1em" }}>
            {currentStep > 1 ? (
              <ButtonClear
                onClick={() => setCurrentStep(currentStep - 1)}
                startIcon={<ChevronLeft />}
              >
                Back
              </ButtonClear>
            ) : null}
          </Grid>
        </Grid>
        <Grid item xs={7} style={{ padding: "0 5em" }}>
          <CreateJobHeader
            currentStep={currentStep}
            handleChange={setJobData}
            jobData={jobData}
          />
          <TechRequirements
            currentStep={currentStep}
            handleChange={setJobData}
            jobData={jobData}
            data={mockTechStackData}
          />
          <JobDetail
            currentStep={currentStep}
            handleChange={setJobData}
            jobData={jobData}
            data={mockJobDetailData}
          />
          <ContactDetails
            currentStep={currentStep}
            handleChange={setJobData}
            jobData={jobData}
            data={mockJobDetailData}
          />
          <Review currentStep={currentStep} jobData={jobData} />
          {currentStep < 5 ? (
            <Container maxWidth="md">
              <ButtonFilled onClick={() => updateStore()}>
                Continue
              </ButtonFilled>
            </Container>
          ) : null}
          {error && 
            <div>
            <Container maxWidth="md" className={"form_validation_error"}>
              <Alert variant="outlined" severity="error">
                Please Fill Out All Required Fields
              </Alert>
            </Container>
            </div>}
        </Grid>
        <Grid item xs={3}>
          <h4>Hello</h4>
        </Grid>
      </Grid>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    students: state.students,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getStudents: getStudents }, dispatch),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Create);
