import React from 'react'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Chip } from "@material-ui/core";
import "./styles/Notes.css";


const Notes = ({canadaMatches, ubcMatches, totalMatches, totalStudents}) => {

    const msg1 = `${totalMatches} out of ${totalStudents} matches in our DB`
    const msg2 = `${ubcMatches} matches with UBC students`
    const msg3 = `${canadaMatches} total matches in Canada`

    let styles = {
        backgroundColor: "yellow",
        color: "black",
        fontfamily: "Helvetica"
    }

    return (
        <div className="notes_container">
            <h3>Notes</h3>
                <div className="notes_row">
                    <Chip 
                        icon={<CheckCircleOutlineIcon
                                style={{color: "black"}} />}
                        label={msg1}
                        style={styles}/>
                </div>
                <div className="notes_row">
                    <Chip 
                        icon={<CheckCircleOutlineIcon
                                style={{color: "black"}} />}
                        label={msg2}
                        style={styles}/>
                </div>
                <div className="notes_row">
                    <Chip 
                        icon={<CheckCircleOutlineIcon
                                style={{color: "black"}} />}
                        label={msg3}
                        style={styles}/>
                </div>
        </div>
    )
}

export default Notes
