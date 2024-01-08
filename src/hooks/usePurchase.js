import { useMutation } from "@tanstack/react-query"
import { updateScreen } from "../api/api"

const usePurchase = () => {
    return useMutation({
        mutationFn: data => updateScreen(data),
        onSuccess: res => console.log(res.data),
        onError: err => console.log(err)
    })
}

export default usePurchase