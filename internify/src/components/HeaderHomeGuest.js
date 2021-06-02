import React from 'react'
import Button from './Button'

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
                <h1 className="app_slogon">Find better candidates with better job postings</h1>
                <div className = 'buttons'>
                    <Button
                    className='learn_more' 
                    color='white'
                    text='Learn More'
                    onClick={learnMore}
                    />
                </div>
            </div>
            <div className="right_home_guest">
                <Button
                    className='continue_with_Google' 
                    color='white'
                    text='Continue with Google'
                    onClick={continueWGoogle}

                />
                <form>
                    <label htmlFor="fEmail">Create an account with Email</label><br></br>
                    <input className="fEmail" type="text" id="fEmail" name="fEmail"></input><br></br>
                    <label htmlFor="fPassword">Password</label><br></br>
                    <input className="fPassword" type="text" id="fPassword" name="fPassword"></input><br></br>
                </form>
                <Button
                    className='continue_with_email' 
                    color='white'
                    text='Continue with Email'
                    onClick={continueWEmail}
                />
            </div>
 
        </div>
    )
}

export default header_home
