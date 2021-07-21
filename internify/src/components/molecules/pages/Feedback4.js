import React from "react";
import { ChipNote } from "../../atoms/Chips";
import "./styles/Feedback.css";

const Feedback4 = ({ data }) => {
  const keyArray = Object.keys(data);
  return (
    <div className="feedback_page4_inner">
      <ul className="feedback_list">
        {keyArray.map((x) => {
          if (x === "academicReq") {
            const msg = `${data[x]} students also meet academic requirements`;
            return (
              <li>
                <ChipNote label={msg} />
              </li>
            );
          } else if (x === "page3Students") {
            const msg = `${data[x].length} total matches`;
            return (
              <li>
                <ChipNote label={msg} />
              </li>
            );
          } else {
            const msg = `${data[x]} students also meet ${x} requirements`;
            return (
              <li>
                <ChipNote label={msg} />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Feedback4;
