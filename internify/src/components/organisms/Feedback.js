import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ChipEye } from "../atoms/Chips";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import SeekingStudents from "../molecules/pages/SeekingStudents";
import TechMatchStudents from "../molecules/pages/TechMatchStudents";
import FinalReqStudents from "../molecules/pages/FinalReqStudents";
import "./styles/Feedback.css";

const Feedback = ({ page }) => {
  const allStudents = useSelector((state) => state.students.studentList);
  const pageObjects = useSelector((state) => state.matches);
  const [display, setDisplay] = useState(false);

  useEffect(() => {}, []);

  if (page === 1) {
    return (
      <div className="feedback_outer">
        <h2> {allStudents.length} total students </h2>
      </div>
    );
  } else if (page === 2) {
    const msg = `${pageObjects.page1Object.page1Students.length} total matches`;
    return (
      <div className="feedback_outer">
        <h2> {allStudents.length} total students </h2>
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
        <h2> {allStudents.length} total students </h2>
        <SeekingStudents data={pageObjects.page1Object} display={display} />
        <TechMatchStudents data={pageObjects.page2Object} display={display} />
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
  } else if (page === 4) {
    const msg = `${pageObjects.page3Object.page3Students.length} total matches`;
    return (
      <div className="feedback_outer">
        <h2> {allStudents.length} total students </h2>
        <SeekingStudents data={pageObjects.page1Object} display = {display}/>
        <TechMatchStudents data={pageObjects.page2Object} display = {display} />
        <FinalReqStudents data={pageObjects.page3Object} display = {display} />
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
  } else if (page === 5) {
    const msg = `${pageObjects.page3Object.page3Students.length} total matches`;
    return (
      <div className="feedback_outer">
        <h2> {allStudents.length} total students </h2>
        <SeekingStudents data={pageObjects.page1Object} display = {display} />
        <TechMatchStudents data={pageObjects.page2Object} display = {display} />
        <FinalReqStudents data={pageObjects.page3Object} display = {display} />
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
  }
};

export default Feedback;
