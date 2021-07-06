import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  UPDATE_STUDENT,
} from "../actions/types/studentTypes";

const initialState = {
  studentList: [
    {
      _id: 1,
      gpaValue: 85,
      year: 3,
      coOp: true,
      seeking: true,
      candidate: ["Citizen"],
      experience: 0,
      languages: { Java: 8, Cpp: 4, C: 4, JavaScript: 4 },
      frameworks: { React: 1, HTML: 4, CSS: 4 },
      tools: { Jira: 1, Notion: 1 },
      concepts: [
        "Object Oriented Programming",
        "Functional Programming",
        "Recursion",
      ],
      location: "Canada",
      academicReq: {
        BSc: "University of British Columbia",
        BCS: "University of British Columbia",
      },
    },
    {
      _id: 2,
      gpaValue: 90,
      year: 4,
      coOp: true,
      seeking: true,
      candidate: ["Citizen"],
      experience: 0,
      languages: { Java: 8, Cpp: 4, C: 4, JavaScript: 4 },
      frameworks: { React: 1, HTML: 4, CSS: 4 },
      tools: { Jira: 1, Notion: 1 },
      concepts: [
        "Object Oriented Programming",
        "Functional Programming",
        "Recursion",
      ],
      location: "Canada",
      academicReq: {
        BSc: "University of British Columbia",
        BCS: "University of British Columbia",
        JD: "New York University",
      },
    },
    {
      _id: 3,
      gpaValue: 82,
      year: 3,
      coOp: true,
      seeking: true,
      candidate: ["PR"],
      experience: 0,
      languages: { Java: 8, Cpp: 8, C: 4, JavaScript: 4 },
      frameworks: { React: 1, HTML: 4, CSS: 4 },
      tools: { Jira: 1, Notion: 1 },
      concepts: [
        "Object Oriented Programming",
        "Functional Programming",
        "Recursion",
      ],
      location: "Canada",
      academicReq: { BSc: "University of British Columbia" },
    },
    {
      _id: 4,
      gpaValue: 97,
      year: 3,
      coOp: true,
      seeking: true,
      candidate: ["Citizen"],
      experience: 4,
      languages: { Java: 12, Cpp: 2, C: 2, JavaScript: 4 },
      frameworks: { React: 4, HTML: 1, CSS: 1 },
      tools: { Jira: 4, Notion: 4 },
      concepts: ["Object Oriented Programming", "Recursion"],
      location: "Canada",
      academicReq: { BSc: "University of British Columbia" },
    },
    {
      _id: 5,
      gpaValue: 77,
      coOp: false,
      year: 2,
      seeking: true,
      citizenship: ["Citizen"],
      experience: 0,
      languages: { Java: 4, Cpp: 4, C: 4, JavaScript: 4 },
      frameworks: { React: 12, HTML: 8, CSS: 8 },
      tools: { Jira: 1 },
      concepts: ["Object Oriented Programming", "Recursion"],
      location: "Canada",
      academicReq: { BSc: "University of British Columbia" },
    },
    {
      _id: 6,
      gpaValue: 73,
      year: 3,
      coOp: true,
      seeking: true,
      candidate: ["Permanent Residency"],
      experience: 12,
      languages: { Java: 12, Cpp: 5, C: 8, JavaScript: 8 },
      frameworks: { React: 12, HTML: 12, CSS: 5 },
      tools: { Jira: 12, Notion: 2 },
      concepts: ["Object Oriented Programming", "Functional Programming"],
      location: "Canada",
      academicReq: { BSc: "University of Alberta" },
    },
    {
      _id: 7,
      gpaValue: 99,
      year: 3,
      coOp: true,
      seeking: true,
      candidate: ["Citizen"],
      experience: 16,
      languages: { Java: 20, Cpp: 12, C: 12, JavaScript: 4 },
      frameworks: { React: 4, HTML: 4, CSS: 4 },
      tools: { Jira: 16, Notion: 16 },
      concepts: [
        "Object Oriented Programming",
        "Functional Programming",
        "Recursion",
      ],
      location: "Canada",
      academicReq: { BSc: "Waterloo", MSc: "University of Toronto" },
    },
    {
      _id: 8,
      gpaValue: 80,
      year: 2,
      coOp: true,
      seeking: true,
      candidate: ["Citizen"],
      experience: 12,
      languages: { Java: 4, Cpp: 1, C: 4, JavaScript: 1 },
      frameworks: { HTML: 4 },
      tools: { Jira: 12, Notion: 2 },
      concepts: ["Object Oriented Programming", "Recursion"],
      location: "Canada",
      academicReq: { BSc: "McGill" },
    },
    {
      _id: 9,
      gpaValue: 70,
      year: 3,
      coOp: true,
      seeking: true,
      candidate: ["Citizen"],
      experience: 0,
      languages: { C: 24 },
      frameworks: { HTML: 4, CSS: 4 },
      tools: {},
      concepts: ["Functional Programming", "Recursion"],
      location: "Canada",
      academicReq: { BSc: "Stanford University", PhD: "Oxford University" },
    },
    {
      _id: 10,
      gpaValue: 74,
      year: 4,
      coOp: true,
      seeking: true,
      candidate: ["Citizen"],
      experience: 24,
      languages: { Java: 24, Cpp: 10, C: 8, JavaScript: 4 },
      frameworks: { HTML: 24, CSS: 24 },
      tools: { Jira: 12, Notion: 2 },
      concepts: [
        "Object Oriented Programming",
        "Functional Programming",
        "Recursion",
      ],
      location: "Republic of Ireland",
      academicReq: { BSc: "University of British Columbia" },
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
