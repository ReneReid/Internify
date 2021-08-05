// NOTE: have not finalised the 4 will be choosing from this set
// Temporarily have commented out categories that tentatively
// are not part of the chosen set of mock job objects.
// Once confirmed, will delete all categories unused.

// create an empty job object

const backendStudent = {
  header: {
    position: ["Coop"],
    title: "Backend Developer",
    company: "",
    location: "",
    startDate: "",
    length: "8 months",
  },
  requirements: {
    languages: ["Java", "C++", "C"],
    frameworks: ["Express", "Django", "CakePHP", "MongoDB"],
    tools: ["GitHub"],
    concepts: [
      "Object Oriented Programming",
      "Asynchronous Programming",
      "Recursion",
    ],
    experience: "≥ 0 months",
    gpa: "Required",
    gpaValue: "70",
  },
  details: {
    academicReq: ["Bachelor's Degree"],
    description: "",
    position: "",
    pay: "",
    candidates: "",
    coOp: "",
  },
  contact: {
    name: "",
    email: "",
    linkedIn: "",
    other: "",
    applicationSteps: "",
  },
};

// const backendNewGrad = {
//     "header": {
//         "position": [
//             "FullTime"
//         ],
//         "title": "Backend Developer",
//         "company": "Add Company Name",
//         "location": "Add Location",
//         "startDate": "1999-12-31",
//         "length": "12 months"
//     },
//     "requirements": {
//         "languages": [
//             "Java",
//             "C++",
//             "C",
//             "Python",
//             "PHP"

//         ],
//         "frameworks": [
//             "Express",
//             "Django",
//             "CakePHP",
//         ],
//         "tools": [
//             "GitHub",
//             "Jira",
//             "Confluence"
//         ],
//         "concepts": [
//             "Object Oriented Programming",
//             "Asynchronous Programming",
//             "Recursion",
//             "Functional Programming",
//             "Algorithms"
//         ],
//         "experience": "≥ 8 months",
//         "gpa": "Required",
//         "gpaValue": "75"
//     },
//     "details": {
//         "academicReq": [
//             "Bachelor's Degree"
//         ],
//         "description": "Add Description",
//         "position": "In-person",
//         "pay": "Salary",
//         "candidates": "Anyone",
//         "coOp": "No"
//     },
//     "contact": {
//         "name": "Add Name",
//         "email": "Add Email",
//         "linkedIn": "Add linkedIn",
//         "other": "Add Additional Information",
//         "applicationSteps": "Add Application Steps"
//     },

// }

const frontendStudent = {
  header: {
    position: ["Coop"],
    title: "Frontend Developer",
    company: "",
    location: "",
    startDate: "",
    length: "8 months",
  },
  requirements: {
    languages: ["JavaScript", "HTML", "CSS"],
    frameworks: ["React", "Redux"],
    tools: ["GitHub"],
    concepts: [
      "Object Oriented Programming",
      "Asynchronous Programming",
      "Recursion",
    ],
    experience: "≥ 0 months",
    gpa: "Required",
    gpaValue: "70",
  },
  details: {
    academicReq: ["Bachelor's Degree"],
    description: "",
    position: "",
    pay: "",
    candidates: "",
    coOp: "",
  },
  contact: {
    name: "",
    email: "",
    linkedIn: "",
    other: "",
    applicationSteps: "",
  },
};

// const frontendNewGrad = {
//     "header": {
//         "position": [
//             "FullTime"
//         ],
//         "title": "Frontend Developer",
//         "company": "Add Company Name",
//         "location": "Add Location",
//         "startDate": "1999-12-31",
//         "length": "12 months"
//     },
//     "requirements": {
//         "languages": [
//             "JavaScript",
//             "HTML",
//             "CSS",
//             "TypeScript"
//         ],
//         "frameworks": [
//             "React",
//             "Redux",
//             "AngularJS",
//             "Express"
//         ],
//         "tools": [
//             "GitHub",
//             "Jira",
//             "Confluence"
//         ],
//         "concepts": [
//             "Object Oriented Programming",
//             "Asynchronous Programming",
//             "Recursion",
//             "Functional Programming",
//             "Algorithms"
//         ],
//         "experience": "≥ 8 months",
//         "gpa": "Required",
//         "gpaValue": "75"
//     },
//     "details": {
//         "academicReq": [
//             "Bachelor's Degree"
//         ],
//         "description": "Add Description",
//         "position": "In-person",
//         "pay": "Salary",
//         "candidates": "Anyone",
//         "coOp": "No"
//     },
//     "contact": {
//         "name": "Add Name",
//         "email": "Add Email",
//         "linkedIn": "Add linkedIn",
//         "other": "Add Additional Information",
//         "applicationSteps": "Add Application Steps"
//     },

// }

// const mobileStudent = {
//     "header": {
//         "position": [
//             "Coop"
//         ],
//         "title": "Mobile Developer",
//         "company": "Add Company Name",
//         "location": "Add Location",
//         "startDate": "1999-12-31",
//         "length": "8 months"
//     },
//     "requirements": {
//         "languages": [
//             "Java",
//             "C#"
//         ],
//         "frameworks": [
//             "React",
//             "JQuery Mobile"
//         ],
//         "tools": [
//             "GitHub"
//         ],
//         "concepts": [
//             "Object Oriented Programming",
//             "Asynchronous Programming",
//             "Recursion"
//         ],
//         "experience": "≥ 0 months",
//         "gpa": "Required",
//         "gpaValue": "75"
//     },
//     "details": {
//         "academicReq": [
//             "Bachelor's Degree"
//         ],
//         "description": "Add Description",
//         "position": "In-person",
//         "pay": "Salary",
//         "candidates": "Anyone",
//         "coOp": "No"
//     },
//     "contact": {
//         "name": "Add Name",
//         "email": "Add Email",
//         "linkedIn": "Add linkedIn",
//         "other": "Add Additional Information",
//         "applicationSteps": "Add Application Steps"
//     },

// }

// const mobileNewGrad = {
//     "header": {
//         "position": [
//             "FullTime"
//         ],
//         "title": "Mobile Developer",
//         "company": "Add Company Name",
//         "location": "Add Location",
//         "startDate": "1999-12-31",
//         "length": "12 months"
//     },
//     "requirements": {
//         "languages": [
//             "Java",
//             "C#",
//             "Objective-C",
//             "HTML5"
//         ],
//         "frameworks": [
//             "React",
//             "JQuery Mobile",
//             "Swiftic",
//             "Ionic"
//         ],
//         "tools": [
//             "GitHub",
//             "Jira",
//             "Confluence"
//         ],
//         "concepts": [
//             "Object Oriented Programming",
//             "Asynchronous Programming",
//             "Recursion",
//             "Functional Programming",
//             "Algorithms"
//         ],
//         "experience": "≥ 8 months",
//         "gpa": "Required",
//         "gpaValue": "75"
//     },
//     "details": {
//         "academicReq": [
//             "Bachelor's Degree"
//         ],
//         "description": "Add Description",
//         "position": "In-person",
//         "pay": "Salary",
//         "candidates": "Anyone",
//         "coOp": "No"
//     },
//     "contact": {
//         "name": "Add Name",
//         "email": "Add Email",
//         "linkedIn": "Add linkedIn",
//         "other": "Add Additional Information",
//         "applicationSteps": "Add Application Steps"
//     },

// }

// const gameStudent = {
//     "header": {
//         "position": [
//             "Coop"
//         ],
//         "title": "Game Developer",
//         "company": "Add Company Name",
//         "location": "Add Location",
//         "startDate": "1999-12-31",
//         "length": "8 months"
//     },
//     "requirements": {
//         "languages": [
//             "Java",
//             "C++",
//             "C"
//         ],
//         "frameworks": [
//             "DirectX",
//             "OpenGL"
//         ],
//         "tools": [
//             "GitHub"
//         ],
//         "concepts": [
//             "Object Oriented Programming",
//             "Asynchronous Programming",
//             "Recursion",
//             "Linear Algebra"
//         ],
//         "experience": "≥ 0 months",
//         "gpa": "Required",
//         "gpaValue": "75"
//     },
//     "details": {
//         "academicReq": [
//             "Bachelor's Degree"
//         ],
//         "description": "Add Description",
//         "position": "In-person",
//         "pay": "Salary",
//         "candidates": "Anyone",
//         "coOp": "No"
//     },
//     "contact": {
//         "name": "Add Name",
//         "email": "Add Email",
//         "linkedIn": "Add linkedIn",
//         "other": "Add Additional Information",
//         "applicationSteps": "Add Application Steps"
//     },

// }

// const gameNewGrad = {
//     "header": {
//         "position": [
//             "FullTime"
//         ],
//         "title": "Game Developer",
//         "company": "Add Company Name",
//         "location": "Add Location",
//         "startDate": "1999-12-31",
//         "length": "12 months"
//     },
//     "requirements": {
//         "languages": [
//             "Java",
//             "C++",
//             "C"
//         ],
//         "frameworks": [
//             "DirectX",
//             "OpenGL"
//         ],
//         "tools": [
//             "GitHub",
//             "Jira",
//             "Confluence"
//         ],
//         "concepts": [
//             "Object Oriented Programming",
//             "Asynchronous Programming",
//             "Recursion",
//             "Functional Programming",
//             "Algorithms"
//         ],
//         "experience": "≥ 8 months",
//         "gpa": "Required",
//         "gpaValue": "75"
//     },
//     "details": {
//         "academicReq": [
//             "Bachelor's Degree"
//         ],
//         "description": "Add Description",
//         "position": "In-person",
//         "pay": "Salary",
//         "candidates": "Anyone",
//         "coOp": "No"
//     },
//     "contact": {
//         "name": "Add Name",
//         "email": "Add Email",
//         "linkedIn": "Add linkedIn",
//         "other": "Add Additional Information",
//         "applicationSteps": "Add Application Steps"
//     },

// }

// const graphicsStudent = {
//     "header": {
//         "position": [
//             "Coop"
//         ],
//         "title": "Graphics Developer",
//         "company": "Add Company Name",
//         "location": "Add Location",
//         "startDate": "1999-12-31",
//         "length": "8 months"
//     },
//     "requirements": {
//         "languages": [
//             "Assembly",
//             "C++",
//             "C"
//         ],
//         "frameworks": [
//             "DirectX",
//             "OpenGL"
//         ],
//         "tools": [
//             "GitHub"
//         ],
//         "concepts": [
//             "Object Oriented Programming",
//             "Asynchronous Programming",
//             "Recursion",
//             "Linear Algebra"
//         ],
//         "experience": "≥ 0 months",
//         "gpa": "Required",
//         "gpaValue": "75"
//     },
//     "details": {
//         "academicReq": [
//             "Bachelor's Degree"
//         ],
//         "description": "Add Description",
//         "position": "In-person",
//         "pay": "Salary",
//         "candidates": "Anyone",
//         "coOp": "No"
//     },
//     "contact": {
//         "name": "Add Name",
//         "email": "Add Email",
//         "linkedIn": "Add linkedIn",
//         "other": "Add Additional Information",
//         "applicationSteps": "Add Application Steps"
//     },

// }

// const graphicsNewGrad = {
//     "header": {
//         "position": [
//             "FullTime"
//         ],
//         "title": "Graphics Developer",
//         "company": "Add Company Name",
//         "location": "Add Location",
//         "startDate": "1999-12-31",
//         "length": "12 months"
//     },
//     "requirements": {
//         "languages": [
//             "Assembly",
//             "C++",
//             "C"
//         ],
//         "frameworks": [
//             "DirectX",
//             "OpenGL",
//             "Unify3D",
//             "WebGL"
//         ],
//         "tools": [
//             "GitHub",
//             "Jira",
//             "Confluence"
//         ],
//         "concepts": [
//             "Object Oriented Programming",
//             "Asynchronous Programming",
//             "Recursion",
//             "Functional Programming",
//             "Algorithms"
//         ],
//         "experience": "≥ 8 months",
//         "gpa": "Required",
//         "gpaValue": "75"
//     },
//     "details": {
//         "academicReq": [
//             "Bachelor's Degree"
//         ],
//         "description": "Add Description",
//         "position": "In-person",
//         "pay": "Salary",
//         "candidates": "Anyone",
//         "coOp": "No"
//     },
//     "contact": {
//         "name": "Add Name",
//         "email": "Add Email",
//         "linkedIn": "Add linkedIn",
//         "other": "Add Additional Information",
//         "applicationSteps": "Add Application Steps"
//     },

// }

const datascienceStudent = {
  header: {
    position: ["Coop"],
    title: "Data Scientist",
    company: "",
    location: "",
    startDate: "",
    length: "8 months",
  },
  requirements: {
    languages: ["Python", "C++", "C"],
    frameworks: ["Scikit-learn", "Pandas"],
    tools: ["GitHub"],
    concepts: [
      "Object Oriented Programming",
      "Asynchronous Programming",
      "Recursion",
      "Linear Algebra",
    ],
    experience: "≥ 0 months",
    gpa: "Required",
    gpaValue: "70",
  },
  details: {
    academicReq: ["Bachelor's Degree"],
    description: "",
    position: "",
    pay: "",
    candidates: "",
    coOp: "",
  },
  contact: {
    name: "",
    email: "",
    linkedIn: "",
    other: "",
    applicationSteps: "",
  },
};

// const datascienceNewGrad = {
//     "header": {
//         "position": [
//             "FullTime"
//         ],
//         "title": "Data Scientist",
//         "company": "Add Company Name",
//         "location": "Add Location",
//         "startDate": "1999-12-31",
//         "length": "12 months"
//     },
//     "requirements": {
//         "languages": [
//             "Python",
//             "C++",
//             "C",
//             "SQL",
//             "R"
//         ],
//         "frameworks": [
//             "Scikit-learn",
//             "Pandas",
//             "Numpy",
//             "TensorFlow",
//             "Matplotlib",
//             "PyTorch"
//         ],
//         "tools": [
//             "GitHub",
//             "Jira",
//             "Confluence"
//         ],
//         "concepts": [
//             "Object Oriented Programming",
//             "Asynchronous Programming",
//             "Recursion",
//             "Functional Programming",
//             "Linear Algebra",
//             "Statistics",
//             "Data Science"
//         ],
//         "experience": "≥ 8 months",
//         "gpa": "Required",
//         "gpaValue": "75"
//     },
//     "details": {
//         "academicReq": [
//             "Bachelor's Degree"
//         ],
//         "description": "Add Description",
//         "position": "In-person",
//         "pay": "Salary",
//         "candidates": "Anyone",
//         "coOp": "No"
//     },
//     "contact": {
//         "name": "Add Name",
//         "email": "Add Email",
//         "linkedIn": "Add linkedIn",
//         "other": "Add Additional Information",
//         "applicationSteps": "Add Application Steps"
//     },

// }

// const webStudent = {
//     "header": {
//         "position": [
//             "Coop"
//         ],
//         "title": "Web Developer",
//         "company": "Add Company Name",
//         "location": "Add Location",
//         "startDate": "1999-12-31",
//         "length": "8 months"
//     },
//     "requirements": {
//         "languages": [
//             "HTML",
//             "CSS",
//             "JavaScript"
//         ],
//         "frameworks": [
//             "Express",
//             "React",
//             "Redux"
//         ],
//         "tools": [
//             "GitHub"
//         ],
//         "concepts": [
//             "Object Oriented Programming",
//             "Asynchronous Programming",
//             "Recursion"
//         ],
//         "experience": "≥ 0 months",
//         "gpa": "Required",
//         "gpaValue": "75"
//     },
//     "details": {
//         "academicReq": [
//             "Bachelor's Degree"
//         ],
//         "description": "Add Description",
//         "position": "In-person",
//         "pay": "Salary",
//         "candidates": "Anyone",
//         "coOp": "No"
//     },
//     "contact": {
//         "name": "Add Name",
//         "email": "Add Email",
//         "linkedIn": "Add linkedIn",
//         "other": "Add Additional Information",
//         "applicationSteps": "Add Application Steps"
//     },

// }

// const webNewGrad = {
//     "header": {
//         "position": [
//             "FullTime"
//         ],
//         "title": "Web Developer",
//         "company": "Add Company Name",
//         "location": "Add Location",
//         "startDate": "1999-12-31",
//         "length": "12 months"
//     },
//     "requirements": {
//         "languages": [
//             "HTML",
//             "CSS",
//             "JavaScript"
//         ],
//         "frameworks": [
//             "Express",
//             "React",
//             "Redux",
//             "Django",
//             "Rails",
//             "Angular"
//         ],
//         "tools": [
//             "GitHub",
//             "Jira",
//             "Confluence"
//         ],
//         "concepts": [
//             "Object Oriented Programming",
//             "Asynchronous Programming",
//             "Recursion",
//             "Functional Programming"
//         ],
//         "experience": "≥ 8 months",
//         "gpa": "Required",
//         "gpaValue": "75"
//     },
//     "details": {
//         "academicReq": [
//             "Bachelor's Degree"
//         ],
//         "description": "Add Description",
//         "position": "In-person",
//         "pay": "Salary",
//         "candidates": "Anyone",
//         "coOp": "No"
//     },
//     "contact": {
//         "name": "Add Name",
//         "email": "Add Email",
//         "linkedIn": "Add linkedIn",
//         "other": "Add Additional Information",
//         "applicationSteps": "Add Application Steps"
//     },

// }

const fullstackStudent = {
  header: {
    position: ["Coop"],
    title: "Full Stack Developer",
    company: "",
    location: "",
    startDate: "",
    length: "8 months",
  },
  requirements: {
    languages: ["TypeScript", "JavaScript", "HTML", "CSS"],
    frameworks: ["Express", "React", "Redux", "Angular", "MongoDB"],
    tools: ["GitHub"],
    concepts: [
      "Object Oriented Programming",
      "Asynchronous Programming",
      "Recursion",
    ],
    experience: "≥ 0 months",
    gpa: "Required",
    gpaValue: "70",
  },
  details: {
    academicReq: ["Bachelor's Degree"],
    description: "",
    position: "",
    pay: "",
    candidates: "",
    coOp: "",
  },
  contact: {
    name: "",
    email: "",
    linkedIn: "",
    other: "",
    applicationSteps: "",
  },
};

// const fullstackNewGrad = {
//     "header": {
//         "position": [
//             "FullTime"
//         ],
//         "title": "Full Stack Developer",
//         "company": "Add Company Name",
//         "location": "Add Location",
//         "startDate": "1999-12-31",
//         "length": "12 months"
//     },
//     "requirements": {
//         "languages": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "TypeScript"
//         ],
//         "frameworks": [
//             "Express",
//             "React",
//             "Redux",
//             "Angular"
//         ],
//         "tools": [
//             "GitHub",
//             "Jira",
//             "Confluence"
//         ],
//         "concepts": [
//             "Object Oriented Programming",
//             "Asynchronous Programming",
//             "Recursion",
//             "Functional Programming"
//         ],
//         "experience": "≥ 8 months",
//         "gpa": "Required",
//         "gpaValue": "75"
//     },
//     "details": {
//         "academicReq": [
//             "Bachelor's Degree"
//         ],
//         "description": "Add Description",
//         "position": "In-person",
//         "pay": "Salary",
//         "candidates": "Anyone",
//         "coOp": "No"
//     },
//     "contact": {
//         "name": "Add Name",
//         "email": "Add Email",
//         "linkedIn": "Add linkedIn",
//         "other": "Add Additional Information",
//         "applicationSteps": "Add Application Steps"
//     },

// }

const blankStudent = {
  header: {
    position: [],
    title: "",
    company: "",
    location: "",
    startDate: "",
    length: "",
  },
  requirements: {
    languages: [],
    frameworks: [],
    tools: [],
    concepts: [],
    experience: "",
    gpa: "",
    gpaValue: "",
  },
  details: {
    academicReq: [],
    description: "",
    position: "",
    pay: "",
    candidates: "",
    coOp: "",
  },
  contact: {
    name: "",
    email: "",
    linkedIn: "",
    other: "",
    applicationSteps: "",
  },
};

export {
  backendStudent,
  // backendNewGrad,
  frontendStudent,
  // frontendNewGrad,
  // mobileStudent,
  // mobileNewGrad,
  // gameStudent,
  // gameNewGrad,
  // graphicsStudent,
  // graphicsNewGrad,
  datascienceStudent,
  // datascienceNewGrad,
  // webStudent,
  // webNewGrad,
  fullstackStudent,
  // fullstackNewGrad
  blankStudent,
};
