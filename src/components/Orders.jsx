import React, {useState} from 'react'
import Order from './Order'
import Spinner from './Spinner'
import { useQuery } from '@tanstack/react-query'
import { getOrders } from '../api/api'


const Orders = () => {

  const [filter, setFilter] = useState('P')
  const [access, setAccess] = useState(JSON.parse(localStorage.getItem('access')) || "")
  const {data: orders, isLoading, isError, error} = useQuery({
      queryKey: ['orders'],
      queryFn: () => getOrders({ access })
  })

  if (isLoading) return <Spinner />

  if (isError) return <p>{error.message}</p>

  return (
    <>
      {console.log(orders.data)}
      <div className='filter-buttons buttons-container'>
        <button onClick={() => setFilter('S')} className='btn btn-primary'>Started</button>
        <button onClick={() => setFilter('P')} className='btn btn-primary'>Processing</button>
        <button onClick={() => setFilter('C')} className='btn btn-primary'>Completed</button>
      </div>
      <div className='orders-container'>
        {orders.data
        .filter(order => order.status == filter)
        .map(order => (
          <Order 
              key={order.id}
              order={order}
          />
        ))}
      </div>
    </>
  )
}

export default Orders