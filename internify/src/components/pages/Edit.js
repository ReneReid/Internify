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

  function parseConcepts(concepts) {
    let parsedConcepts = [];
    for (let i = 0; i < concepts.length; i++) {
      if (concepts[i] === "Object Oriented Programming") {
        parsedConcepts.push("Object-Oriented Programming");
      } else {
        parsedConcepts.push(concepts[i]);
      }
    }
    return parsedConcepts;
  }

  function parseExperience(experience) {
    if (experience === "none") {
      return 0;
    } else {
      const expArray = experience.split(" ");
      return parseInt(expArray[1]);
    }
  }

  function parseCitizenshipReqs(candidates) {
    let reqs = [];
    // anyone case
    if (candidates === "Anyone") {
      reqs = ["Anyone"]; // always return true in checker for this!
      return reqs;
    } else {
      // logic-handling for other cases
      const expArray = candidates.split(" ");
      if (expArray.includes("Citizens") && expArray.includes("PR")) {
        reqs = ["Citizen", "Permanent Residency"];
        return reqs;
      }
      if (expArray.includes("Citizens")) {
        reqs = ["Citizen"];
        return reqs;
      }
      reqs = ["Citizen", "Permanent Residency", "International"];
      return reqs;
    }
  }

  function parseCoopReqs(coOp) {
    if (coOp === "Yes") {
      return true;
    } else {
      return false;
    }
  }

  function parseLanguages(languages) {
    let editedLanguages = [];
    for (let i = 0; i < languages.length; i++) {
      if (languages[i] === "C++") {
        editedLanguages.push("Cpp");
        editedLanguages.push("C++");
      } else if (languages[i] === "Cpp") {
        editedLanguages.push("C++");
        editedLanguages.push("Cpp");
      } else {
        editedLanguages.push(languages[i]);
      }
    }
    return editedLanguages;
  }

  function editJobObject(jobPosting) {
    // parsing functions
    const experience = parseExperience(jobPosting.requirements.experience);
    const candidates = parseCitizenshipReqs(jobPosting.details.candidates);
    const coOp = parseCoopReqs(jobPosting.details.coOp);
    const concepts = parseConcepts(jobPosting.requirements.concepts);
    const languages = parseLanguages(jobPosting.requirements.languages);

    return {
      jobId: jobPosting.jobId,
      experience: experience,
      gpa: jobPosting.requirements.gpa,
      gpaValue: jobPosting.requirements.gpaValue,
      languages: languages,
      frameworks: jobPosting.requirements.frameworks,
      tools: jobPosting.requirements.tools,
      concepts: concepts,
      candidates: candidates,
      academicReq: jobPosting.details.academicReq,
      coOp: coOp,
    };
  }
  function checkIfEmpty(obj) {
    const sub = jobData[obj];
    for (var key in sub) {
      const currVal = sub[key];
      if (currVal === "" || currVal.length === 0) {
        return true;
      }
    }
    return false;
  }

  useEffect(() => {
    props.actions.getStudents();
  }, [props.actions]);

  function updateStore() {
    // dispatch to matches reducer
    window.scrollTo(0, 0);
    const curr = currStep[currentStep];

    if (!checkIfEmpty(curr)) {
      setError(false);

      props.actions.editJobsData(jobData);
      const posting = editJobObject(jobData);

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
            pathway={"edit"}
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
          <Review currentStep={currentStep} jobData={jobData} user={user} />
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