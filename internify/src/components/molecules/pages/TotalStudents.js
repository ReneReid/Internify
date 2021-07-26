import React from "react";
import "./styles/Feedback.css";

const TotalStudents = ({ data }) => {
  return (
    <div className="feedback_page1_inner">
      <ul className="feedback_list">
        <li>
          <h2> {data.length} total students </h2>
        </li>
      </ul>
    </div>
  );
};

export default TotalStudents;
