import React from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteOrder, updateOrder , confirmOrder, updateScreen} from '../api/api'
import useUser from '../hooks/useUser'
import { useNavigate } from 'react-router-dom'

const Order = ({ order }) => {

    const {user} = useUser()
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const {mutate: confirmOrderMutation} = useMutation({
        mutationFn: data => confirmOrder(data),
        onSuccess: res => console.log(res),
        onError: err => console.log(err),
    })

    const {mutate: updateOrderMutation} = useMutation({
        mutationFn: data => updateOrder(data),
        onSuccess: res => queryClient.invalidateQueries(['orders']),
    })

    const {mutate: deleteOrderMutation} = useMutation({
        mutationFn: data => deleteOrder(data),
        onSuccess: res => queryClient.invalidateQueries(['orders']),
        onError: err => console.log(err),
    })

    const {mutate: updateScreenMutation} = useMutation({
        mutationFn: data => updateScreen(data),
        // onSuccess: queryClient.invalidateQueries(['screen']),
    })

    const orderStatus = {
        'S': 'Started',
        'P': 'Processing',
        'C': 'Completed'
    }

    const handleCompleteOrder = () => {
        updateOrderMutation({ access: user.accessToken, orderId:order.id, updates: {status: 'C'} })
        confirmOrderMutation({email: order.customer.user.email})
        updateScreenMutation({ id: order.screen, updates: {
            customer: order.customer.id,
        }})
    }

    const handleDeleteOrder = () => {
        deleteOrderMutation({ access: user.accessToken, orderId:order.id })
    }

  return (
    <div className='order-container'>
        <h3>Order Status: {orderStatus[order?.status]}</h3>
        <h3>Customer:</h3>
        <p>Name: {order?.customer?.user?.first_name}</p>
        <p>Lastname: {order?.customer?.user?.last_name}</p>
        <h3>Service:</h3>
        <p>Platform: {order?.service.platform}</p>
        <p>Price: {order?.total}</p>
        <p>Period: {order?.period}</p>
        <h3>Receipt:</h3>
        <img src={order?.order_receipt[0]?.image} alt="receipt pic" />
        <div className='buttons-container'>
            <button onClick={handleCompleteOrder} className='btn btn-primary'>Complete</button>
            <button onClick={handleDeleteOrder} className='btn btn-danger'>Delete</button>
        </div>
    </div>
  )
}

export default Order