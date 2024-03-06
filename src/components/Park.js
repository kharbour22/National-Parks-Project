import React, { useState, useEffect } from 'react';
import './App.css';

function Park({ park }) {
    const [visited, setVisited] = useState(() => {
        return localStorage.getItem(park.id) === 'true' || false;
    });

    useEffect(() => {
        localStorage.setItem(park.id, visited);
    }, [park.id, visited]);

    const toggleVisited = () => {
        setVisited(!visited);
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
                    onClick={toggleVisited} 
                    className={`park-button ${visited ? 'completed' : ''}`}
                >
                    {visited ? 'Visited!' : 'Mark as Visited'}
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