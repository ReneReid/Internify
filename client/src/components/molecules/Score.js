import React from "react";
import { Chip } from "@material-ui/core";
// import blue from '@material-ui/core/colors/blue';

const Score = ({ score }) => {
  return (
    <div className="score_container">
      <h3>Score</h3>

      {score >= 0.5 && <Chip size="small" label="Excellent" />}

      {score >= 0.35 && score < 0.5 && (
        <Chip size="small" label="Good" color="primary" />
      )}

      {score >= 0.2 && score < 0.35 && (
        <Chip size="small" label="Satisfactory" />
      )}

      {score < 0.2 && <Chip size="small" label="Poor" />}
    </div>
  );
};

export default Score;
