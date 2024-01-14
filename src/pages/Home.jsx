import React, { useEffect, useState } from 'react'
import useUser from '../hooks/useUser'
import useServices from '../hooks/useServices'
import Services from '../components/Services'

const Home = () => {

    const {user} = useUser()
    const {data: services, isLoading, isError, error} = useServices()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>

  return (
    <>  
        <div className='hero'>
          <form className='search-form'>
            <input type="text" />
            <button className='btn btn-primary'>Buscar</button>
          </form>
        </div>
        <Services />
    </>
  )
}

export default Home