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
      <div className="subscriptions-container">
        {subscriptions?.length > 0
        ? 
        <>
        {subscriptions.map(subscription => (
          <SubscriptionItem 
            key={subscription.id}
            subscription={subscription}
          />
        ))}
        </>
        :
        <p>You do not have any subscriptions yet</p>}
      </div>
    </div>
  )
}

export default Subscription