import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getOrders } from '../api/api'
import useUser from '../hooks/useUser'

const OrdersPage = () => {

    const {user} = useUser()
    const {data: orders, isLoading, isError, error} = useQuery({
        queryKey: ['orders'],
        queryFn: () => getOrders({ access: user.accessToken })
    })

    if (isLoading) return <p>Loading ...</p>

    if (isError) return <p>{error.message}</p>

  return (
    <div className='main-body'>
        {console.log('from get orders', orders)}
    </div>
  )
}

export default OrdersPage