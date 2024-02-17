import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Purchase from '../components/Purchase'
import useScreen from '../hooks/useScreen'

const Service = () => {

    const params = useParams()

    const {data: screen, isLoading, isError, error} = useScreen(params.id)

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>

  return (
    <div className='main-body'>
        <Purchase 
            screen={screen.data[0]}
        />        
    </div>
  )
}

export default Service