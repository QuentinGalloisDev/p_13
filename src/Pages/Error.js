import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
    return (
        <div className='page_not_found'>Error Page not Found
            <Link className='back_home' to='/'>
                Home
            </Link>
        </div>

    )
}
