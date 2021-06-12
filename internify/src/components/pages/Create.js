import React from "react";
import "./styles/Create.css";
import CreateJobHeader from "./CreateJobPosting/CreateJobHeader";
import TechRequirements from "./CreateJobPosting/TechRequirements";

const mockTechStackData = {
    "languages": ["Java", "JavaScript", "C++", "C"],
    "frameworks": ["React", "Angular", "HTML", "CSS"],
    "workTools": ["Jira", "Asana", "Confluence", "Notion"],
    "csConcepts": ["Object Oriented Programming", "Functional Programming", "Recursion"],
};

function Create (props) {
    return (
        <CreateJobHeader/>
        // <TechRequirements data={mockTechStackData}/>
    );
};

export default Create;