import React from 'react'
import Logo from '../images/argentBankLogo.png'
import SignInIcon from '../images/accountCircle.png'
import { Link } from 'react-router-dom'

export const Banner = () => {
    return (
        <div>
            <nav className='main-nav'>
                <Link to='/'>
                    <img src={Logo} alt='Argent Bank Logo' className='main-nav-logo-image'></img>
                </Link>
                <Link to='/signIn' className='main-nav-item'>
                    <img src={SignInIcon} alt='signInButton'></img><span>Sign In</span>
                </Link>
            </nav>
        </div>
    )
}
