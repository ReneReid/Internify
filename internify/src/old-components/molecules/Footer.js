import React from 'react';
import './styles/LBodyLwr.css';


const Footer = () => {

    return (
        <div className='lbody_lwr'>
            <div className='lbody_lwr_left'>
                <ul className='lbody_lwr_list'>
                    <li className='footer_item'>
                        <a href='placeholder1' className="navbar_login_link1">About us</a>
                    </li>
                    <li className='footer_item'>
                        <a href='placeholder2' className="navbar_login_link2">Our mission</a>
                    </li>
                    <li className='footer_item'>
                        <a href='placeholder3' className="navbar_login_link3">Contact us</a>
                    </li>
                </ul>
            </div>
            <div className='lbody_lwr_name'>
                <h4 className='appNameFooter'>Internify</h4>
            </div>
            
        </div>
    )
}

export default Footer
