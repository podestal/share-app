import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Purchase from '../components/Purchase'
import { useQuery } from '@tanstack/react-query'
import { getScreen } from '../api/api'

const Service = () => {

    const params = useParams()

    const {data: screen, isLoading, isError, error} = useQuery({
      queryKey: ['screen'],
      queryFn: () => getScreen({ id: params.id })
  })

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