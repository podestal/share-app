import React from 'react'
import Order from './Order'

const Orders = ({ orders }) => {
  return (
    <div className='orders-container'>
        {orders.map(order => (
            <Order 
                key={order.id}
                order={order}
            />
        ))}
    </div>
  )
}

export default Orders