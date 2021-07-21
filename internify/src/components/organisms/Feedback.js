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
    console.log(pageObjects);
    return (
      <div>
        <h1> Page 1 Feedback </h1>
      </div>
    );
  } else if (page === 2) {
    console.log(pageObjects.page1Object.page1Students);
    return (
      <div>
        <h1> Page 2 Feedback </h1>
      </div>
    );
  } else if (page === 3) {
    console.log(pageObjects.page2Object.page2Students);
    return (
      <div>
        <h1> Page 3 Feedback </h1>
      </div>
    );
  } else if (page === 4) {
    console.log(pageObjects.page3Object.page3Students);
    return (
      <div>
        <h1> Page 4 Feedback </h1>
      </div>
    );
  } else if (page === 5) {
    console.log(pageObjects.page3Object.page3Students);
    return (
      <div>
        <h1> Page 5 Feedback </h1>
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
