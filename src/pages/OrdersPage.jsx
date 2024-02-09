import {useState} from 'react'
import { useQuery } from '@tanstack/react-query'
import { getOrders } from '../api/api'
import Orders from '../components/Orders'
import Spinner from '../components/Spinner'

const OrdersPage = () => {

    const [access, setAccess] = useState(JSON.parse(localStorage.getItem('access')) || "")
    const {data: orders, isLoading, isError, error} = useQuery({
        queryKey: ['orders'],
        queryFn: () => getOrders({ access })
    })

    if (isLoading) return <Spinner />

    if (isError) return <p>{error.message}</p>

  return (
    <div className='main-body'>
        <Orders 
          orders={orders.data}
        />
    </div>
  )
}

export default OrdersPage