import { useEffect } from 'react'
import useServices from '../hooks/useServices'
import Service from './Service'
import useUser from '../hooks/useUser'
import useServicesContext from '../hooks/useServicesContext'
import Spinner from './Spinner'

const Services = () => {

    const {user} = useUser()
    const {services, setServices} = useServicesContext()

    useEffect(() => {
        console.log('user', user);
    }, [])

    const {data, isLoading, isError, error, isSuccess} = useServices()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <Spinner />

    if (isSuccess) {setServices(data.data)}
    
    return (
        <div className='services-container'>
            {services && services
                .filter(service => service.screens > 0)
                .map(service => (
                    <Service 
                        key={service.id}
                        service={service}
                    />
                ))
            }
        </div>
    )
}

export default Services