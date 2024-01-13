import React from 'react'
import useFeatures from '../hooks/useFeatures'
import Feature from './Feature'

const Features = ({ serviceId, serviceTitle }) => {

    const {data: features, isLoading, isError, error} = useFeatures()

    if (isLoading) return <p>Loading ...</p>

    if (error) return <p>{error.message}</p>

  return (
    <div>
        <h2>{serviceTitle}</h2>
        {features.data
            .filter(feature => feature.service == serviceId || feature.service == 5)
            .map(feature => (
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