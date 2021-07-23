import React from "react";
import { ChipNote } from "../../atoms/Chips";
import "./styles/Feedback.css";

const TotalStudents = ({ data }) => {
  const msg1 = `${data.length} total students`;
  return (
    <div className="feedback_page1_inner">
      <ul className="feedback_list">
        <li>
          {" "}
          <ChipNote label={msg1} />{" "}
        </li>
      </ul>
    </div>
  );
};

export default TotalStudents;
