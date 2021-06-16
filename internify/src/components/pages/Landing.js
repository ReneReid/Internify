import React from 'react'
import Navbar from "../organisms/Navbar"
import Hero from "../organisms/Hero"
import ContainerHomeGuest from "../organisms/ContainerHomeGuest"
import Footer from "../organisms/Footer"
import "./styles/Landing.css"

const Landing = () => {
    return (
      <div className="landing_page">
        <Navbar />
        <Hero />
        <ContainerHomeGuest />
        <Footer />
    </div>
    )
}

export default Landing
