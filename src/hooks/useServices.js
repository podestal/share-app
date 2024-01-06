import { useQuery } from "@tanstack/react-query"
import { services } from "../api/api"

const useServices = () => {
    return useQuery({
        queryKey: ['services'],
        queryFn: services
    })
}

export default useServices