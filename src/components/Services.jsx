
import useServices from '../hooks/useServices'
import Service from './Service'
import useServicesContext from '../hooks/useServicesContext'
import Spinner from './Spinner'

const Services = () => {

    const {services, setServices} = useServicesContext()

    const {data, isLoading, isError, error, isSuccess} = useServices()

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