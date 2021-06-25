import React from 'react'
import { Chip } from "@material-ui/core";
// import blue from '@material-ui/core/colors/blue';

const Score = ({score}) => {
    return (
        <div className="score_container">
            <h3>Score</h3>

            {(score >= 0.85) && <Chip 
                size="small"
                label="Excellent"
                />}

            {(score >= 0.70 && score <= 0.84) && <Chip
                size="small"
                label="Good"
                color="primary" />}

            {(score >= 0.50 && score <= 0.69) && <Chip 
                size="small"
                label="Satisfactory" />}

            {(score < 0.50) && <Chip 
                size="small"
                label="Poor" />}
        </div>
    )
}

export default Score
