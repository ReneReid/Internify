import React from 'react'
import RegisteredKeys from '../molecules/RegisteredKeys';
import Notes from '../molecules/Notes';
import Score from '../molecules/Score';

const Feedback = () => {
    return (
        <div className="feedback_container">
            <RegisteredKeys />
            <Notes />
            <Score />
        </div>
    )
}
export default Feedback
