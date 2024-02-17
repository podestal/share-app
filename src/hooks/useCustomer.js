import { useMutation } from "@tanstack/react-query"
import { getCustomer } from "../api/api"

const useCustomer = (user, setUser) => {
    return useMutation({
        mutationFn: (data) => getCustomer(data),
        onSuccess: res => {
            setUser({ 
                customerId: res.data.id, 
                active: res.data.active,
                screens: res.data.screens,
                ...res.data.user, 
                ...user 
            })
        },
    })
}

export default useCustomer