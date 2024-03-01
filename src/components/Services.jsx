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
                .filter(service => {
                    if (service.screens.length > 0) {
                        const availableScreens = service.screens.filter(screen => screen.available == true)
                        if (availableScreens.length > 0) {
                            return service
                        }
                    }
                })
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