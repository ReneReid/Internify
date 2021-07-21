import React from "react";
import { ChipBasic } from "../../atoms/Chips";

const Feedback4 = ({ data }) => {
  const keyArray = Object.keys(data);
  return (
    <div className="feedback_page4_inner">
      <ul>
        {keyArray.map((x) => {
          if (x === "academicReq") {
            const msg = `${data[x]} students also meet academic requirements`;
            return (
              <li>
                <ChipBasic label={msg} />
              </li>
            );
          } else if (x === "page3Students") {
            const msg = `${data[x].length} total matches`;
            return (
              <li>
                <ChipBasic label={msg} />
              </li>
            );
          } else {
            const msg = `${data[x]} students also meet ${x} requirements`;
            return (
              <li>
                <ChipBasic label={msg} />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Feedback4;
