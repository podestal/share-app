import React, { useEffect } from 'react'
import moment from 'moment'

const SubscriptionItem = ({ subscription }) => {

    const period = {
        'T': 30,
        'S': 60,
        'N': 90,
    }

    const dueDate = moment(subscription?.subscribed_at).add(period[subscription?.period], 'days').calendar()

  return (
    <div>
        <h2>{subscription.service.platform}</h2>
        <p>Period: {subscription.period}</p>
        <p>User: {subscription.username}</p>
        <p>Password: {subscription.password}</p>
        <p>Due Date: {dueDate}</p>
    </div>
  )
}

export default SubscriptionItem