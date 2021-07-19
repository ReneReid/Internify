import { PROCESS_MATCHES } from "../actions/types/matchesTypes";

const initialState = {
  matches: [],
  
};

export default function matchesReducer(state = initialState, action) {
  switch (action.type) {
    case PROCESS_MATCHES:
      const students = action.payload.students;
      const posting = action.payload.posting;
      const postingMatch = matchFilter(students, posting);
      return [...state.matches, postingMatch];
    default:
      return state;
  }
}

// matching algorithm
// Inputs: students = [{student 1}, {student 2}, {student 3}, ...], posting = {a1, a2, ...}
// Output: {postingID: {student 1, student 2, ...}}
function matchFilter(students, posting) {

  let gpaMatches = 0;
  let coopMatches = 0;
  let seekingMatches = 0;
  let frameworkMatches = 0;
  let workExpMatches = 0;
  let langMatches = 0;
  let toolsMatches = 0;
  let conceptsMatches = 0;
  let academicMatches = 0;
  let citizenMatches = 0;

  let matchedStudents = students.filter(
    (student) =>
      matchGpa(posting.gpa, posting.gpaValue, student.gpaValue, gpaMatches) &&
      matchCoop(student.coOp, posting.coOp, coopMatches) &&
      matchSeek(student.seeking, seekingMatches) &&
      matchFrame(student.frameworks, posting.frameworks, frameworkMatches) &&
      matchWork(student.experience, posting.experience, workExpMatches) &&
      matchLang(student.languages, posting.languages, langMatches) &&
      matchTools(student.tools, posting.tools, toolsMatches) &&
      matchConcepts(student.concepts, posting.concepts, conceptsMatches) &&
      matchAcademicReq(student.academicReq, posting.academicReq, academicMatches) &&
      matchCitizen(student.candidate, posting.candidates, citizenMatches)
  );

  const jobId = posting.jobId;
  let match = {};
  match[jobId] = matchedStudents;

  return match;
}

// This section needs to be implemented
function matchGpa(gpa, postingGpaValue, studentGpaValue, gpaMatches) {
  // empty case
  if (gpa === "") {
    gpaMatches++;
    return true;
  }

  if (gpa === "Optional") {
    gpaMatches++;
    return true;
  } else {
    if (studentGpaValue >= postingGpaValue) {
      gpaMatches++;
    }
    return studentGpaValue >= postingGpaValue;
  }
}

function matchCoop(coOpStudent, coOpPosting, coopMatches) {
  // Co-op required or not
  if (coOpPosting) {
    if (coOpStudent){
      coopMatches++;
    }
    return coOpStudent;
  } else {
    coopMatches++;
    return true;
  }
}

function matchSeek(seeking, seekingMatches) {
  if (seeking) {
    seekingMatches++;
  }
  return seeking;
}

function matchFrame(frameworksStudent, frameworksPosting, frameworkMatches) {
  // Empty case
  if (frameworksPosting.length === 0) {
    frameworkMatches++;
    return true;
  }

  // Return true if student has at least one frame
  for (var i = 0; i < frameworksPosting.length; i++) {
    if (frameworksStudent[frameworksPosting[i]]) {
      frameworkMatches++;
      return true;
    }
  }
  return false;
}

function matchWork(experienceStudent, experiencePosting, workExpMatches) {
  // Null case
  if (isNaN(experiencePosting)) {
    workExpMatches++;
    return true;
  } else {
    // Return true if student at least meets requirements
    if (experienceStudent >= experiencePosting) {
      workExpMatches++;
    }
    return experienceStudent >= experiencePosting;
  }
}

function matchLang(languagesStudent, languagesPosting, langMatches) {
  // Empty case
  if (languagesPosting.length === 0) {
    langMatches++;
    return true;
  }

  // Return true if student has at least one language
  for (var i = 0; i < languagesPosting.length; i++) {
    if (languagesStudent[languagesPosting[i]]) {
      langMatches++;
      return true;
    }
  }
  return false;
}

function matchTools(toolsStudent, toolsPosting, toolsMatches) {
  // Empty case
  if (toolsPosting.length === 0) {
    toolsMatches++;
    return true;
  }

  // Return true if student has at least one tool match
  for (var i = 0; i < toolsPosting.length; i++) {
    if (toolsStudent[toolsPosting[i]]) {
      toolsMatches++;
      return true;
    }
  }
  return false;
}

function matchConcepts(conceptsStudent, conceptsPosting, conceptsMatches) {
  // Empty case
  if (conceptsPosting.length === 0) {
    conceptsMatches++;
    return true;
  }
  // Return true if student has at least one concept match
  for (var i = 0; i < conceptsPosting.length; i++) {
    if (conceptsStudent.includes(conceptsPosting[i])) {
      conceptsMatches++;
      return true;
    }
  }
  return false;
}

function postingDegreeRank(pDegrees) {
  let postingRanks = [];
  for (var i = 0; i < pDegrees.length; i++) {
    if (pDegrees[i] === "Ph.D") {
      postingRanks.push(6);
    }
    if (pDegrees[i] === "Master's Degree") {
      postingRanks.push(5);
    }
    if (pDegrees[i] === "Bachelor's Degree") {
      postingRanks.push(4);
    }
    if (pDegrees[i] === "Associate's Degree") {
      postingRanks.push(3);
    }
    if (pDegrees[i] === "Diploma") {
      postingRanks.push(2);
    }
    if (pDegrees[i] === "Certification") {
      postingRanks.push(1);
    }
  }
  return Math.min(...postingRanks);
}

// PhD, MSc, BSc, ASc, Dip, Cert
function studentDegreeRank(sDegrees) {
  let studentRanks = [];
  if (sDegrees["PhD"] !== undefined || sDegrees["JD"] !== undefined) {
    studentRanks.push(6);
  }
  if (sDegrees["MSc"] !== undefined) {
    studentRanks.push(5);
  }
  if (sDegrees["BSc"] !== undefined || sDegrees["BCS"] !== undefined) {
    studentRanks.push(4);
  }
  if (sDegrees["ASc"] !== undefined) {
    studentRanks.push(3);
  }
  if (sDegrees["Dip"] !== undefined) {
    studentRanks.push(2);
  }
  if (sDegrees["Cert"] !== undefined) {
    studentRanks.push(1);
  }
  return Math.max(...studentRanks);
}

function matchAcademicReq(academicReqStudent, academicReqPosting, academicMatches) {
  // PhD > MSc > BSc > Associates > Diploma > Certificate (by rank)
  if (academicReqPosting.length === 0) {
    academicMatches++;
    return true;
  }
  const studentRank = studentDegreeRank(academicReqStudent);
  const postingRank = postingDegreeRank(academicReqPosting);
  if (studentRank >= postingRank) {
    academicMatches++;
  }
  return studentRank >= postingRank;
}

function matchCitizen(candidateStudent, candidatesPosting, citizenMatches) {
  // Empty case
  if (candidatesPosting.length === 3) {
    citizenMatches++;
    return true;
  }
  // Anyone case
  if (candidatesPosting.includes("Anyone")) {
    citizenMatches++;
    return true;
  } else {
    if (candidatesPosting.includes(candidateStudent)) {
      citizenMatches++;
    }
    return candidatesPosting.includes(candidateStudent);
  }
}
