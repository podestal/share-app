import { useEffect } from 'react'
import useServices from '../hooks/useServices'
import Service from './Service'
import useUser from '../hooks/useUser'

const Services = () => {

    const {user} = useUser()
    useEffect(() => {
        console.log('user', user);
    }, [])

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