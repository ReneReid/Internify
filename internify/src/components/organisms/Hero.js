import React from 'react'
import { ButtonWhite } from '../atoms/index.js'
import "./styles/Hero.css"

const Hero = () => {

    const learnMore = () => {
        console.log('learn more')
    }

    const continueWGoogle = () => {
        console.log('continue with google')
    }

    const continueWEmail = () =>  {
        console.log('continue with email')
    }

    return (
        <div className="header_home_guest">
            <div className="left_home_guest">
                <div className="app_slogan">
                    <p className="slogan1">Find better candidates</p>
                    <p className="slogan2">with better job postings 🥇</p>
                </div>
                <ButtonWhite
                    className='learn_more' 
                    label='Learn More'
                    onClick={learnMore}
                />
            </div>

            {/* <div class="vl"></div> */}

            <div className="right_home_guest">
                <ButtonWhite
                    className='continue_with_Google' 
                    label='Continue with Google'
                    onClick={continueWGoogle}
                />
                <div className="linebreak">
                    <p>────────── or ──────────</p>
                </div>
                <form>
                    <input className="fEmail" type="text" id="fEmail" name="fEmail" placeholder="Create an account with Email"></input><br></br>
                    <input className="fPassword" type="text" id="fPassword" name="fPassword" placeholder="Password"></input><br></br>
                </form>
                <ButtonWhite
                    className='continue_with_email' 
                    label='Continue with Email'
                    onClick={continueWEmail}
                />
            </div>
 
        </div>
    )
}

export default Hero
