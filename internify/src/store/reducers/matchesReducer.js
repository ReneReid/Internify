import { PROCESS_MATCHES } from "../actions/types/matchesTypes";

const initialState = {
  matches: [],
};

export default function matchesReducer(state = initialState, action) {
  switch (action.type) {
    case PROCESS_MATCHES:
      const students = action.payload.students;
      const posting = action.payload.posting;
      console.log(posting);
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
      matchGpa(student.gpa, posting.gpaRequired) &&
      matchCoop(student.coop, posting.coopReqs) &&
      matchSeek(student.seeking) &&
      // matchFrame(student.frameworks, posting.frameworks) &&
      // matchWork(student.workExperience, posting.experienceLength) &&
      // matchLang(student.codingLanguages, posting.codingLanguages) &&
      // matchTools(student.workTools, posting.workTools) &&
      // matchConcepts(student.concepts, posting.concepts) &&
      // matchDegree(student.degree, posting.academicReqs) &&
      // matchCitizen(student.citizenship, posting.citizenshipReqs)
      true
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
  // Return true if student has at least one frame
  pFrame.forEach((frame) => {
    if (frame in sFrame) {
      return true;
    }
  });
  return false;
}

function matchCitizen(sCitizen, pCitizen) {
  if (pCitizen.contains(sCitizen[0])) {
    return true;
  } else {
    return false;
  }
}

function matchWork(sWork, pWork) {
  return sWork >= pWork;
}

function matchLang(sLang, pLang) {
  for (let language of pLang) {
    if (sLang.has(language)) {
      return true;
    }
  }
  return false;
}

function matchTools(sTools, pTools) {
  for (let tool of pTools) {
    if (sTools.has(tool)) {
      return true;
    }
  }
  return false;
}

function matchConcepts(sConcepts, pConcepts) {
  for (let concept of pConcepts) {
    if (sConcepts.has(concept)) {
      return true;
    }
  }
  return false;
}

function matchDegree(sDegrees, pDegrees) {
  for (let degree of pDegrees) {
    if (!sDegrees.has(degree)) {
      return false;
    }
  }
  return true;
}
