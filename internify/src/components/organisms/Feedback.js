import { React, useEffect, useState } from "react";
import RegisteredKeys from "../molecules/RegisteredKeys";
import Notes from "../molecules/Notes";
import Score from "../molecules/Score";
import { useSelector } from "react-redux";
import "./styles/Feedback.css";

const Feedback = () => {
  const students = useSelector((state) => state.students.studentList);
  const matchLength = 5; // dummy placeholder for future matcher implementation

  // State setting for props in sub-components rendering
  const [score, setScore] = useState(0);
  const [cMatches, setCMatches] = useState(0);
  const [ubcMatches, setUbcMatches] = useState(0);
  const [totalMatches, setTotalMatches] = useState(0);
  const totalStudents = students.length;

  useEffect(() => {
    calculateScore(students);
    notesContent(students);
  });

  function calculateScore(students) {
    const rawScore = matchLength / students.length;
    const displayScore = Math.sqrt(rawScore);
    setScore(displayScore);
  }

  function notesContent(students) {
    // randomly pick students to match
    let matches = [];
    for (let i = 0; i < matchLength; i++) {
      const pick = Math.floor(Math.random() * 10);
      matches.push(students[pick]);
    }
    setTotalMatches(matches.length);

    // matches with UBC students
    let matchesUBC = 0;
    for (let match of matches) {
      const matchBSc = match["degree"]["BSc"];
      const matchMSc = match["degree"]["MSc"];
      const matchPhD = match["degree"]["PhD"];
      const name = "University of British Columbia";

      if (matchBSc === name || matchMSc === name || matchPhD === name) {
        matchesUBC++;
      }
    }
    setUbcMatches(matchesUBC);

    // matches with Canadian students
    let matchesCanada = 0;
    for (let match of matches) {
      const location = match["location"];
      if (location === "Canada") {
        matchesCanada++;
      }
    }
    setCMatches(matchesCanada);
  }

  return (
    <div className="feedback_container">
      <RegisteredKeys />
      <Notes
        canadaMatches={cMatches}
        ubcMatches={ubcMatches}
        totalMatches={totalMatches}
        totalStudents={totalStudents}
      />
      <Score score={score} />
    </div>
  );
};
export default Feedback;
