import { customerScreen } from "../api/api"
import { useQuery } from "@tanstack/react-query"

const useCustomerScreen = (id, access) => {

    return useQuery({
        queryKey: ['customerScreen'],
        queryFn: () => customerScreen({ id, access })
    })
}

export default useCustomerScreen