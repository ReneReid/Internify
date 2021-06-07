import React from 'react'
import Button from '../atoms/Button'
import './styles/LBodyUpr.css'
import '../atoms/styles/Button.css'

const LBodyUpr = () => {

    const continueWGoogle = () => {
        console.log('continue with google')
    }

    const login = () =>  {
        console.log('login')
    }


    return (
        <div className='login_body_upper'>
            <div className='l_body_upr_left'></div>
            <div className='l_body_upr_cntr'>
                <div className='welcome_message'>
                    <p className='welcome_text'>Welcome back</p>
                </div>
                <div className='fields_buttons'>
                    <Button
                        className='continue_with_Google' 
                        text='Continue with Google'
                        onClick={continueWGoogle}
                    />
                    <div className="linebreak">
                        <p>────────── or ──────────</p>
                    </div>
                    <form>
                        <input className="fEmail" type="text" id="fEmail" name="fEmail" placeholder="Email"></input><br></br>
                        <input className="fPassword" type="text" id="fPassword" name="fPassword" placeholder="Password"></input><br></br>
                    </form>
                    <Button
                        className='login_button' 
                        text='Login'
                        onClick={login} />

                </div>
                <div className='create_forgot'>
                    <div className='create_account'>
                        <a href="placeholder1" className="create_account_link">Create an account</a>
                    </div>
                    <div className='forgot_password'>
                        <a href="placeholder2" className="forgot_password_link">Forgot your password?</a>
                    </div>
                </div>
            </div>
            <div className='l_body_upr_right'></div>      
        </div>
    )
}

export default LBodyUpr
