import React from "react";
import { ChipBasic } from "../../atoms/Chips";
import "./styles/Feedback.css"

const Feedback1 = ({ data }) => {
  const msg1 = `${data.length} total students`;
  return (
    <div className="feedback_page1_inner">
      <ul className="feedback_list">
        <li>
          {" "}
          <ChipBasic label={msg1} />{" "}
        </li>
      </ul>
    </div>
  );
};

export default Feedback1;
