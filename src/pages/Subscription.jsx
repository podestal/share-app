import { useEffect, useState } from "react"
import useUser from "../hooks/useUser"
import SubscriptionItem from "../components/SubscriptionItem"
import { useMutation } from "@tanstack/react-query"
import { customerScreen } from "../api/api"


const Subscription = () => {

  const {user} = useUser()
  const [subscriptions, useSubscriptions] = useState([])

  const {mutate} = useMutation({
    mutationFn: data => customerScreen(data),
    onSuccess: res => useSubscriptions(res.data),
    onError: err => console.log(err),
  })



  useEffect(() => {
    console.log('user from subscription', user)
    mutate({ id: user?.customerId, access: user?.accessToken})
  }, [user])

  return (
    <div className="main-body">
      {subscriptions.length > 0 
      ?
      <div className="subscriptions-container">
        {subscriptions.map(subscription => (
          <SubscriptionItem 
            key={subscription.id}
            subscription={subscription}
          />
        ))}
      </div>
      :
      <div className="empty-body">
        <h3>You do not have any subscriptions yet</h3>
      </div>
      }
    </div>
  )
}

export default Subscription