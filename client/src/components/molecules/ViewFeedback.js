import React from "react";

const ViewFeedback = ({ display }) => {
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
