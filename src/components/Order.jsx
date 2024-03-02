import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteOrder, updateOrder , confirmOrder, updateScreen} from '../api/api'
import useUser from '../hooks/useUser'
import { useNavigate } from 'react-router-dom'

const Order = ({ order }) => {

    const {user} = useUser()
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")

    const {mutate: confirmOrderMutation} = useMutation({
        mutationFn: data => confirmOrder(data),
        onSuccess: res => setSuccessMsg('email sent'),
        onError: err => setErrorMsg(err.message),
    })

    const {mutate: updateOrderMutation} = useMutation({
        mutationFn: data => updateOrder(data),
        onSuccess: res => {
            queryClient.invalidateQueries(['orders'])},
        onError: err => setErrorMsg(err.message)
    })

    const {mutate: deleteOrderMutation} = useMutation({
        mutationFn: data => deleteOrder(data),
        onSuccess: res => queryClient.invalidateQueries(['orders']),
        onError: err => console.log(err),
    })

    const {mutate: updateScreenMutation} = useMutation({
        mutationFn: data => updateScreen(data),
        onSuccess: res => setSuccessMsg('Screen assgined'),
        onError: err => setErrorMsg(err.message)
    })

    const orderStatus = {
        'S': 'Started',
        'P': 'Processing',
        'C': 'Completed'
    }

    const handleCompleteOrder = () => {
        setErrorMsg("")
        updateOrderMutation({ access: user.accessToken, orderId:order.id, updates: {status: 'C'} })

    }

    const handleConfirmOrder = () => {
        setErrorMsg("")
        setSuccessMsg("")
        confirmOrderMutation({
            email: order.customer.user.email,
            username: order.screen.username,
            password: order.screen.password,
            profile: order.screen.position,
        })
    }

    const handleAssignScreen = () => {
        setErrorMsg("")
        setSuccessMsg("")
        updateScreenMutation({ id: order.screen.id, access: user.accessToken, updates: {
            customer: order.customer.id,
        }})
    }

    const handleDeleteOrder = () => {
        setErrorMsg("")
        setSuccessMsg("")
        updateScreenMutation({ id: order.screen, access: user.accessToken, updates: {
            available: true,
        }})
        deleteOrderMutation({ access: user.accessToken, orderId:order.id })
    }

  return (
    <div className='order-container'>
        {console.log('user', user)}
        <p>{errorMsg}</p>
        <h3>Order Status: {orderStatus[order?.status]}</h3>
        <h3>Customer:</h3>
        <p>Name: {order?.customer_first_name}</p>
        <p>Lastname: {order?.customer_last_name}</p>
        <h3>Service:</h3>
        <p>Platform: {order?.service_platform}</p>
        <p>Price: {order?.total}</p>
        <p>Period: {order?.period}</p>
        <h3>Receipt:</h3>
        <img src={order?.order_receipt[0]?.image} alt="receipt pic" />
        <div className='buttons-container'>
            <p>{errorMsg}</p>
            <p>{successMsg}</p>
            <button onClick={handleConfirmOrder} className='btn btn-primary'>Confirm</button>
            <button onClick={handleAssignScreen} className='btn btn-primary'>Assign Screen</button>
            <button onClick={handleCompleteOrder} className='btn btn-primary'>Complete</button>
            <button onClick={handleDeleteOrder} className='btn btn-danger'>Delete</button>
        </div>
    </div>
  )
}

export default Order