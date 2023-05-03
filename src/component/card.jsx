import React from "react";

function Card(props) {
    let badge
    if (props.openSpot === 0) {
        badge="SOLD OUT"
    }else if (props.online === "online") {
        badge =".ONLINE"
    } else {
        badge= "IN STOCk"
    }
    return(
        <div className="ll">
            {badge && <div className="sold">{badge}</div>}
        <img src={props.img} alt="hrrll" className="img8"/>
        <div>{props.online}</div>
        <div className="star">⭐5.0<span className="USA">(6).USA</span></div>
        <p className="Life">{props.life}</p>
        <span className="from"> <div className="bold">from $136</div>/person</span>
        </div>
    )
}

export default Card