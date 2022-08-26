import React from "react";

export default function Card(props){
    let badgeText
    if(props.element.openSpots === 0){
        badgeText="SOLD OUT"
    } else if(props.element.location === "Online"){
        badgeText="ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--img" src={`../assets/${props.element.coverImg}`} alt="image"/>
            <div className="card--reviews">
                <img className="card--reviews-star" src={"../assets/star-icon.png"} alt="star icon"/>
                <span className="">{props.element.stats.rating}</span>
                <span className="gray"> ({props.element.stats.reviewCount}) • </span>
                <span className="gray"> {props.element.location}</span>
            </div>
            <p className="card--details">{props.element.title}</p>
            <p className="card--price"><span className="bold">From ${props.element.price}</span> / person</p>
        </div>
    )
}