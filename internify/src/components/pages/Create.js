import React from "react";
import "./styles/Create.css";
import CreateJobHeader from "./CreateJobPosting/CreateJobHeader";
import TechRequirements from "./CreateJobPosting/TechRequirements";
import { ButtonFilled } from "../atoms";
import { useState } from 'react';
const mockTechStackData = {
    "languages": ["Java", "JavaScript", "C++", "C"],
    "frameworks": ["React", "Angular", "HTML", "CSS"],
    "workTools": ["Jira", "Asana", "Confluence", "Notion"],
    "csConcepts": ["Object Oriented Programming", "Functional Programming", "Recursion"],
};

function Create () {

    const [currentStep, setCurrentStep] = useState(1);
    const [jobData, setJobData] = useState({
        id: 0,
        jobTitle: "",
        companyName: "",
        companyAddress: "",
        startDate: "",
        positionLength: "",
        positionType: [],
    });


    return (
        <React.Fragment> 
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
        <ButtonFilled onClick={() => setCurrentStep(currentStep + 1)}>Continue</ButtonFilled>
        <ButtonFilled onClick={() => setCurrentStep(currentStep - 1)}>Back</ButtonFilled>
    </React.Fragment>
    );
};

export default Create;