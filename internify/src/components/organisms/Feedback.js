import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ChipNote } from "../atoms/Chips";
import TotalStudents from "../molecules/pages/Feedback1";
import SeekingStudents from "../molecules/pages/Feedback2";
import TechMatchStudents from "../molecules/pages/Feedback3";
import FinalReqStudents from "../molecules/pages/Feedback4";
import "./styles/Feedback.css";

const Feedback = ({ page }) => {
  const allStudents = useSelector((state) => state.students.studentList);
  const pageObjects = useSelector((state) => state.matches);

  useEffect(() => {}, []);

  if (page === 1) {
    return (
      <div className="feedback_outer">
        <TotalStudents data={allStudents} />
      </div>
    );
  } else if (page === 2) {
    return (
      <div className="feedback_outer">
        <TotalStudents data={allStudents} />
        <SeekingStudents data={pageObjects.page1Object} />
      </div>
    );
  } else if (page === 3) {
    const msg = `${pageObjects.page2Object.page2Students.length} total matches`;
    return (
      <div className="feedback_outer">
        <TotalStudents data={allStudents} />
        <SeekingStudents data={pageObjects.page1Object} />
        <TechMatchStudents data={pageObjects.page2Object} />
        <ChipNote label={msg} />
      </div>
    );
  } else if (page === 4) {
    return (
      <div className="feedback_outer">
        <TotalStudents data={allStudents} />
        <SeekingStudents data={pageObjects.page1Object} />
        <TechMatchStudents data={pageObjects.page2Object} />
        <FinalReqStudents data={pageObjects.page3Object} />
      </div>
    );
  } else if (page === 5) {
    return (
      <div className="feedback_outer">
        <TotalStudents data={allStudents} />
        <SeekingStudents data={pageObjects.page1Object} />
        <TechMatchStudents data={pageObjects.page2Object} />
        <FinalReqStudents data={pageObjects.page3Object} />
      </div>
    );
  }
};

export default Feedback;
