import React from "react";
import { ChipNote } from "../../atoms/Chips";
import "./styles/Feedback.css";

const SeekingStudents = ({ data, display }) => {
  if (display) {
    const keyArray = Object.keys(data);
    return (
      <div className="feedback_page2_inner">
        <ul className="feedback_list">
          {keyArray.map((x) => {
            // list refers to array of students within object
            if (x === "page1Students") {
              return (
                <li key={x}>
                  <div></div>
                </li>
              );
            } else {
              const msg = `${data[x]} students currently ${x} a job`;
              return (
                <li key={x}>
                  {" "}
                  <ChipNote label={msg} />{" "}
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SeekingStudents;
