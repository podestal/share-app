import { useEffect } from "react"
import useUser from "../hooks/useUser"
import useCustomerScreen from "../hooks/useCustomerScreen"
import { useQuery } from "@tanstack/react-query"
import { customerScreen } from "../api/api"
import SubscriptionItem from "../components/SubscriptionItem"

const Subscription = () => {

  const {user} = useUser()

  const {data: subscriptions, isLoading, isError, error} = useQuery({
    queryKey: ['subscriptions'],
    queryFn: () => customerScreen({ id: user.customerId, access: user.accessToken })
  })

  useEffect(() => {
    console.log('user from subscription', user);
  }, [])

  if (isLoading) return <p>Loading ...</p>

  if (isError) return <p>{error.message}</p>

  return (
    <div>
        {subscriptions.length > 0
        ? 
        <>
        {subscriptions.data.map(subscription => (
          <SubscriptionItem 
            key={subscription.id}
            subscription={subscription}
          />
        ))}
        </>
        :
        <p>You do not have any subscriptions yet</p>}

        
    </div>
  )
}

export default Subscription