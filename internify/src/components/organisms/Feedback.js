import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ChipBasic } from "../atoms/Chips";
import Feedback1 from "../molecules/pages/Feedback1";
import Feedback2 from "../molecules/pages/Feedback2";
import "./styles/Feedback.css";

const Feedback = ({ page }) => {
  const allStudents = useSelector((state) => state.students.studentList);
  const pageObjects = useSelector((state) => state.matches);

  useEffect(() => {}, []);

  if (page === 1) {
    return (
      <div className="feedback_page1_outer">
        <Feedback1 data={allStudents} />
      </div>
    );
  } else if (page === 2) {
    return (
      <div className="feedback_page2_outer">
        <Feedback1 data={allStudents} />
        <Feedback2 data={pageObjects.page1Object} />
      </div>
    );
  } else if (page === 3) {
    const msg1 = `${allStudents.length} total students`;
    const msg2 = `${pageObjects.page1Object.seeking} students seeking a Job`;
    const msg3 = `${pageObjects.page2Object.experience} students also meet experience requirements`;
    const msg4 = `${pageObjects.page2Object.gpa} students also meet gpa requirements`;
    const msg5 = `${pageObjects.page2Object.languages} students also meet language requirements`;
    const msg6 = `${pageObjects.page2Object.frameworks} students also meet framework requirements`;
    const msg7 = `${pageObjects.page2Object.toolsMatches} students also meet worktools requirements`;
    const msg8 = `${pageObjects.page2Object.concepts} students also meet cs concepts requirements`;
    const total = `${pageObjects.page2Object.page2Students.length} total matches thus far`;

    return (
      <div>
        <ul>
          <li>
            <ChipBasic label={msg1} />
          </li>
          <li>
            <ChipBasic label={msg2} />
          </li>
          <li>
            <ChipBasic label={msg3} />
          </li>
          <li>
            <ChipBasic label={msg4} />
          </li>
          <li>
            <ChipBasic label={msg5} />
          </li>
          <li>
            <ChipBasic label={msg6} />
          </li>
          <li>
            <ChipBasic label={msg7} />
          </li>
          <li>
            <ChipBasic label={msg8} />
          </li>
          <li>
            <ChipBasic label={total} />
          </li>
        </ul>
      </div>
    );
  } else if (page === 4) {
    const msg1 = `${allStudents.length} total students`;
    const msg2 = `${pageObjects.page1Object.seeking} students seeking a Job`;
    const msg3 = `${pageObjects.page2Object.experience} students also meet experience requirements`;
    const msg4 = `${pageObjects.page2Object.gpa} students also meet gpa requirements`;
    const msg5 = `${pageObjects.page2Object.languages} students also meet language requirements`;
    const msg6 = `${pageObjects.page2Object.frameworks} students also meet framework requirements`;
    const msg7 = `${pageObjects.page2Object.toolsMatches} students also meet worktools requirements`;
    const msg8 = `${pageObjects.page2Object.concepts} students also meet cs concepts requirements`;
    const msg9 = `${pageObjects.page3Object.candidates} students also meet citizenship requirements`;
    const msg10 = `${pageObjects.page3Object.coop} students also meet coop requirements`;
    const msg11 = `${pageObjects.page3Object.academicReq} students also meet academic requirements`;
    const total = `${pageObjects.page3Object.page3Students.length} total matches`;
    return (
      <div>
        <ul>
          <li>
            <ChipBasic label={msg1} />
          </li>
          <li>
            <ChipBasic label={msg2} />
          </li>
          <li>
            <ChipBasic label={msg3} />
          </li>
          <li>
            <ChipBasic label={msg4} />
          </li>
          <li>
            <ChipBasic label={msg5} />
          </li>
          <li>
            <ChipBasic label={msg6} />
          </li>
          <li>
            <ChipBasic label={msg7} />
          </li>
          <li>
            <ChipBasic label={msg8} />
          </li>
          <li>
            <ChipBasic label={msg9} />
          </li>
          <li>
            <ChipBasic label={msg10} />
          </li>
          <li>
            <ChipBasic label={msg11} />
          </li>
          <li>
            <ChipBasic label={total} />
          </li>
        </ul>
      </div>
    );
  } else if (page === 5) {
    const msg1 = `${allStudents.length} total students`;
    const msg2 = `${pageObjects.page1Object.seeking} students seeking a Job`;
    const msg3 = `${pageObjects.page2Object.experience} students also meet experience requirements`;
    const msg4 = `${pageObjects.page2Object.gpa} students also meet gpa requirements`;
    const msg5 = `${pageObjects.page2Object.languages} students also meet language requirements`;
    const msg6 = `${pageObjects.page2Object.frameworks} students also meet framework requirements`;
    const msg7 = `${pageObjects.page2Object.toolsMatches} students also meet worktools requirements`;
    const msg8 = `${pageObjects.page2Object.concepts} students also meet cs concepts requirements`;
    const msg9 = `${pageObjects.page3Object.candidates} students also meet citizenship requirements`;
    const msg10 = `${pageObjects.page3Object.coop} students also meet cool requirements`;
    const msg11 = `${pageObjects.page3Object.academicReq} students also meet academic requirements`;
    const total = `${pageObjects.page3Object.page3Students.length} total matches`;
    return (
      <div>
        <ul>
          <li>
            <ChipBasic label={msg1} />
          </li>
          <li>
            <ChipBasic label={msg2} />
          </li>
          <li>
            <ChipBasic label={msg3} />
          </li>
          <li>
            <ChipBasic label={msg4} />
          </li>
          <li>
            <ChipBasic label={msg5} />
          </li>
          <li>
            <ChipBasic label={msg6} />
          </li>
          <li>
            <ChipBasic label={msg7} />
          </li>
          <li>
            <ChipBasic label={msg8} />
          </li>
          <li>
            <ChipBasic label={msg9} />
          </li>
          <li>
            <ChipBasic label={msg10} />
          </li>
          <li>
            <ChipBasic label={msg11} />
          </li>
          <li>
            <ChipBasic label={total} />
          </li>
        </ul>
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
