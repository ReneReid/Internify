import {React, useEffect, useState} from 'react'
import RegisteredKeys from '../molecules/RegisteredKeys';
import Notes from '../molecules/Notes';
import Score from '../molecules/Score';
import { useSelector } from 'react-redux';

const Feedback = () => {
    
    const students = useSelector((state) => state.students.studentList);
    const matchLength = 6; // dummy placeholder for future matcher implementation
    console.log(students);

    // State setting for props in sub-components rendering
    const [score, setScore] = useState(0);

    useEffect(() => {
        calculateScore(students);
    }, [students])

    // Score handling function
    // -> Input(studentList), Output(Score -> pass as prop into Score)
    function calculateScore(students) {
        const rawScore = matchLength/students.length;
        const displayScore = Math.sqrt(rawScore);
        setScore(displayScore);
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
