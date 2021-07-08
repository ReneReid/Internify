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
import { Container } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { mockJobDetailData } from "../../models/mockData";

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

  function updateStore() {
    setCurrentStep(currentStep + 1);
    props.actions.addJobsData(jobData);
    console.log(jobData);
    // Redirects view to top
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
    actions: bindActionCreators({ addJobsData: addJobsData }, dispatch),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Create);
