import React from "react";
import { ChipNote } from "../../atoms/Chips";
import "./styles/Feedback.css";

const SeekingStudents = ({ data }) => {
  const keyArray = Object.keys(data);
  return (
    <div className="feedback_page2_inner">
      <ul className="feedback_list">
        {keyArray.map((x) => {
          // list refers to array of students within object
          if (x === "page1Students") return null;
          const msg = `${data[x]} students currently ${x} a job`;
          return (
            <li key={x}>
              {" "}
              <ChipNote label={msg} />{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SeekingStudents;
