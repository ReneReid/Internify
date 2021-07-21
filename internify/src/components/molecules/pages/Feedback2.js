import React from "react";
import { ChipBasic } from "../../atoms/Chips";

const Feedback2 = ({ data }) => {
  const keyArray = Object.keys(data);
  console.log(keyArray);
  return (
    <div className="feedback_page2_inner">
      <ul>
        {keyArray.map((x) => {
          if (x === "page1Students") {
            const msg = `${data[x].length} total matches thus far`;
            return (
              <li>
                {" "}
                <ChipBasic label={msg} />{" "}
              </li>
            );
          } else {
            const msg = `${data[x]} students currently ${x} a job`;
            return (
              <li>
                {" "}
                <ChipBasic label={msg} />{" "}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Feedback2;
