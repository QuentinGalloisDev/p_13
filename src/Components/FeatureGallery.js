import React from 'react'
import featuresData from '../Data/features.json'
import { Feature } from './FeatureItem'

export const FeatureGallery = () => {
    return (
        <div className='features'>
            <h2 className="sr-only">Features</h2>
            {featuresData.map(({ id, icon, title, text }) => (
                <div key={id} className='feature-item'>
                    <Feature icon={icon}
                        title={title}
                        text={text} />
                </div>
            ))

            }
        </div>
    )
}
