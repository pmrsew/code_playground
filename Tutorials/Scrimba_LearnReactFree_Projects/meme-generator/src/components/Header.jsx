import React from "react"
import logo from "../assets/troll-face.png"

export default function Header(){
    return(
        <nav className="header">
            <section className="header--logo">
                <img className="header--logo-img" src={logo} alt="troll face meme" />
                <h1 className="header--logo-txt">Meme Generator</h1>
            </section>
            <h2 className="header--subtitle">React Course - Project 2</h2>
        </nav>
    )
}