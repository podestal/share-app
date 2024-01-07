import { useMutation } from "@tanstack/react-query"

const useRefresh = (user, setUser) => {
    return useMutation({
        mutationFn: data => getAccess(data),
        // onSuccess: res => setUser({...user, accessToken: res.data.access})
        onSuccess: res => console.log(res.data)
    })
}

export default useRefresh