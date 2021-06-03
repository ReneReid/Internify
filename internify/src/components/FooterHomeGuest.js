import React from 'react'


const FooterHomeGuest = () => {
    return (
        <div className="footer_home_guest">
            <div className="footer_home_guest_left">
                <ul className="home_guest_list_footer">
                    <li className="footer_item">
                        <a href="thing1" className="navbar_main_link1">About us</a></li>
                    <li className="footer_item"> 
                        <a href="thing2" className="navbar_main_link2">Our mission</a></li>
                    <li className="footer_item">
                        <a href="thing3" className="navbar_main_link3">Contact us</a></li>
                </ul>
            </div>
            <div className="footer_homeguest_right">
                <h4 className='appNameFooter'>Internify</h4>
            </div>

        </div>
    )
}

export default FooterHomeGuest
