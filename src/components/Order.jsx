import React from 'react'

const Order = ({ order }) => {

    const receipt_url = `http://127.0.0.1:8000${order?.order_receipt?.image}`
    const url = order?.order_receipt?.image

    const orderStatus = {
        'S': 'Started',
        'P': 'In Process',
        'C': 'Completed'
    }

    const price = {
        'T': (order?.service.price * 3.7).toFixed(2),
        'S': ((order?.service.price * 3.7) * 0.95).toFixed(2),
        'N': ((order?.service.price * 3.7) * 0.90).toFixed(2)
    }

  return (
    <div>
        <h3>Order Status: {orderStatus[order?.status]}</h3>
        <h3>Customer:</h3>
        <p>Name: {order?.customer.user?.first_name}</p>
        <p>Lastname: {order?.customer.user?.last_name}</p>
        <h3>Service:</h3>
        <p>Platform: {order?.service.platform}</p>
        <p>Price: {price[order?.period]}</p>
        <p>Period: {order?.period}</p>
        <h3>Receipt:</h3>
        <img src={`http://127.0.0.1:8000${order?.order_receipt[0]?.image}`} alt="receipt pic" />
        <button className='btn btn-primary'>Complete</button>
        <button className='btn btn-danger'>Delete</button>
    </div>
  )
}

export default Order