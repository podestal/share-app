import React, { useEffect, useState } from 'react'
import useUser from '../hooks/useUser'
import useServices from '../hooks/useServices'
import Service from '../components/Service'
import Purchase from '../components/Purchase'

const Home = () => {

    const {user} = useUser()
    const {data: services, isLoading, isError, error} = useServices()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>

  return (
    <>
        {/* {services.data.map(service => (
          <Service 
            key={service.id} 
            service={service}
        />))} */}
        <Purchase />
    </>
  )
}

export default Home