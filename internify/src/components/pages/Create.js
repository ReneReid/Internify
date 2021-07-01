import React from "react";
import "./styles/Create.css";
import CreateJobHeader from "./CreateJobPosting/CreateJobHeader";
import TechRequirements from "./CreateJobPosting/TechRequirements";
import JobDetail from "./CreateJobPosting/JobDetail";
import Review from "./CreateJobPosting/Review";
import ContactDetails from "./CreateJobPosting/ContactDetails";
import { ButtonFilled } from "../atoms";
import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addJobsData } from "../../store/actions/jobPostActions";
import { Container, Grid } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { mockJobDetailData } from "../../models/mockData";
import { makeStyles } from '@material-ui/core/styles';

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
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Create(props) {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(1);
  const [jobData, setJobData] = useState({
    id: uuidv4(),
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
      gpa: "",
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

  function updateStore() {
    setCurrentStep(currentStep + 1);
    props.actions.addJobsData(jobData);
    console.log(jobData);
    // Redirects view to top
    window.scrollTo(0,0);
  }

  return (
    <div className={classes.root} >
      <Grid container direction="row" alignItems="flex-start" justify="flex-end">
        <Grid item xs={1}>
          <Grid container justify="flex-end" >
          <ButtonFilled onClick={() => setCurrentStep(currentStep - 1)}>
          Back
        </ButtonFilled>
          </Grid>
        </Grid>
        <Grid item xs={8} style={{padding: "0 5em 0 0"}}>
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
        <Review 
        currentStep={currentStep}
        jobData={jobData}
        />
      {currentStep < 5 ? (
        <Container maxWidth="md" style={{ padding: "0 10em" }}>
          <ButtonFilled onClick={() => updateStore()}>Continue</ButtonFilled>
        </Container>
      ) : (null) }
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
    jobs: state.jobs,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addJobsData: addJobsData }, dispatch),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Create);
