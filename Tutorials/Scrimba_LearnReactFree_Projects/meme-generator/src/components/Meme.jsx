import React, {useState} from "react"
import memesData from "../memesData.js"



export default function Meme(){
    const[memeImage, setMemeImg] = useState("")

    function getMemeImg(){
        const index = Math.floor(Math.random() * 100)
        const memeUrl = memesData.data.memes[index].url
        setMemeImg(memeUrl)
    }

    return(
        <div className="meme">
            <div className="meme-form">
                <input className="meme-form--input" id="meme-form--row-1" type="text" placeholder="Top Text"></input>
                <input className="meme-form--input" id="meme-form--row-2" type="text" placeholder="Bottom Text"></input>
                <button className="meme-form--button" id="meme-form--submit" onClick={getMemeImg}>Get a new meme image</button>
            </div>
            <img className="meme-img" src={memeImage} />
        </div>
        
    )
}