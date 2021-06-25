import { PROCESS_MATCHES } from "../actions/types/matchesTypes";

const initialState = {
matches: []
}

export default function matchesReducer(state = initialState, action) {
switch(action.type) {
    case PROCESS_MATCHES:
    const students = action.payload.students;
    const posting = action.payload.posting;
    const postingMatch = matchFilter(students, posting)
    return [...state, 
            postingMatch
            ];
    default:
        return state;
};
}

// matching algorithm
// Inputs: students = [{student 1}, {student 2}, {student 3}, ...], posting = {a1, a2, ...}
// Output: {postingID: {student 1, student 2, ...}}
function matchFilter(students, posting) {
let matchedStudents = students.filter(student => (
    matchGpa(student.gpa, posting.gpaRequired) && 
    matchCoop(student.coop, posting.coop) && 
    matchSeek(student.seek) && 
    matchFrame(student.frameworks, posting.frameworks) &&
    matchWork(student.workExperience, posting.experienceLength) && 
    matchLang(student.codingLanguages, posting.codingLanguages) && 
    matchTools(student.workTools, posting.workTools) && 
    matchConcepts(student.concepts, posting.concepts) && 
    matchDegree(student.degree, posting.academicReqs) && 
    matchCitizen(student.citizenship, posting.citizenshipReqs)
));

const id = posting.id
let match = {}
match[id] = matchedStudents;

return match;
}

// Individual filters for attribute, consumes student.attribute and posting.attribute
function matchGpa(sGPA, pGPA){
    return (sGPA >= pGPA);
}


function matchCoop(sCoop, pCoop){
    if (pCoop) {
        return sCoop;
    } else {
        return true;
    }
}

function matchCitizen(sCitizen, pCitizen){
    if (pCitizen.contains(sCitizen[0])) {
        return true;
    } else {
        return false;
    }
}


function matchSeek(seeking){
    return seeking;
}


function matchWork(sWork, pWork){
    return (sWork >= pWork);
}



function matchLang(sLang, pLang){
    for (let language of pLang) {
        if (sLang.has(language)) {
            return true;
        }
    }
    return false;
}


function matchFrame(sFrame, pFrame){
    for (let framework of pFrame) {
        if (sFrame.has(framework)) {
            return true;
        }
    }
    return false;
}


function matchTools(sTools, pTools){
    for (let tool of pTools) {
        if (sTools.has(tool)) {
            return true;
        }
    } 
    return false;
}


function matchConcepts(sConcepts, pConcepts){
    for (let concept of pConcepts) {
        if (sConcepts.has(concept)) {
            return true;
        }
    }   
    return false;
}


function matchDegree(sDegrees, pDegrees){
    for (let degree of pDegrees) {
        if (!sDegrees.has(degree)){
        return false;
        }
    }
    return true;
}