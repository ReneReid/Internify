import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ChipEye } from "../atoms/Chips";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import TotalStudents from "../molecules/pages/TotalStudents";
import SeekingStudents from "../molecules/pages/SeekingStudents";
import TechMatchStudents from "../molecules/pages/TechMatchStudents";
import FinalReqStudents from "../molecules/pages/FinalReqStudents";
import "./styles/Feedback.css";

const Feedback = ({ page }) => {
  const allStudents = useSelector((state) => state.students.studentList);
  const pageObjects = useSelector((state) => state.matches);
  const [display, setDisplay] = useState(true);

  useEffect(() => {}, []);

  if (page === 1) {
    return (
      <div className="feedback_outer">
        <TotalStudents data={allStudents} />
      </div>
    );
  } else if (page === 2) {
    const msg = `${pageObjects.page1Object.page1Students.length} total matches`;
    return (
      <div className="feedback_outer">
        <TotalStudents data={allStudents} />
        <SeekingStudents data={pageObjects.page1Object} display={display} />
        {display ? (
          <IconButton
            aria-label="display-toggle"
            onClick={() => {
              setDisplay(!display);
            }}
          >
            <ChipEye icon={<VisibilityIcon />} label={msg} />
          </IconButton>
        ) : (
          <IconButton
            aria-label="display-toggle"
            onClick={() => {
              setDisplay(!display);
            }}
          >
            <ChipEye icon={<VisibilityOffIcon />} label={msg} />
          </IconButton>
        )}
      </div>
    );
  } else if (page === 3) {
    const msg = `${pageObjects.page2Object.page2Students.length} total matches`;
    return (
      <div className="feedback_outer">
        <TotalStudents data={allStudents} />
        <SeekingStudents data={pageObjects.page1Object} />
        <TechMatchStudents data={pageObjects.page2Object} />
        <ChipEye label={msg} />
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
