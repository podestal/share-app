import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteOrder, updateOrder } from '../api/api'
import useUser from '../hooks/useUser'

const Order = ({ order }) => {

    const {user} = useUser()
    const queryClient = useQueryClient()

    const {mutate: updateOrderMutation} = useMutation({
        mutationFn: data => updateOrder(data),
        onSuccess: res => queryClient.invalidateQueries(['orders']),
    })

    const {mutate: deleteOrderMutation} = useMutation({
        mutationFn: data => deleteOrder(data),
        onSuccess: res => queryClient.invalidateQueries(['orders']),
    })

    const orderStatus = {
        'S': 'Started',
        'P': 'Processing',
        'C': 'Completed'
    }

    const price = {
        'T': (order?.service.price * 3.7).toFixed(2),
        'S': ((order?.service.price * 3.7) * 0.95).toFixed(2),
        'N': ((order?.service.price * 3.7) * 0.90).toFixed(2)
    }

    const handleCompleteOrder = () => {
        updateOrderMutation({ access: user.accessToken, orderId:order.id, updates: {status: 'C'} })
    }

    const handleDeleteOrder = () => {
        deleteOrderMutation({ access: user.accessToken, orderId:order.id })
    }

  return (
    <div>
        <h3>Order Status: {orderStatus[order?.status]}</h3>
        <h3>Customer:</h3>
        <p>Name: {order?.user?.first_name}</p>
        <p>Lastname: {order?.user?.last_name}</p>
        <h3>Service:</h3>
        <p>Platform: {order?.service.platform}</p>
        <p>Price: {price[order?.period]}</p>
        <p>Period: {order?.period}</p>
        <h3>Receipt:</h3>
        <img src={`http://127.0.0.1:8000${order?.order_receipt[0]?.image}`} alt="receipt pic" />
        <button onClick={handleCompleteOrder} className='btn btn-primary'>Complete</button>
        <button onClick={handleDeleteOrder} className='btn btn-danger'>Delete</button>
    </div>
  )
}

export default Order