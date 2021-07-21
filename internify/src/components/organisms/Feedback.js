import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ChipBasic } from "../atoms/Chips";
import Feedback1 from "../molecules/pages/Feedback1";
import Feedback2 from "../molecules/pages/Feedback2";
import Feedback3 from "../molecules/pages/Feedback3";
import Feedback4 from "../molecules/pages/Feedback4";
import "./styles/Feedback.css";

const Feedback = ({ page }) => {
  const allStudents = useSelector((state) => state.students.studentList);
  const pageObjects = useSelector((state) => state.matches);

  useEffect(() => {}, []);

  if (page === 1) {
    return (
      <div className="feedback_outer">
        <Feedback1 data={allStudents} />
      </div>
    );
  } else if (page === 2) {
    return (
      <div className="feedback_outer">
        <Feedback1 data={allStudents} />
        <Feedback2 data={pageObjects.page1Object} />
      </div>
    );
  } else if (page === 3) {
    return (
      <div className="feedback_outer">
        <Feedback1 data={allStudents} />
        <Feedback2 data={pageObjects.page1Object} />
        <Feedback3 data={pageObjects.page2Object} />
      </div>
    );
  } else if (page === 4) {
    return (
      <div className="feedback_outer">
        <Feedback1 data={allStudents} />
        <Feedback2 data={pageObjects.page1Object} />
        <Feedback3 data={pageObjects.page2Object} />
        <Feedback4 data={pageObjects.page3Object} />
      </div>
    );
  } else if (page === 5) {
    return (
      <div className="feedback_outer">
        <Feedback1 data={allStudents} />
        <Feedback2 data={pageObjects.page1Object} />
        <Feedback3 data={pageObjects.page2Object} />
        <Feedback4 data={pageObjects.page3Object} />
      </div>
    );
  }
};

export default Feedback;
