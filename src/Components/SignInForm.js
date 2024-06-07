import React, { useState } from 'react';
import SignInIcon from '../images/accountCircle.png'
import { SignInInput } from './SignInInput'
import { Link } from 'react-router-dom'
import { postDataForSignIn } from '../Service/LogIn'

export const SignInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        postDataForSignIn(username, password);
        // Redirection vers la page signIn après la soumission
        // window.location.href = '/signIn';
    };
    return (
        <div className='sign-in-content'>
            <img src={SignInIcon} alt='sign in icon' />
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <SignInInput
                    inputClassName="input-wrapper"
                    inputLabel="Username"
                    inputType="text"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <SignInInput
                    inputClassName="input-wrapper"
                    inputLabel="Password"
                    inputType="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <SignInInput
                    inputClassName="input-remember"
                    inputLabel="Remember me"
                    inputType="checkbox"
                />
                <button type="submit" className='sign-in-button'>Sign In</button>
            </form>
        </div>
    );
};
