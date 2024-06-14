import React, { useState } from 'react';
import SignInIcon from '../images/accountCircle.png'
import { SignInInput } from './SignInInput'
import { Link } from 'react-router-dom'
import { postDataForSignIn } from '../Service/LogIn'

export const SignInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await postDataForSignIn(username, password);
        // Redirection vers la page signIn après la soumission
        // window.location.href = '/signIn';
        if (result.token) {
            // Rediriger vers la page user ou effectuer toute autre action avec le token
            console.log('Token received:', result.token);
            // Redirection ou mise à jour de l'état pour l'utilisateur connecté
        } else {
            setErrorMessage(result.error); // Met à jour l'état avec le message d'erreur

        }
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
                {/* si errorMessage n'est pas null ou undefined on affiche la div du message d'erreur et son contenu */}
                {errorMessage && <div className='error_message'>{errorMessage}</div>}
                <button type="submit" className='sign-in-button'>Sign In</button>
            </form>
        </div>
    );
};
