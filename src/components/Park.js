import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function Park({ park }) {
    const [completed, setCompleted] = useState(false);

    const toggleCompletion = () => {
        setCompleted(!completed);
    };

    return (
        <li>
            <h2><u>{park.name}</u></h2>
            <h5>{park.location}</h5>
            <div className="park-container">
                <h4>{park.description}</h4>
                <h5>Explore: {park.activities}</h5>
                <img src={park.image} className="park-image" alt={park.name} />
                <br />
                <button onClick={toggleCompletion} className="park-button">
                    {completed ? <u>Completed!</u> : 'Mark as Completed'}
                </button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </li>
    );
}

export default Park;