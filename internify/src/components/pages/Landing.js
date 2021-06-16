import React from 'react'
import Navbar from "../organisms/Navbar"
import Hero from "../organisms/Hero"
import ContainerHomeGuest from "../organisms/ContainerHomeGuest"
import FooterHomeGuest from "../organisms/FooterHomeGuest"
import "./styles/Landing.css"

const Landing = () => {
    return (
      <div className="landing_page">
        <Navbar />
        <Hero />
        <ContainerHomeGuest />
        <FooterHomeGuest />
    </div>
    )
}

export default Landing
