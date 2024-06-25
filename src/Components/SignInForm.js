import React, { useState } from 'react';
import SignInIcon from '../images/accountCircle.png'
import { SignInInput } from './SignInInput'
import { useNavigate } from 'react-router-dom'
import { postDataForSignIn } from '../Service/LogIn'
import { useSelector, useDispatch } from 'react-redux'
import { setToken, clearToken } from '../test_redux_toolkit/dataUserSlice';

export const SignInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const token = useSelector((state) => state.dataUser.token)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSetToken = (token) => {
        dispatch(setToken(token))
    }

    const handleClearToken = () => {
        dispatch(clearToken())
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const result = await postDataForSignIn(username, password);

        if (result.token) {
            console.log('Token received:', result.token);
            // Stocker le token dans redux et rediriger vers la page user.
            handleSetToken(result.token)
            // Redirection vers la page signIn après la soumission
            navigate('/user');
            // Redirection ou mise à jour de l'état pour l'utilisateur connecté
        } else {
            setErrorMessage(result.error); // Met à jour l'état avec le message d'erreur
            handleClearToken()
        }
    };
    return (
        <div className='sign-in-content'>
            <img src={SignInIcon} alt='sign in icon' />
            <h1>Sign In</h1>
            {token && <span>C'est bon le token est dans redux</span>}
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
