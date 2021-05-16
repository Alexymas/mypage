import React from 'react'
import './Cover.css';
import code from '../../media/code.mp4'

const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={code} autoPlay loop muted  />
            <h1>Alejandro Sibaja</h1>
            <p>「 Web Developer 」</p>
        </div>
    );
};

export default Cover;
