import React from "react";
import "./Window.css";
import camera from '../images/camera3.png';

const Socials = () => {
    return(
    <div>
        <h3>Heres some links to things</h3>
        <img src={camera} className="insta-image" alt="camera for insta" />
        <p>Instagram</p>
    </div>
    );

};

export default Socials;