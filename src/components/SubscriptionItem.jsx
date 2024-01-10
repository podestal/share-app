import React from 'react'

const SubscriptionItem = ({ subscription }) => {
  return (
    <div>
        <h2>{subscription.service.platform}</h2>
        <p>Period: {subscription.period}</p>
        <p>User: {subscription.username}</p>
        <p>Password: {subscription.password}</p>
    </div>
  )
}

export default SubscriptionItem