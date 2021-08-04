import React from "react";
import { ChipNote } from "../atoms/Chips";

const ViewFeedback = ({ data, display }) => {
  if (display) {
    return (
      <div>
        <h1> Hello Test </h1>
      </div>
    );
  } else {
    return null;
  }
};

export default ViewFeedback;
