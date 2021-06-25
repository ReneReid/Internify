import {React, useEffect, useState} from 'react'
import RegisteredKeys from '../molecules/RegisteredKeys';
import Notes from '../molecules/Notes';
import Score from '../molecules/Score';
import { useSelector } from 'react-redux';

const Feedback = () => {
    
    const students = useSelector((state) => state.students.studentList);
    const matchLength = 6; // dummy placeholder for future matcher implementation

    // State setting for props in sub-components rendering
    const [score, setScore] = useState(0);

    useEffect(() => {
        calculateScore(students);
        notesContent(students);
    }, [students])

    // Score handling function
    // -> Input(studentList), Output(Score -> pass as prop into Score)
    function calculateScore(students) {
        const rawScore = matchLength/students.length;
        const displayScore = Math.sqrt(rawScore);
        setScore(displayScore);
    }

    function notesContent(students) {
        // randomly pick students to match
        let matches = []
        for (let i = 0; i < 6; i++) {
            const pick = Math.floor(Math.random() * 10);
            matches.push(students[pick]);
        }
        // console.log(matches);

        // matches in our DB
        const matchesLength = matches.length;
        // console.log(matchesLength);
        // matches with UBC students
        let matchesUBC = 0;
        for (let match of matches){
            const degrees = match["degree"];
            const matchBSc = match["degree"]["BSc"];
            const matchMSc = match["degree"]["MSc"];
            const matchPhD = match["degree"]["PhD"];
            const name = "University of British Columbia";
            
            if (matchBSc === name || matchMSc === name || matchPhD === name) {
                console.log("Attended UBC!");
                matchesUBC++;
            }
        }

        // total matches whose location is in Canada
        
    }

    return (
        <div className="feedback_container">
            <RegisteredKeys />
            <Notes />
            <Score score={score}/>
        </div>
    )
}
export default Feedback
