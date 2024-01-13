import { features } from "../api/api"
import { useQuery } from "@tanstack/react-query"

const useFeatures = () => {
    return useQuery({
        queryKey: ['features'],
        queryFn: features
    })
}

export default useFeatures