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
  let matchedStudents = students.filter(
    (student) =>
      matchGpa(student.gpa, posting.gpaRequired, posting.gpaValue) &&
      matchCoop(student.coop, posting.coopReqs) &&
      matchSeek(student.seeking) &&
      matchFrame(student.frameworks, posting.frameworks) &&
      matchWork(student.workExperience, posting.experienceLength) &&
      matchLang(student.codingLanguages, posting.codingLanguages) &&
      matchTools(student.workTools, posting.workTools) &&
      matchConcepts(student.concepts, posting.concepts) &&
      matchDegree(student.degree, posting.academicReqs) &&
      matchCitizen(student.citizenship, posting.citizenshipReqs)
  );

  const id = posting.id;
  let match = {};
  match[id] = matchedStudents;

  return match;
}

// This section needs to be implemented
function matchGpa(sGPA, pGPA) {
  return true;
}

function matchCoop(sCoop, pCoop) {
  // Co-op required or not
  if (pCoop) {
    return sCoop;
  } else {
    return true;
  }
}

function matchSeek(seeking) {
  return seeking;
}

function matchFrame(sFrame, pFrame) {
  // Empty case
  if (pFrame.length === 0) {
    return true;
  }

  // Return true if student has at least one frame
  for (var i = 0; i < pFrame.length; i++) {
    if (sFrame[pFrame[i]]) {
      return true;
    }
  }
  return false;
}

function matchWork(sWork, pWork) {
  // Null case
  if (isNaN(pWork)) {
    return true;
  } else {
    // Return true if student at least meets requirements
    return sWork >= pWork;
  }
}

function matchLang(sLang, pLang) {
  // Empty case
  if (pLang.length === 0) {
    return true;
  }

  // Return true if student has at least one language
  for (var i = 0; i < pLang.length; i++) {
    if (sLang[pLang[i]]) {
      return true;
    }
  }
  return false;
}

function matchTools(sTools, pTools) {
  // Empty case
  if (pTools.length === 0) {
    return true;
  }

  // Return true if student has at least one tool match
  for (var i = 0; i < pTools.length; i++) {
    if (sTools[pTools[i]]) {
      return true;
    }
  }
  return false;
}

function matchConcepts(sConcepts, pConcepts) {
  // Empty case
  if (pConcepts.length === 0) {
    return false;
  }
  // Return true if student has at least one concept match
  for (var i = 0; i < pConcepts.length; i++) {
    if (sConcepts.includes(pConcepts[i])) {
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
  if (sDegrees["BSc"] !== undefined) {
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

function matchDegree(sDegrees, pDegrees) {
  // PhD > MSc > BSc > Associates > Diploma > Certificate (by rank)
  const studentRank = studentDegreeRank(sDegrees);
  const postingRank = postingDegreeRank(pDegrees);
  return studentRank >= postingRank;
}

function matchCitizen(sCitizen, pCitizen) {
  if (pCitizen.includes("Anyone")) {
    return true;
  } else {
    return pCitizen.includes(sCitizen[0]);
  }
}
