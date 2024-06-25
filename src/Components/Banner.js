import React from 'react'
import Logo from '../images/argentBankLogo.png'
import SignInIcon from '../images/accountCircle.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearToken } from '../test_redux_toolkit/dataUserSlice';

export const Banner = () => {
    const token = useSelector((state) => state.dataUser.token)
    const dispatch = useDispatch()
    const handleClearToken = () => {
        dispatch(clearToken())
    }
    const userFirstName = useSelector((state) => state.dataUser.firstName)
    const userLastName = useSelector((state) => state.dataUser.lastName)
    return (
        <div>
            <nav className='main-nav'>
                <Link to='/'>
                    <img src={Logo} alt='Argent Bank Logo' className='main-nav-logo-image'></img>
                </Link>
                {/* Si le token est initialisé , on affiche sign out,qui enlève le token du store redux et redirige vers la page d'accueil.
                 sinon on affiche sign in, qui redirige vers la page signIn */}
                {token ? (
                    <Link onClick={handleClearToken} to='/' className='main-nav-item'>
                        <span className='user_name'>{`${userFirstName} ${userLastName}`}</span><img src={SignInIcon} alt='signInButton'></img><span>Sign out</span>
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
