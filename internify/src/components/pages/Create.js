import React from "react";
import "./styles/Create.css";
import CreateJobHeader from "./CreateJobPosting/CreateJobHeader";
import TechRequirements from "./CreateJobPosting/TechRequirements";
import { ButtonFilled } from "../atoms";
import { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addJobsData } from '../../store/actions/jobPostActions';
import { Container } from "@material-ui/core";


const mockTechStackData = {
    "languages": ["Java", "JavaScript", "C++", "C"],
    "frameworks": ["React", "Angular", "HTML", "CSS"],
    "workTools": ["Jira", "Asana", "Confluence", "Notion"],
    "csConcepts": ["Object Oriented Programming", "Functional Programming", "Recursion"],
};

function Create (props) {

    const [currentStep, setCurrentStep] = useState(1);
    const [jobData, setJobData] = useState({
        id: 0,
        jobTitle: "",
        companyName: "",
        companyAddress: "",
        startDate: "",
        positionLength: "",
        positionType: [],
        experienceLength: "",
        gpaRequired: false,
        gpaScore: "",
        codingLanguages: [],
        frameworks: [],
        tools: [],
        compSciConcepts: []
    });

    function updateStore(){
        setCurrentStep(currentStep + 1);
        props.actions.addJobsData(jobData);
    }


    return (
        <React.Fragment> 
         <Container maxWidth="md" style={{ padding: "0 10em" }}>
         <ButtonFilled onClick={() => setCurrentStep(currentStep - 1)} >Back</ButtonFilled>     
        </Container> 
         <CreateJobHeader
        currentStep={currentStep}
        handleStep={setCurrentStep} 
        handleChange={setJobData}
        jobData={jobData}
        />
        <TechRequirements 
        currentStep={currentStep}
        handleStep={setCurrentStep}  
        handleChange={setJobData}
        jobData={jobData}
        data = {mockTechStackData}
        />
        <Container maxWidth="md" style={{ padding: "0 10em" }}>
        <ButtonFilled onClick={() => updateStore()} style={{ paddingLeft: "0 10em" }}>Continue</ButtonFilled>
        </Container> 
    </React.Fragment>
    );
};

function mapStateToProps(state){
    return {
        jobs: state.jobs
    };
  };
  
  function matchDispatchToProps(dispatch){
     return {
         actions: bindActionCreators({addJobsData: addJobsData}, dispatch)
     };
  }
  
  export default connect(mapStateToProps, matchDispatchToProps)(Create);