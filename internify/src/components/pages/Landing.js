import React from 'react'
import Navbar from "../organisms/Navbar"
import HeaderHomeGuest from "../organisms/HeaderHomeGuest"
import ContainerHomeGuest from "../organisms/ContainerHomeGuest"
import FooterHomeGuest from "../organisms/FooterHomeGuest"
import "./styles/Landing.css"

const Landing = () => {
    return (
      <div className="landing_page">
        <Navbar />
        <HeaderHomeGuest />
        <ContainerHomeGuest />
        <FooterHomeGuest />
    </div>
    )
}

export default Landing
