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
import { processMatches } from "../../store/actions/matchesActions";
import { Container } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { mockJobDetailData } from "../../models/mockData";
import { useSelector } from "react-redux";

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

function Create(props) {
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

  // Grab store data for matches dispatch
  const students = useSelector((state) => state.students.studentList);

  function parseExperience(experience) {
    if (experience === "none") {
      return 0;
    } else {
      const expArray = experience.split(" ");
      return parseInt(expArray[1]);
    }
  }

  function parseCitizenshipReqs(citizenshipReqs) {
    let reqs = [];
    // anyone case
    if (citizenshipReqs === "Anyone") {
      reqs = ["Anyone"]; // always return true in checker for this!
      return reqs;
    } else {
      // logic-handling for other cases
      const expArray = citizenshipReqs.split(" ");
      if (expArray.includes("Citizens") && expArray.includes("PR")) {
        reqs = ["Citizen", "Permanent Residency"];
        return reqs;
      }
      if (expArray.includes("Citizens")) {
        reqs = ["Citizen", "Permanent Residency"];
        return reqs;
      }
      reqs = ["Citizen", "Permanent Residency", "International"];
      return reqs;
    }
  }

  function parseCoopReqs(coopReqs) {
    if (coopReqs === "Yes") {
      return true;
    } else {
      return false;
    }
  }

  function createJobObject(jobPosting) {
    // parsing functions
    const experienceLength = parseExperience(
      jobPosting.requirements.experience
    );
    const citizenshipReqs = parseCitizenshipReqs(jobPosting.details.candidates);
    const coopReqs = parseCoopReqs(jobPosting.details.coOp);

    return {
      id: jobPosting.id,
      experienceLength: experienceLength,
      gpaRequired: jobPosting.gpa,
      gpaPercentage: jobPosting.requirements.gpaValue,
      codingLanguages: jobPosting.requirements.languages,
      frameworks: jobPosting.requirements.frameworks,
      workTools: jobPosting.requirements.tools,
      concepts: jobPosting.requirements.concepts,
      citizenshipReqs: citizenshipReqs,
      academicReqs: jobPosting.details.academicReq,
      coopReqs: coopReqs,
    };
  }

  function updateStore() {
    setCurrentStep(currentStep + 1);
    props.actions.addJobsData(jobData);

    // dispatch to matches reducer
    if (currentStep === 4) {
      props.actions.processMatches({
        students: students,
        posting: createJobObject(jobData),
      });
    }
    window.scrollTo(0, 0);
  }

  return (
    <div className="create_container">
      <Container maxWidth="md" style={{ padding: "0 10em" }}>
        <ButtonFilled onClick={() => setCurrentStep(currentStep - 1)}>
          Back
        </ButtonFilled>
      </Container>
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
        <Container maxWidth="md" style={{ padding: "0 10em" }}>
          <ButtonFilled onClick={() => updateStore()}>Continue</ButtonFilled>
        </Container>
      ) : null}
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
    actions: bindActionCreators(
      { addJobsData: addJobsData, processMatches: processMatches },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Create);
