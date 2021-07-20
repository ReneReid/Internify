import { PROCESS_MATCHES } from "../actions/types/matchesTypes";

const initialState = {
  // matches: {
  //   page1Object: {},
  //   page2Object: {},
  //   page3Object: {},
  // },
  page1Object: {},
  page2Object: {},
  page3Object: {},
};

export default function matchesReducer(state = initialState, action) {
  switch (action.type) {
    case PROCESS_MATCHES:
      const students = action.payload.students;
      const posting = action.payload.posting;
      const page = action.payload.page;
      if (page === 1) {
        let page1Object = matchFilterPage1(students, posting);
        return { ...state, page1Object: page1Object };
      }
      if (page === 2) {
        let page2Object = matchFilterPage2(students, posting);
        return { ...state, page2Object: page2Object };
      }
      if (page === 3) {
        let page3Object = matchFilterPage3(students, posting);
        return { ...state, page3Object: page3Object };
      }
      break;
    default:
      return state;
  }
}

function matchFilterPage1(students, posting) {
  let seekingMatches = seekingFilter(students);

  let returnObject = {};
  returnObject["seeking"] = seekingMatches.length;
  returnObject["page1Students"] = seekingMatches;
  return returnObject;
}

function matchFilterPage2(students, posting) {
  let experienceMatches = workExpFilter(students, posting);
  let gpaMatches = gpaFilter(experienceMatches, posting);
  let languageMatches = langFilter(gpaMatches, posting);
  let frameMatches = frameFilter(languageMatches, posting);
  let toolsMatches = toolsFilter(frameMatches, posting);
  let conceptsMatches = conceptsFilter(toolsMatches, posting);

  let returnObject = {};
  returnObject["experience"] = experienceMatches.length;
  returnObject["gpa"] = gpaMatches.length;
  returnObject["languages"] = languageMatches.length;
  returnObject["frameworks"] = frameMatches.length;
  returnObject["toolsMatches"] = toolsMatches.length;
  returnObject["concepts"] = conceptsMatches.length;
  returnObject["page2Students"] = conceptsMatches;

  return returnObject;
}

function matchFilterPage3(students, posting) {
  let citizenMatches = citizenFilter(students, posting);
  let coopMatches = coopFilter(citizenMatches, posting);
  let academicMatches = academicFilter(coopMatches, posting);

  let returnObject = {};
  returnObject["candidates"] = citizenMatches.length;
  returnObject["coop"] = coopMatches.length;
  returnObject["academicReq"] = academicMatches.length;
  returnObject["page3Students"] = academicMatches;

  return returnObject;
}

function seekingFilter(students) {
  let matches = students.filter((student) => matchSeek(student.seeking));
  return matches;
}

function citizenFilter(students, posting) {
  let matches = students.filter((student) =>
    matchCitizen(student.candidate, posting.candidates)
  );
  return matches;
}

function academicFilter(students, posting) {
  let matches = students.filter((student) =>
    matchAcademicReq(student.academicReq, posting.academicReq)
  );
  return matches;
}

function workExpFilter(students, posting) {
  let matches = students.filter((student) =>
    matchWork(student.experience, posting.experience)
  );
  return matches;
}

function coopFilter(students, posting) {
  let matches = students.filter((student) =>
    matchCoop(student.coOp, posting.coOp)
  );
  return matches;
}

function conceptsFilter(students, posting) {
  let matches = students.filter((student) =>
    matchConcepts(student.concepts, posting.concepts)
  );
  return matches;
}

function gpaFilter(students, posting) {
  let matches = students.filter((student) =>
    matchGpa(student.gpa, posting.gpaValue, student.gpaValue)
  );
  return matches;
}

function langFilter(students, posting) {
  let matches = students.filter((student) =>
    matchLang(student.languages, posting.languages)
  );
  return matches;
}

function frameFilter(students, posting) {
  let matches = students.filter((student) =>
    matchFrame(student.frameworks, posting.frameworks)
  );
  return matches;
}

function toolsFilter(students, posting) {
  let matches = students.filter((student) =>
    matchTools(student.tools, posting.tools)
  );
  return matches;
}

// This section needs to be implemented
function matchGpa(gpa, postingGpaValue, studentGpaValue) {
  // empty case
  if (gpa === "") {
    return true;
  }
  if (gpa === "Optional") {
    return true;
  } else {
    return studentGpaValue >= postingGpaValue;
  }
}

function matchCoop(coOpStudent, coOpPosting) {
  // Co-op required or not
  if (coOpPosting) {
    return coOpStudent;
  } else {
    return true;
  }
}

function matchSeek(seeking) {
  return seeking;
}

function matchFrame(frameworksStudent, frameworksPosting) {
  // Empty case
  if (frameworksPosting.length === 0) {
    return true;
  }

  // Return true if student has at least one frame
  for (var i = 0; i < frameworksPosting.length; i++) {
    if (frameworksStudent[frameworksPosting[i]]) {
      return true;
    }
  }
  return false;
}

function matchWork(experienceStudent, experiencePosting) {
  // Null case
  if (isNaN(experiencePosting)) {
    return true;
  } else {
    // Return true if student at least meets requirements

    return experienceStudent >= experiencePosting;
  }
}

function matchLang(languagesStudent, languagesPosting) {
  // Empty case
  if (languagesPosting.length === 0) {
    return true;
  }

  // Return true if student has at least one language
  for (var i = 0; i < languagesPosting.length; i++) {
    if (languagesStudent[languagesPosting[i]]) {
      return true;
    }
  }
  return false;
}

function matchTools(toolsStudent, toolsPosting) {
  // Empty case
  if (toolsPosting.length === 0) {
    return true;
  }

  // Return true if student has at least one tool match
  for (var i = 0; i < toolsPosting.length; i++) {
    if (toolsStudent[toolsPosting[i]]) {
      return true;
    }
  }
  return false;
}

function matchConcepts(conceptsStudent, conceptsPosting) {
  // Empty case
  if (conceptsPosting.length === 0) {
    return true;
  }
  // Return true if student has at least one concept match
  for (var i = 0; i < conceptsPosting.length; i++) {
    if (conceptsStudent.includes(conceptsPosting[i])) {
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

function matchAcademicReq(academicReqStudent, academicReqPosting) {
  // PhD > MSc > BSc > Associates > Diploma > Certificate (by rank)
  if (academicReqPosting.length === 0) {
    return true;
  }
  const studentRank = studentDegreeRank(academicReqStudent);
  const postingRank = postingDegreeRank(academicReqPosting);

  return studentRank >= postingRank;
}

function matchCitizen(candidateStudent, candidatesPosting) {
  // Empty case
  if (candidatesPosting.length === 3) {
    return true;
  }
  // Anyone case
  if (candidatesPosting.includes("Anyone")) {
    return true;
  } else {
    return candidatesPosting.includes(candidateStudent);
  }
}
