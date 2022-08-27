import React from "react"

export default function Meme(){
    return(
        <form className="meme-form">
            <input className="meme-form--input" id="meme-form--row-1" type="text"></input>
            <input className="meme-form--input" id="meme-form--row-2" type="text"></input>
            <input className="meme-form--button" id="meme-form--submit" type="submit" value="Get a new meme image"></input>
        </form>
    )
}