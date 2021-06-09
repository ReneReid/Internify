import React from 'react';
import LoginForm from '../molecules/LoginForm';
import Footer from '../molecules/Footer';
import './styles/LoginBody.css'


const LoginBody = () => {
    return (
        <div className='login_body'>
            {/* rename this to "Login Form" */}
            <LoginForm />
            
            {/* rename LBodyLwr to "Footer" */}
            <div className='login_body_lower'>
                <Footer />
            </div>
        </div>
    )
}

export default LoginBody
