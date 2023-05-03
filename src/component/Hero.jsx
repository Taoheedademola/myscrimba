import React from "react";
import img from "../images/images.jpeg"

function Hero() {
 return(
    <div className="Hero">
    <img src={img} className="img5" alt="Hello"/>
        <h1 className="Hero-head">Online Experinces</h1>
        <span className="Hero-text">Join unique interactive activites 
        led by one-of-a-kind host-all without leaving home</span>
    </div>
 )   
}


export default Hero