import { useMutation } from "@tanstack/react-query"
import { getAccess } from "../api/api"

const useAccess = ( user, setUser ) => {
    return useMutation({
        mutationFn: data => getAccess(data),
        onSuccess: res => setUser({...user, accessToken: res.data.access})
    })
}

export default useAccess