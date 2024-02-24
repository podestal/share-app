import { getServices } from '../api/api'
import Service from './Service'
import useServicesContext from '../hooks/useServicesContext'
import { useQuery } from '@tanstack/react-query'
import Spinner from './Spinner'

const Services = () => {

    const {services, setServices} = useServicesContext()

    const {data, isLoading, isError, error, isSuccess} = useQuery({
        queryKey: ['services'],
        queryFn: getServices
    })

    if (isLoading) return <Spinner />

    if (isError) return (<div className="empty-body">
                                <p>{error.message}</p>
                            </div>)

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