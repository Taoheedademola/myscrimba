import React from "react";
import inne from "../images/demo.jpg"

function Info() {
    return(
        <div className="div">
        <img className="img" src={inne} alt="img"/>
        <h1 className="h1">Olasupo Taoheed</h1>
        <div className="my">
        <h5 className="h5">Frontend Developer</h5>
        <span className="span">@ Freelancing.com</span>
        <div className="btn">
        <button className="btn1">Email</button>
        <button className="btn2">Linkdin</button>
        </div>
        </div>
        </div>
    )
}
export default Info