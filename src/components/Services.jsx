import React from 'react'
import useServices from '../hooks/useServices'
import Service from './Service'

const Services = () => {

    const {data: services, isLoading, isError, error} = useServices()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>

  return (
    <div>
        <p>Services</p>
        {services.data.map(service => (
            <Service 
                key={service.id}
                service={service}
            />
        ))}
    </div>
  )
}

export default Services