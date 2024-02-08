import { useMutation } from "@tanstack/react-query"
import { signup } from "../api/api"
import useLogin from "./useLogin"

const useSignup = (user, setUser, username,  password) => {

    return useMutation({
        mutationFn: (data) => signup(data),
        onSuccess: res => {
            console.log(res.data);
            setUser({ ...res.data, active: false })
        },
        onError: err => setErr(err.message),
    })
}

export default useSignup