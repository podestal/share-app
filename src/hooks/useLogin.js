import { useMutation } from "@tanstack/react-query"
import { login } from "../api/api"

const useLogin = (user, setUser) => {
    return useMutation({
        mutationFn: data => login(data),
        onSuccess: res => setUser({...user, ...res.data}),
        onError: err=>console.log(err)
    })
}

export default useLogin