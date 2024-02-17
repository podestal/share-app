import { useMutation } from "@tanstack/react-query"
import { updateScreen } from "../api/api"

const usePurchase = () => {
    return useMutation({
        mutationFn: data => updateScreen(data),
    })
}

export default usePurchase