import React from 'react'
import Feature from './Feature'
import { getFeatures } from '../api/api'
import { useQuery } from '@tanstack/react-query'
import Spinner from './Spinner'

const Features = ({ serviceTitle, serviceId }) => {

  const {data: features, isLoading, isError, error} = useQuery({
    queryKey: ['features'],
    queryFn: (data) => getFeatures({ serviceId })
  })

  if (isError) return (<div className="empty-body">
                        <p>{error.message}</p>
                      </div>)

  return (
    <div>
        <h2>{serviceTitle}</h2>
        {features && features.data.map(feature => (
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