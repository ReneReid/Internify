import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  CreateJobHeader,
  ContactDetails,
  TechRequirements,
  JobDetail,
  Review,
} from "./CreateJobPosting/index";
import { ButtonClear, ButtonFilled } from "../atoms/index";
import { Container, makeStyles, Grid } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { v4 as uuidv4 } from "uuid";
import { mockJobDetailData } from "../../models/mockData";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getStudents } from "../../store/actions/studentActions";
import "./styles/Create.css";
import { addJobsData } from "../../store/actions/jobPostActions";
import { processMatches } from "../../store/actions/matchesActions";

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

function Create(props) {
  const classes = useStyles();
  const [currentStep, setCurrentStep] = useState(1);
  const [jobData, setJobData] = useState({
    _id: uuidv4(), // Add an underscore at some point (all instances of id across all objects and files)
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

  // Grab all students from database
  const allStudents = useSelector((state) => state.students.studentList);

  function parseConcepts(concepts) {
    let parsedConcepts = [];
    for (let i = 0; i < concepts.length; i++) {
      let str = concepts[i].replace(/\s+/g, "");
      parsedConcepts.push(str);
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

  function createJobObject(jobPosting) {
    // parsing functions
    const experience = parseExperience(jobPosting.requirements.experience);
    const candidates = parseCitizenshipReqs(jobPosting.details.candidates);
    const coOp = parseCoopReqs(jobPosting.details.coOp);
    const concepts = parseConcepts(jobPosting.requirements.concepts);

    return {
      _id: jobPosting._id,
      experience: experience,
      gpa: jobPosting.requirements.gpa,
      gpaValue: jobPosting.requirements.gpaValue,
      languages: jobPosting.requirements.languages,
      frameworks: jobPosting.requirements.frameworks,
      tools: jobPosting.requirements.tools,
      concepts: concepts,
      candidates: candidates,
      academicReq: jobPosting.details.academicReq,
      coOp: coOp,
    };
  }

  useEffect(() => {
    props.actions.getStudents();
  }, [props.actions]);

  function updateStore() {
    setCurrentStep(currentStep + 1);
    props.actions.addJobsData(jobData);

    const posting = createJobObject(jobData);
    // dispatch to matches reducer
    console.log(jobData);
    if (currentStep === 4) {
      props.actions.processMatches({
        students: allStudents,
        posting: posting,
      });
    }
    window.scrollTo(0, 0);
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
    actions: bindActionCreators(
      {
        addJobsData: addJobsData,
        processMatches: processMatches,
        getStudents: getStudents,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Create);
