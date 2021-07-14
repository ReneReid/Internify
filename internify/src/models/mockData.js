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
    languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
    frameworks: ["React", "Angular", "MaterialUI"],
    workTools: ["GitHub", "Jira", "Azure", "Kubernetes"],
    csConcepts: [
      "Object Oriented Programming",
      "Functional Programming",
      "Computer Networks",
    ],
  },
  details: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa sem et, volutpat placerat gravida at id dictum. Aliquet consequat ultrices euismod eu. Neque turpis vulputate pellentesque integer ornare ultrices mauris dignissim mi. Lacus aliquam enim velit dignissim.",
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
  },
};

const mockJobPostingList = [
  {
    title: "Software Developer",
    dateCreated: "05/25/2021",
    score: "Excellent",
    link: "",
  },
  {
    title: "Quality Assurance Developer",
    dateCreated: "05/18/2021",
    score: "Excellent",
    link: "",
  },
  {
    title: "Software Developer",
    dateCreated: "04/30/2021",
    score: "Good",
    link: "",
  },
  {
    title: "Test Developer",
    dateCreated: "04/28/2021",
    score: "Okay",
    link: "",
  },
  {
    title: "QA Analyst",
    dateCreated: "04/28/2021",
    score: "Okay",
    link: "",
  },
  {
    title: "Software Developer",
    dateCreated: "04/22/2021",
    score: "Excellent",
    link: "",
  },
  {
    title: "Full-Stack Developer",
    dateCreated: "03/05/2021",
    score: "Excellent",
    link: "",
  },
];

const mockProfileData = {
  name: "Angela Smith",
  handle: "angelas",
  jobTitle: "Technical Recruiter",
  company: "Synch Incorporated",
  bio: "Angela is a university recruiter at Synch incorporated. Synch Inc. is a fast-paced security solutions tech startup founded in 2018. With a team of 30, we are looking to expand with young and fresh talent!",
  email: "angelas@synch.com",
  website: "synchinc.com/careers",
  linkedIn: "linkedin.com/in/angelasmith",
  location: "Vancouver, BC",
  photo: "",
  jobPostings: mockJobPostingList,
};

export {
  mockJobDetailData,
  mockTechStackData,
  mockJobPosting,
  mockProfileData,
};
