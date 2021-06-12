import React from 'react'
import Button from '../atoms/Button.js'
import "./styles/HeaderHomeGuest.css"

const header_home = () => {

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
                <Button
                    className='learn_more' 
                    text='Learn More'
                    onClick={learnMore}
                />
            </div>

            {/* <div class="vl"></div> */}

            <div className="right_home_guest">
                <Button
                    className='continue_with_Google' 
                    text='Continue with Google'
                    onClick={continueWGoogle}
                />
                <div className="linebreak">
                    <p>────────── or ──────────</p>
                </div>
                <form>
                    <input className="fEmail" type="text" id="fEmail" name="fEmail" placeholder="Create an account with Email"></input><br></br>
                    <input className="fPassword" type="text" id="fPassword" name="fPassword" placeholder="Password"></input><br></br>
                </form>
                <Button
                    className='continue_with_email' 
                    text='Continue with Email'
                    onClick={continueWEmail}
                />
            </div>
 
        </div>
    )
}

export default header_home
