import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import listings from "./data.js"

export default function App() {
  const cardElements = listings.map(
    (element) =>
    <Card 
      key={element.id}
      element={element}
    />
  )

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardElements}
      </section>
    </div>
  )
}

