import { useEffect, useState } from "react"
import useUser from "../hooks/useUser"
import SubscriptionItem from "../components/SubscriptionItem"
import useCustomerScreen from "../hooks/useCustomerScreen"
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

  // if (isLoading) return <p>Loading ...</p>

  // if (isError) {console.log(error)}

  return (
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
        {/* {console.log('user from subscription', user)}
        subscriptions */}
        
    </div>
  )
}

export default Subscription