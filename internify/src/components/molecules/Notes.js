import React from 'react'

const Notes = ({canadaMatches, ubcMatches, totalMatches, totalStudents}) => {
    return (
        <div className="notes_container">
            <h3>Notes</h3>
                <div className="notes_row">
                    <h5>
                        {totalMatches} out of {totalStudents} matches in our DB
                    </h5> 
                </div>
                <div className="notes_row">
                    <h5>
                        {ubcMatches} matches with UBC students
                    </h5>
                </div>
                <div className="notes_row">
                    <h5>
                        {canadaMatches} total matches in Canada
                    </h5>
                </div>
        </div>
    )
}

export default Notes
