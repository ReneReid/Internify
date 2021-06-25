import React from 'react'
import { Chip } from "@material-ui/core";

const Score = () => {
    return (
        <div className="score_container">
            <h3>Score</h3>
            <Chip 
            size="small"
            label="Excellent" />
        </div>
    )
}

export default Score
