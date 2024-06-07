import React from 'react'

export const Feature = ({ icon, title, text }) => {
    return (
        <div>
            <img src={icon} alt={`icone de ${icon}`} className='feature-icon'></img>
            <h3 className='feature-item-title'>{title}</h3>
            <p>{text}</p>
        </div>
    )
}
