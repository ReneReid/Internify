import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  CreateJobHeader,
  ContactDetails,
  TechRequirements,
  JobDetail,
  Review,
} from "./CreateJobPosting/index";
import Feedback from "../organisms/Feedback";
import { ButtonClear, ButtonFilled } from "../atoms/index";
import { Container, makeStyles, Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { ChevronLeft } from "@material-ui/icons";
import { mockJobDetailData } from "../../models/mockData";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStudents } from "../../store/actions/studentActions";
import { editJobsData } from "../../store/actions/jobPostActions";
import "./styles/Create.css";
import { processMatches } from "../../store/actions/matchesActions";
import axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";
import { createJobObject, checkIfEmpty } from "../../effects/filter.effects";

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
  4: "contact",
};

// modify this so that it fits the "edit" paradigm
function Edit(props) {
  let { slug } = useParams();
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState(false);
  const [jobData, setJobData] = useState(null);



  useEffect(() => {
    axios
      .get(`/api/jobs/${slug}`)
      .then((res) => setJobData(res.data))
      .then(() => console.log(jobData))
      .catch((err) => console.error(err));
  }, [slug]);


  // Grab all students from database
  const user = firebase.auth().currentUser;
  const allStudents = useSelector((state) => state.students.studentList);
  const page1Object = useSelector((state) => state.matches.page1Object);
  const page2Object = useSelector((state) => state.matches.page2Object);

  function editJob(data, jobId, props) {
    props.actions.editJobsData(data);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    props.actions.getStudents();
  }, [props.actions]);

  function updateStore() {
    // dispatch to matches reducer
    window.scrollTo(0, 0);
    const curr = currStep[currentStep];

    if (!checkIfEmpty(curr, jobData)) {
      setError(false);

      props.actions.editJobsData(jobData);
      const posting = createJobObject(jobData);

      if (currentStep === 1) {
        props.actions.processMatches({
          students: allStudents,
          posting: posting,
          page: currentStep,
        });
      }

      if (currentStep === 2) {
        props.actions.processMatches({
          students: page1Object.page1Students,
          posting: posting,
          page: currentStep,
        });
      }

      if (currentStep === 3) {
        props.actions.processMatches({
          students: page2Object.page2Students,
          posting: posting,
          page: currentStep,
        });
      }

      setCurrentStep(currentStep + 1);

      window.scrollTo(0, 0);
    } else {
      setError(true);
    }
  }

  return jobData ? (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justifyContent="flex-end"
      >
        <Grid item xs={2}>
          <Grid
            container
            justifyContent="flex-end"
            style={{ paddingTop: "1em" }}
          >
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
            title={"1. Edit Job Header"}
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
          <Review currentStep={currentStep} jobData={jobData} user={user} onSubmit={editJob} />
          {currentStep < 5 ? (
            <Container maxWidth="md">
              <ButtonFilled onClick={() => updateStore()}>
                Continue
              </ButtonFilled>
            </Container>
          ) : null}
          {error && (
            <div>
              <Container maxWidth="md" className={"form_validation_error"}>
                <Alert variant="outlined" severity="error">
                  Please Fill Out All Required Fields
                </Alert>
              </Container>
            </div>
          )}
        </Grid>
        <Grid item xs={3}>
          <Feedback page={currentStep} />
        </Grid>
      </Grid>
    </div>
  ) : (null);
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
    students: state.students,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        editJobsData: editJobsData,
        processMatches: processMatches,
        getStudents: getStudents,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Edit);
