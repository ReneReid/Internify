const mockJobDetailData = {
  location: ["In-person", "Remote", "Hybrid"],
  payment: ["Hourly", "Salary", "Hourly + Commission"],
  citizenship: [
    "Citizens only",
    "Citizens & PR",
    "Citizens, PR, & International Students",
    "Anyone",
  ],
  academicReq: [
    "Associate's Degree",
    "Bachelor's Degree",
    "Master's Degree",
    "Ph.D",
    "Diploma",
    "Certification",
  ],
  coopReq: ["Yes", "No"],
};

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

const mockJobPosting = {
  header: {
    title: "Front-End Software Engineer",
    company: "Edible Technologies",
    location: "Vancouver, BC",
    startDate: "02/10/2021",
    position: ["Internship", "Co-op"],
    length: "8 months",
  },
  requirements: {
    experience: "≥ 4 months",
    gpa: null,
    techStack: ["JavaScript", "TypeScript", "HTML", "CSS", "MaterialUI"],
    tools: ["GitHub", "Jira", "Azure", "Kubernetes"],
    concepts: ["Object Oriented Programming", "Functional Programming", "Computer Networks"],
  },
  details: {
    description: "",
    position: "Remote",
    pay: "Salary",
    candidates: "Citizens & PR",
    academicReq: ["Bachelor's Degree"],
    coOp: true,
  },
  contact: {
    name: "Mahesh Swarani",
    email: "mahesh@edibletech.com",
    linkedIn: "linkedin.com/in/maheshswarani",
    other: "+1 (601) 234 5678",
    applicationSteps: "Apply via LinkedIn",
  }
};

export { mockJobDetailData, mockTechStackData, mockJobPosting };
