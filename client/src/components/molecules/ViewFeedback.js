import React from "react";
import { ChipNote } from "../atoms/Chips";
import "./styles/ViewFeedback.css";

const ViewFeedback = ({ data, display }) => {
  if (display) {
    const keyArray = Object.keys(data);
    return (
      <div>
        <ul className="view_page_feedback_list">
          {keyArray.map((x) => {
            if (x === "toolsMatches") {
              return (
                <li key={x}>
                  <ChipNote
                    label={
                      data[x] + " students also meet work tools requirements"
                    }
                  />
                </li>
              );
            } else if (x === "academicReq") {
              return (
                <li key={x}>
                  <ChipNote
                    label={
                      data[x] + " students also meet academic requirements"
                    }
                  />
                </li>
              );
            } else {
              return (
                <li key={x}>
                  <ChipNote
                    label={
                      data[x] + " students also meet " + x + " requirements"
                    }
                  />
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

export default ViewFeedback;
