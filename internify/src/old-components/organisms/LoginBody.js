import React from 'react';
import LBodyUpr from '../molecules/LBodyUpr';
import LBodyLwr from '../molecules/LBodyLwr';

const LoginBody = () => {
    return (
        <div className='login_body'>
            <div className='login_body_upper'>
                <LBodyUpr />
            </div>
            <div className='login_body_upper'>
                <LBodyLwr />
            </div>
        </div>
    )
}

export default LoginBody
