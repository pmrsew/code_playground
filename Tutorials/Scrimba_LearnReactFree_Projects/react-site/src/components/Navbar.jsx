import React from "react"
import logo from "../assets/reactjs-icon.png"

export default function Navbar(){
    return(
        <nav className="navbar">
            <img className="nav--logo-img" src={logo} alt="logo for react.js"/>
            <h1 className="nav--logo-text">ReactFacts</h1>
            <p className="nav--page-title">React Course - Project 1</p>
        </nav>
    )
}