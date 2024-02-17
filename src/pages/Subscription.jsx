import { useEffect, useState } from "react"
import useUser from "../hooks/useUser"
import SubscriptionItem from "../components/SubscriptionItem"
import { useMutation, useQuery } from "@tanstack/react-query"
import { customerScreen } from "../api/api"
import Spinner from "../components/Spinner"


const Subscription = () => {

  const {user} = useUser()

  const {data: subscriptions, isLoading, isError, error} = useQuery({
    queryKey: ['subscriptions'],
    queryFn: () => customerScreen({ id: user?.customerId, access: user?.accessToken})
  })

  if (isLoading) return <Spinner />

  if (isError) return (
    <div className="empty-body">
      <p>{error.message}</p>
    </div>
  )

  return (

    <div className="main-body">
      {subscriptions.data.length > 0 
      ?
      <div className="subscriptions-container">
        {subscriptions.data.map(subscription => (
          <SubscriptionItem 
            key={subscription.id}
            subscription={subscription}
          />
        ))}
      </div>
      :
      <div className="empty-body">
        <h3>Aún no cuentas con ninguna subscripción</h3>
      </div>
      }
    </div>
  )
}

export default Subscription