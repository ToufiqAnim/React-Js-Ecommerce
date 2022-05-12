import React, { useState } from 'react';
import './SignIn.scss';
const SignIn = () => {
    const [login, setLogIn] = useState();
    const handleSubmit = e=>{
        e.preventDefault()
    }
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <from onSubmit={handleSubmit}>
                <input type='email' placeholder='Your Email' />
                <label >Email</label>
                <input type='password' placeholder='Your Password' />
                <label >Password</label>
            </from>
        </div>
    );
};

export default SignIn;

