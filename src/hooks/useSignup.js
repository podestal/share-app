import { useMutation } from "@tanstack/react-query"
import { signup } from "../api/api"
import useLogin from "./useLogin"

const useSignup = (user, setUser, username,  password) => {

    const {mutate: login} = useLogin(user, setUser)

    return useMutation({
        mutationFn: (data) => signup(data),
        onSuccess: res => {
            setUser({ ...res.data })
            login({ username, password })
        },
        onError: err => setErr(err.message),
    })
}

export default useSignup