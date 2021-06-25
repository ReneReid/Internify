import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  UPDATE_STUDENT,
} from "../actions/types/studentTypes";

const initialState = {
  studentList: [
    {
      id: 1,
      gpa: 3.7,
      year: 3,
      coop: true,
      seeking: true,
      citizenship: ["Citizen"],
      workExperience: 0,
      codingLanguages: { Java: 8, Cpp: 4, C: 4, JavaScript: 4 },
      frameworks: { React: 1, HTML: 4, CSS: 4 },
      workTools: { Jira: 1, Notion: 1 },
      concepts: [
        "Object Oriented Programming",
        "Functional Programming",
        "Recursion",
      ],
      location: "Canada",
      degree: {
        BSc: "University of British Columbia",
        BCS: "University of British Columbia",
      },
    },
    {
      id: 2,
      gpa: 3.8,
      year: 4,
      coop: true,
      seeking: false,
      citizenship: ["Citizen"],
      workExperience: 0,
      codingLanguages: { Java: 8, Cpp: 4, C: 4, JavaScript: 4 },
      frameworks: { React: 1, HTML: 4, CSS: 4 },
      workTools: { Jira: 1, Notion: 1 },
      concepts: [
        "Object Oriented Programming",
        "Functional Programming",
        "Recursion",
      ],
      location: "Canada",
      degree: {
        BSc: "University of British Columbia",
        BCS: "University of British Columbia",
        JD: "New York University",
      },
    },
    {
      id: 3,
      gpa: 3.5,
      year: 3,
      coop: true,
      seeking: true,
      citizenship: ["PR"],
      workExperience: 0,
      codingLanguages: { Java: 8, Cpp: 8, C: 4, JavaScript: 4 },
      frameworks: { React: 1, HTML: 4, CSS: 4 },
      workTools: { Jira: 1, Notion: 1 },
      concepts: [
        "Object Oriented Programming",
        "Functional Programming",
        "Recursion",
      ],
      location: "Canada",
      degree: { BSc: "University of British Columbia" },
    },
    {
      id: 4,
      gpa: 4.0,
      year: 3,
      coop: true,
      seeking: true,
      citizenship: ["Citizen"],
      workExperience: 4,
      codingLanguages: { Java: 12, Cpp: 2, C: 2, JavaScript: 4 },
      frameworks: { React: 4, HTML: 1, CSS: 1 },
      workTools: { Jira: 4, Notion: 4 },
      concepts: ["Object Oriented Programming", "Recursion"],
      location: "Canada",
      degree: { BSc: "University of British Columbia" },
    },
    {
      id: 5,
      gpa: 3.5,
      coop: false,
      year: 2,
      seeking: true,
      citizenship: ["Citizen"],
      workExperience: 0,
      codingLanguages: { Java: 4, Cpp: 4, C: 4, JavaScript: 4 },
      frameworks: { React: 12, HTML: 8, CSS: 8 },
      workTools: { Jira: 1 },
      concepts: ["Object Oriented Programming", "Recursion"],
      location: "Canada",
      degree: { BSc: "University of British Columbia" },
    },
    {
      id: 6,
      gpa: 3.3,
      year: 3,
      coop: true,
      seeking: true,
      citizenship: ["Permanent Residency"],
      workExperience: 12,
      codingLanguages: { Java: 12, Cpp: 5, C: 8, JavaScript: 8 },
      frameworks: { React: 12, HTML: 12, CSS: 5 },
      workTools: { Jira: 12, Notion: 2 },
      concepts: ["Object Oriented Programming", "Functional Programming"],
      location: "Canada",
      degree: { BSc: "University of Alberta" },
    },
    {
      id: 7,
      gpa: 4.0,
      year: 3,
      coop: true,
      seeking: true,
      citizenship: ["Citizen"],
      workExperience: 16,
      codingLanguages: { Java: 20, Cpp: 12, C: 12, JavaScript: 4 },
      frameworks: { React: 4, HTML: 4, CSS: 4 },
      workTools: { Jira: 16, Notion: 16 },
      concepts: [
        "Object Oriented Programming",
        "Functional Programming",
        "Recursion",
      ],
      location: "Canada",
      degree: { BSc: "Waterloo", MSc: "University of Toronto" },
    },
    {
      id: 8,
      gpa: 3.5,
      year: 2,
      coop: true,
      seeking: false,
      citizenship: ["Citizen"],
      workExperience: 12,
      codingLanguages: { Java: 4, Cpp: 1, C: 4, JavaScript: 1 },
      frameworks: { HTML: 4 },
      workTools: { Jira: 12, Notion: 2 },
      concepts: ["Object Oriented Programming", "Recursion"],
      location: "Canada",
      degree: { BSc: "McGill" },
    },
    {
      id: 9,
      gpa: 3.0,
      year: 3,
      coop: true,
      seeking: true,
      citizenship: ["Citizen"],
      workExperience: 0,
      codingLanguages: { C: 24 },
      frameworks: { HTML: 4, CSS: 4 },
      workTools: {},
      concepts: ["Functional Programming", "Recursion"],
      location: "Canada",
      degree: { BSc: "Stanford University", PhD: "Oxford University" },
    },
    {
      id: 10,
      gpa: 3.4,
      year: 4,
      coop: true,
      seeking: true,
      citizenship: ["Citizen"],
      workExperience: 24,
      codingLanguages: { Java: 24, Cpp: 10, C: 8, JavaScript: 4 },
      frameworks: { HTML: 24, CSS: 24 },
      workTools: { Jira: 12, Notion: 2 },
      concepts: [
        "Object Oriented Programming",
        "Functional Programming",
        "Recursion",
      ],
      location: "Republic of Ireland",
      degree: { BSc: "University of British Columbia" },
    },
  ],
};

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_STUDENT:
      const newStudent1 = action.payload.student;
      return [...state, newStudent1];

    case REMOVE_STUDENT:
      return state.filter((student) => student.id !== action.payload.id);

    case UPDATE_STUDENT:
      const studentID = action.payload.id;
      state.filter((student) => student.id !== action.payload.id);
      const newStudent2 = action.payload.student;
      newStudent2.id = studentID;
      return [...state, newStudent2];

    default:
      return state;
  }
}
