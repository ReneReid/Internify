import React from 'react'

const NavBar_Main = () => {
    return (
        <div className="navbar_home_guest">

            <div className="navbar_home_guest_left">
                <ul className="home_guest_list">
                    <li> About us </li>
                    <li> Our mission </li>
                    <li> Contact us </li>
                </ul>
            </div>

            <p className="internify-logo">Internify</p>

            <a href="/" className="sign_in">Sign In</a> 
            
        </div>
    )
}

export default NavBar_Main