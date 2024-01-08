import { screen } from "../api/api"
import { useQuery } from "@tanstack/react-query"

const useScreen = (id) => {
    return useQuery({
        queryKey: ['screen'],
        queryFn: () => screen({ id })
    })
}

export default useScreen