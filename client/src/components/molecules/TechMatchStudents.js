import React from "react";
import { ChipNote } from "../atoms/Chips";
import "./styles/Feedback.css";

const TechMatchStudents = ({ data, display }) => {
  if (display) {
    const keyArray = Object.keys(data);
    return (
      <div className="feedback_page3_inner">
        <ul className="feedback_list">
          {keyArray.map((x) => {
            if (x === "toolsMatches") {
              const msg = `${data[x]} students also meet work tools requirements`;
              return (
                <li key={x}>
                  <ChipNote label={msg} />
                </li>
              );
            } else if (x === "page2Students") {
              return null;
              // list refers to array of students within object
            } else {
              const msg = `${data[x]} students also meet ${x} requirements`;
              return (
                <li key={x}>
                  <ChipNote label={msg} />
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
};

export default TechMatchStudents;
