import React from 'react'

const NavBar_Main = () => {
    return (
        <div className="navbar_home_guest">

            <div className="navbar_home_guest_left">
                <ul className="home_guest_list">
                    <li className="navbar_main_item">
                        <a href="thing1" className="navbar_main_link1">About us</a></li>
                    <li className="navbar_main_item"> 
                        <a href="thing2" className="navbar_main_link2">Our mission</a></li>
                    <li className="navbar_main_item">
                        <a href="thing3" className="navbar_main_link3">Contact us</a></li>
                </ul>
            </div>

            <p className="internify-logo">Internify</p>

            <a href="/" className="sign_in">Sign In</a> 
            
        </div>
    )
}

export default NavBar_Main