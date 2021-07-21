import React from "react";
import { ChipBasic } from "../../atoms/Chips";

const Feedback1 = ({ data }) => {
  const msg1 = `Total student body of ${data.length}`;
  return (
    <div className="feedback_page1_inner">
      <ChipBasic label={msg1} />
    </div>
  );
};

export default Feedback1;
