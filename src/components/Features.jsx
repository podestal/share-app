import React from 'react'
import Feature from './Feature'

const Features = ({ serviceTitle, features }) => {

  return (
    <div>
        <h2>{serviceTitle}</h2>
        {features.map(feature => (
                <Feature 
                    key={feature.id}
                    feature={feature}
                />
            ))    
        }
    </div>
  )
}

export default Features