import {useState} from 'react'
import { useQuery } from '@tanstack/react-query'
import { getOrders } from '../api/api'
import Orders from '../components/Orders'
import Spinner from '../components/Spinner'

const OrdersPage = () => {

  return (
    <div className='main-body'>
        <Orders />
    </div>
  )
}

export default OrdersPage