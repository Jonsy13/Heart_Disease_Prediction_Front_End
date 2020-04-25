import React from 'react';
import './HomePage.css'
import vid from './2.mp4'

const HomePage = () => {
    return (
        <div>
            <video className="vidi" autoPlay muted loop id="myVideo" preload="auto">
                <source src={vid} type="video/mp4" />
            </video>
        </div>

    );
}

export default HomePage;