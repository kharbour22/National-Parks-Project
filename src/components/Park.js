import React, { useState } from 'react';
import './App.css';

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
                <h5><u>Explore</u>: {park.activities}</h5>
                <img className="park-image" src={park.image}  alt={park.name} />
                <br />
                <button 
                    onClick={toggleCompletion} 
                    className={`park-button ${completed ? 'completed' : ''}`}
                >
                    {completed ? 'Completed!' : 'Mark as Completed'}
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