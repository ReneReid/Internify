import { React, useEffect, useState } from "react";
import Notes from "../molecules/Notes";
import Score from "../molecules/Score";
import { useSelector } from "react-redux";
import { ChipBasic } from "../atoms/Chips";
import "./styles/Feedback.css";

const Feedback = ({ page }) => {
  const allStudents = useSelector((state) => state.students.studentList);
  const pageObjects = useSelector((state) => state.matches);

  useEffect(() => {}, []);

  if (page === 1) {
    const msg1 = `Total student body of ${allStudents.length}`;
    return (
      <div>
        <ChipBasic label={msg1} />
      </div>
    );
  } else if (page === 2) {
    const msg1 = `Total student body of ${allStudents.length}`;
    const msg2 = `${pageObjects.page1Object.seeking} students are currently seeking a Job`;
    return (
      <div>
        <ul>
          <li>
            <ChipBasic label={msg1} />
          </li>
          <li>
            <ChipBasic label={msg2} />
          </li>
        </ul>
      </div>
    );
  } else if (page === 3) {
    const msg1 = `Total student body of ${allStudents.length}`;
    const msg2 = `${pageObjects.page1Object.seeking} students are currently seeking a Job`;
    const msg3 = `Students also meeting experience requirements: ${pageObjects.page2Object.experience}`;
    const msg4 = `Students also meeting gpa requirements: ${pageObjects.page2Object.gpa}`;
    const msg5 = `Students also meeting language requirements: ${pageObjects.page2Object.languages}`;
    const msg6 = `Students also meeting framework requirements: ${pageObjects.page2Object.frameworks}`;
    const msg7 = `Students also meeting tool requirements: ${pageObjects.page2Object.toolsMatches}`;
    const msg8 = `Students also meeting concepts requirements: ${pageObjects.page2Object.concepts}`;
    const total = `You have ${pageObjects.page2Object.page2Students.length} total matches thus far`;

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
    const msg1 = `Total student body of ${allStudents.length}`;
    const msg2 = `${pageObjects.page1Object.seeking} students are currently seeking a Job`;
    const msg3 = `Students also meeting experience requirements: ${pageObjects.page2Object.experience}`;
    const msg4 = `Students also meeting gpa requirements: ${pageObjects.page2Object.gpa}`;
    const msg5 = `Students also meeting language requirements: ${pageObjects.page2Object.languages}`;
    const msg6 = `Students also meeting framework requirements: ${pageObjects.page2Object.frameworks}`;
    const msg7 = `Students also meeting tool requirements: ${pageObjects.page2Object.toolsMatches}`;
    const msg8 = `Students also meeting concepts requirements: ${pageObjects.page2Object.concepts}`;
    const msg9 = `Students also meeting citizenship requirements: ${pageObjects.page3Object.candidates}`;
    const msg10 = `Students also meeting co-op requirements: ${pageObjects.page3Object.coop}`;
    const msg11 = `Students also meeting academic requirements: ${pageObjects.page3Object.academicReq}`;
    const total = `You have ${pageObjects.page3Object.page3Students.length} total matches thus far`;
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
    const msg1 = `Total student body of ${allStudents.length}`;
    const msg2 = `${pageObjects.page1Object.seeking} students are currently seeking a Job`;
    const msg3 = `Students also meeting experience requirements: ${pageObjects.page2Object.experience}`;
    const msg4 = `Students also meeting gpa requirements: ${pageObjects.page2Object.gpa}`;
    const msg5 = `Students also meeting language requirements: ${pageObjects.page2Object.languages}`;
    const msg6 = `Students also meeting framework requirements: ${pageObjects.page2Object.frameworks}`;
    const msg7 = `Students also meeting tool requirements: ${pageObjects.page2Object.toolsMatches}`;
    const msg8 = `Students also meeting concepts requirements: ${pageObjects.page2Object.concepts}`;
    const msg9 = `Students also meeting citizenship requirements: ${pageObjects.page3Object.candidates}`;
    const msg10 = `Students also meeting co-op requirements: ${pageObjects.page3Object.coop}`;
    const msg11 = `Students also meeting academic requirements: ${pageObjects.page3Object.academicReq}`;
    const total = `You have ${pageObjects.page3Object.page3Students.length} total matches thus far`;
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
