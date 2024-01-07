import { useMutation } from "@tanstack/react-query"
import { getCustomer } from "../api/api"

const useCustomer = (user, setUser) => {
    return useMutation({
        mutationFn: (data) => getCustomer(data),
        onSuccess: res => {
            console.log("from useCustomer", res.data)
            setUser({ ...res.data, ...res.data.user, ...user })
        },
        onError: err => console.log(err)
    })
}

export default useCustomer