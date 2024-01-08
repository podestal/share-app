import { useMutation } from "@tanstack/react-query"
import { refresh } from "../api/api"

const useRefresh = (user, setUser, setAccess) => {
    return useMutation({
        mutationFn: data => refresh(data),
        onSuccess: res => {
            setAccess(res.data.access)
            setUser({ accessToken: res.data.access})
        },
        // onSuccess: res => console.log('from refresh', res.data),
        onError: err => console.log(err),
    })
}

export default useRefresh