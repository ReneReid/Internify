import React, { useState, useEffect } from "react";
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
import RegisteredKeys from "../molecules/RegisteredKeys";
import { Container, makeStyles, Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { ChevronLeft } from "@material-ui/icons";
import { v4 as uuidv4 } from "uuid";
import { mockJobDetailData } from "../../models/mockData";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStudents } from "../../store/actions/studentActions";
import {
  addJobsData,
  resetKey,
  updateRegKeys,
} from "../../store/actions/jobPostActions";
import { processMatches } from "../../store/actions/matchesActions";
import firebase from "firebase/app";
import "firebase/auth";
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
  4: "contact",
};

const chipsList = [
  "title",
  "position",
  "location",
  "experience",
  "languages",
  "frameworks",
  "tools",
  "concepts",
  "pay",
  "candidates",
  "academicReq",
  "positionType",
];

function Create(props) {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState(false);
  const registeredKeys = props.jobs.registeredKeys;

  const [jobData, setJobData] = useState({
    jobId: uuidv4(),
    dateCreated: "",
    dateUpdated: "",
    matches: 0,
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
      positionType: "",
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
  const user = firebase.auth().currentUser;

  // Grab all students from database
  const allStudents = props.students.studentList;
  const page1Object = props.matches.page1Object;
  const page2Object = props.matches.page2Object;

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

  function createJobObject(jobPosting) {
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

  function updateKeysList(event, key, label) {
    if (chipsList.includes(key)) {
      if (registeredKeys.hasOwnProperty(key)) {
        if (event.target.checked && !registeredKeys[key].includes(label)) {
          props.actions.updateRegKeys(key, [...registeredKeys[key], label]);
        } else {
          if (registeredKeys[key].includes(label)) {
            registeredKeys[key] = registeredKeys[key].filter(
              (obj) => obj !== label
            );
            props.actions.updateRegKeys(key, registeredKeys[key]);
          }
        }
      } else {
        props.actions.updateRegKeys(key, [label]);
      }
    }
  }

  function updateKeysText(v, data) {
    if (chipsList.includes(v)) {
      props.actions.updateRegKeys(v, data[v]);
    }
  }

  useEffect(() => {
    props.actions.getStudents();
    return () => {
      props.actions.resetKey();
    };
  }, [props.actions]);

  function updateStore() {
    // dispatch to matches reducer
    window.scrollTo(0, 0);
    const curr = currStep[currentStep];

    if (!checkIfEmpty(curr)) {
      setError(false);

      props.actions.addJobsData(jobData);
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

  return (
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
            keysList={chipsList}
            updateKeysList={updateKeysList}
            updateKeysText={updateKeysText}
          />
          <TechRequirements
            currentStep={currentStep}
            handleChange={setJobData}
            jobData={jobData}
            data={mockTechStackData}
            keysList={chipsList}
            updateKeysList={updateKeysList}
            updateKeysText={updateKeysText}
          />
          <JobDetail
            currentStep={currentStep}
            handleChange={setJobData}
            jobData={jobData}
            data={mockJobDetailData}
            keysList={chipsList}
            updateKeysList={updateKeysList}
            updateKeysText={updateKeysText}
          />
          <ContactDetails
            currentStep={currentStep}
            handleChange={setJobData}
            jobData={jobData}
            data={mockJobDetailData}
            keysList={chipsList}
            updateKeysList={updateKeysList}
            updateKeysText={updateKeysText}
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
          {Object.keys(props.jobs.registeredKeys).length > 0 ? (
            <>
              <h2 className="keys_title">Registered Keys</h2>
              <div className="reg_keys_container">
                <RegisteredKeys />
              </div>
            </>
          ) : null}
          <h2 className="keys_title">Summary</h2>
          <div className="reg_keys_container">
            <Feedback page={currentStep} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
    students: state.students,
    matches: state.matches,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        addJobsData: addJobsData,
        processMatches: processMatches,
        getStudents: getStudents,
        updateRegKeys: updateRegKeys,
        resetKey: resetKey,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Create);
