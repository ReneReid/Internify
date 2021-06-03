import React from 'react'
import Button from '../atoms/Button.js'
import "./styles/ContainerHomeGuest.css"

const Container_Home_Guest = () => {

    const getStarted = () => {
        console.log('getStarted')
    }

    return (
        <div className="container_home_guest">

            <div className="container_one">
                <div className="container_one_left">
                    <p>
                        Make job postings with gradual feedback that help guide you to make better job postings
                    </p>
                </div>

                <div className="container_one_right">
                    <img src="../react_assets/Home(guest)/create-mobile.png" alt="Unable to display" />
                </div>
            </div>

            <div className="container_home_text">
                    <p>Progressional feedback that helps you add the right details.</p>
            </div>

            <div className="container_two">
                <img src="../react_assets/Home(guest)/triplets-display.png" alt="Unable to display" />
            </div>

            <div className="container_three">
                <div className="container_three_left">
                    <p>Draw inspiration! Take a look at how other recruiters are making their job posts.</p>
                </div>

                <div className="container_three_right">
                    <img src="../react_assets/Home(guest)/other-posts.png" alt="Unable to display" />
                </div>
            </div>

            <div className="container_four">
                <div className="container_four_left">
                    <p>Mobile-ready, so you can create your job posting on the go, comfortably</p>
                </div>

                <div className="container_four_right">
                    <Button
                        className='get_started' 
                        color='white'
                        text='Get Started'
                        onClick={getStarted}
                    />
                </div>
            </div>
        </div>
    )
}

export default Container_Home_Guest
