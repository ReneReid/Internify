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

const mockTechStackData = {
  languages: [
    "C",
    "C#",
    "C++",
    "CSS",
    "HTML",
    "Java",
    "JavaScript",
    "MATLAB",
    "Python",
    "R",
    "SQL",
    "TypeScript",
  ],
  frameworks: [
    "AWS",
    "Angular",
    "Bootstrap",
    "Docker",
    "Google Cloud",
    "Linux",
    "MongoDB",
    "Node",
    "React",
    "Ruby on Rails",
    "Unix",
  ],
  workTools: ["Azure", "GitHub", "Jira", "Jupyter"],
  csConcepts: [
    "Agile Development",
    "Algorithms",
    "Asynchronous Programming",
    "Data Structures",
    "Functional Programming",
    "Object Oriented Programming",
    "RESTify Services",
    "Recursion",
    "Web APIs",
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
    tools: ["GitHub", "Jira", "Azure", "Kubernetes"],
    concepts: [
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
    jobId: "1",
    title: "Software Developer",
    dateCreated: "05/25/2021",
    score: "Excellent",
    link: "",
  },
  {
    jobId: "2",
    title: "Quality Assurance Developer",
    dateCreated: "05/18/2021",
    score: "Excellent",
    link: "",
  },
  {
    jobId: "3",
    title: "Software Developer",
    dateCreated: "04/30/2021",
    score: "Good",
    link: "",
  },
  {
    jobId: "4",
    title: "Test Developer",
    dateCreated: "04/28/2021",
    score: "Okay",
    link: "",
  },
  {
    jobId: "5",
    title: "QA Analyst",
    dateCreated: "04/28/2021",
    score: "Okay",
    link: "",
  },
  {
    jobId: "6",
    title: "Software Developer",
    dateCreated: "04/22/2021",
    score: "Excellent",
    link: "",
  },
  {
    jobId: "7",
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
  chipsList,
  currStep,
};
