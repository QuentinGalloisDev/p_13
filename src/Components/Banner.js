import React from 'react'
import Logo from '../images/argentBankLogo.png'
import SignInIcon from '../images/accountCircle.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearToken } from '../test_redux_toolkit/counterSlice';

export const Banner = () => {
    const token = useSelector((state) => state.counter.token)
    const dispatch = useDispatch()
    const handleClearToken = () => {
        dispatch(clearToken())
    }
    const userFirstName = useSelector((state) => state.counter.firstName)
    const userLastName = useSelector((state) => state.counter.lastName)
    return (
        <div>
            <nav className='main-nav'>
                <Link to='/'>
                    <img src={Logo} alt='Argent Bank Logo' className='main-nav-logo-image'></img>
                </Link>
                {/* Si le token est initialisé , on affiche sign out,qui enlèvle le token du store redux et redirige vers la page d'accueil.
                 sinon on affiche sign in, qui redirige vers la page signIn */}
                {token ? (

                    <Link onClick={handleClearToken} to='/signIn' className='main-nav-item'>
                        <span>{`${userFirstName} ${userLastName}`}</span><img src={SignInIcon} alt='signInButton'></img><span>Sign out</span>
                    </Link>
                ) : (
                    <Link to='/signIn' className='main-nav-item'>
                        <img src={SignInIcon} alt='signInButton'></img><span>Sign In</span>
                    </Link>
                )
                }

            </nav>
        </div>
    )
}
