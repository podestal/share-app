import { useMutation } from "@tanstack/react-query"
import { signup } from "../api/api"

const useSignup = (setUser) => {

    return useMutation({
        mutationFn: (data) => signup(data),
        onSuccess: res => setUser({ ...res.data }),
        onError: err => setErr(err.message),
    })
}

export default useSignup