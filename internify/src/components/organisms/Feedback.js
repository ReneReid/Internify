import { React, useEffect, useState } from "react";
import Notes from "../molecules/Notes";
import Score from "../molecules/Score";
import { useSelector } from "react-redux";
import "./styles/Feedback.css";

const Feedback = ({ page }) => {
  const allStudents = useSelector((state) => state.students.studentList);
  const pageObjects = useSelector((state) => state.matches);

  useEffect(() => {}, []);

  if (page === 1) {
    // const numberSoFar = allStudents.length
    return (
      <div>
        <h1> FEEDBACK </h1>
        <h1> {allStudents.length} </h1>
      </div>
    );
  } else if (page === 2) {
    return (
      <div>
        <h1> FEEDBACK </h1>
        <h1> Total student body: {allStudents.length} </h1>
        <h1> Students seeking: {pageObjects.page1Object.seeking} </h1>
      </div>
    );
  } else if (page === 3) {
    return (
      <div>
        <h1> FEEDBACK </h1>
        <h1> Total student body: {allStudents.length} </h1>
        <h1> Students seeking: {pageObjects.page1Object.seeking} </h1>
        <h1> Students also meeting experience req: {pageObjects.page2Object.experience} </h1>
        <h1> Students also meeting gpa req: {pageObjects.page2Object.gpa} </h1>
        <h1> Students also meeting language req: {pageObjects.page2Object.languages} </h1>
        <h1> Students also meeting frameworks req: {pageObjects.page2Object.frameworks} </h1>
        <h1> Students also meeting tools req: {pageObjects.page2Object.toolsMatches} </h1>
        <h1> Students also meeting concepts req: {pageObjects.page2Object.concepts} </h1>
        <h1> Total current matches: {pageObjects.page2Object.page2Students.length} </h1>
      </div>
    );
  } else if (page === 4) {
    return (
      <div>
        <h1> FEEDBACK </h1>
        <h1> Total student body: {allStudents.length} </h1>
        <h1> Students seeking: {pageObjects.page1Object.seeking} </h1>
        <h1> Students also meeting experience req: {pageObjects.page2Object.experience} </h1>
        <h1> Students also meeting gpa req: {pageObjects.page2Object.gpa} </h1>
        <h1> Students also meeting language req: {pageObjects.page2Object.languages} </h1>
        <h1> Students also meeting frameworks req: {pageObjects.page2Object.frameworks} </h1>
        <h1> Students also meeting tools req: {pageObjects.page2Object.toolsMatches} </h1>
        <h1> Students also meeting concepts req: {pageObjects.page2Object.concepts} </h1>
        <h1> Students also meeting citizenship req: {pageObjects.page3Object.candidates} </h1>
        <h1> Students also meeting coop req: {pageObjects.page3Object.coop} </h1>
        <h1> Students also meeting academic req: {pageObjects.page3Object.academicReq} </h1>
        <h1> Total current matches: {pageObjects.page3Object.page3Students.length} </h1>
      </div>
    );
  } else if (page === 5) {

    return (
      <div>
        <h1> FEEDBACK </h1>
        <h1> Total student body: {allStudents.length} </h1>
        <h1> Students seeking: {pageObjects.page1Object.seeking} </h1>
        <h1> Students also meeting experience req: {pageObjects.page2Object.experience} </h1>
        <h1> Students also meeting gpa req: {pageObjects.page2Object.gpa} </h1>
        <h1> Students also meeting language req: {pageObjects.page2Object.languages} </h1>
        <h1> Students also meeting frameworks req: {pageObjects.page2Object.frameworks} </h1>
        <h1> Students also meeting tools req: {pageObjects.page2Object.toolsMatches} </h1>
        <h1> Students also meeting concepts req: {pageObjects.page2Object.concepts} </h1>
        <h1> Students also meeting citizenship req: {pageObjects.page3Object.candidates} </h1>
        <h1> Students also meeting coop req: {pageObjects.page3Object.coop} </h1>
        <h1> Students also meeting academic req: {pageObjects.page3Object.academicReq} </h1>
        <h1> Total current matches: {pageObjects.page3Object.page3Students.length} </h1>
      </div>
    );
  }
};

export default Feedback;

// const Feedback = () => {
//   // Grab appropriate information from state
//   const students = useSelector((state) => state.students.studentList); // all students from database
//   const jobId = useSelector((state) => state.jobs.currentPosting["jobId"]); // the jobID
//   const allMatches = useSelector((state) => state.matches); // all jobID:matches pairings
//   let matchStudents = []; // matches for the job in question
//   allMatches.forEach((match) => {
//     if (match[jobId] !== undefined) {
//       matchStudents = match[jobId];
//     }
//   });
//   const matchLength = matchStudents.length; // number of matches for job

//   // State setting for props in sub-components rendering
//   const [score, setScore] = useState(0);
//   const [cMatches, setCMatches] = useState(0);
//   const [ubcMatches, setUbcMatches] = useState(0);
//   const [totalMatches, setTotalMatches] = useState(0);
//   const totalStudents = students.length;

//   // calculate seeking students
//   function seekingStudents(totalStudents) {
//     let seekingLength = 0;
//     for (let i = 0; i < totalStudents.length; i++) {
//       if (totalStudents[i].seeking) {
//         seekingLength++;
//       }
//     }
//     return seekingLength;
//   }

//   useEffect(() => {
//     calculateScore(students);
//     notesContent(students);
//   });

//   function calculateScore(students) {
//     const rawScore = matchLength / seekingStudents(students);
//     const displayScore = Math.sqrt(rawScore);
//     setScore(displayScore);
//   }

//   function notesContent(students) {
//     setTotalMatches(matchLength);

//     // matches with UBC students
//     let matchesUBC = 0;
//     for (let match of matchStudents) {
//       const matchBSc = match["academicReq"]["BSc"];
//       const matchMSc = match["academicReq"]["MSc"];
//       const matchPhD = match["academicReq"]["PhD"];
//       const name = "University of British Columbia";

//       if (matchBSc === name || matchMSc === name || matchPhD === name) {
//         matchesUBC++;
//       }
//     }
//     setUbcMatches(matchesUBC);

//     // matches with Canadian students
//     let matchesCanada = 0;
//     for (let match of matchStudents) {
//       const location = match["location"];
//       if (location === "Canada") {
//         matchesCanada++;
//       }
//     }
//     setCMatches(matchesCanada);
//   }

//   return (
//     <div className="feedback_container">
//       <Notes
//         canadaMatches={cMatches}
//         ubcMatches={ubcMatches}
//         totalMatches={totalMatches}
//         totalStudents={totalStudents}
//       />
//       <Score score={score} />
//     </div>
//   );
// };
// export default Feedback;
