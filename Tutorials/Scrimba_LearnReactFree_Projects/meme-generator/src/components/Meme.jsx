import React from "react"

export default function Meme(){
    return(
        <form className="meme-form">
            <input className="meme-form--input" id="meme-form--row-1" type="text" placeholder="Top Text"></input>
            <input className="meme-form--input" id="meme-form--row-2" type="text" placeholder="Bottom Text"></input>
            <button className="meme-form--button" id="meme-form--submit">Get a new meme image</button>
        </form>
    )
}