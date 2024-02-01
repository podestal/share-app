import React, { useEffect, useState } from 'react'
import useUser from '../hooks/useUser'
import useServices from '../hooks/useServices'
import Services from '../components/Services'
import MoviesFinder from '../components/MoviesFinder'

const Home = () => {

    const {user} = useUser()
    const {data: services, isLoading, isError, error} = useServices()

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>

  return (
    <>  
        <div className='hero'>
          <div className='main-body'>
            <h1>Paga menos y disfruta de la mejor calidad en streaming</h1>
            <MoviesFinder />  
          </div>
        </div>
        <Services />
    </>
  )
}

export default Home