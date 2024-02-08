import { useMutation } from "@tanstack/react-query"
import { getCustomer } from "../api/api"

const useCustomer = (user, setUser) => {
    return useMutation({
        mutationFn: (data) => getCustomer(data),
        onSuccess: res => {
            console.log('from useCUstomer')
            setUser({ 
                customerId: res.data.id, 
                active: res.data.active,
                screens: res.data.screens,
                ...res.data.user, 
                ...user 
            })
        },
        onError: err => console.log(err)
    })
}

export default useCustomer