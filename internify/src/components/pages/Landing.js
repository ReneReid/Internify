import React from 'react'
import NavBarMain from "../organisms/NavbarMain"
import HeaderHomeGuest from "../organisms/HeaderHomeGuest"
import ContainerHomeGuest from "../organisms/ContainerHomeGuest"
import FooterHomeGuest from "../organisms/FooterHomeGuest"

const Landing = () => {
    return (
      <div className="landing_page">
        <NavBarMain />
        <HeaderHomeGuest />
        <ContainerHomeGuest />
        <FooterHomeGuest />
    </div>
    )
}

export default Landing
