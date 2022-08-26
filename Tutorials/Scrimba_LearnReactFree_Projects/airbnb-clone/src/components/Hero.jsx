import React from "react";
//import image from "../assets/photo-grid.png"

export default function Hero(){
    return(
        <section className="hero">
            <img className="hero--img" src="../assets/photo-grid.png" alt="collection of photographs with different experiences"/>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--desc">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}