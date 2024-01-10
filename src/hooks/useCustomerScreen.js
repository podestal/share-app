import { customerScreen } from "../api/api"
import { useQuery } from "@tanstack/react-query"

const useCustomerScreen = (id, access) => {

    console.log('id', id)
    console.log('access', access);

    return useQuery({
        queryKey: ['customerScreen'],
        queryFn: () => customerScreen({ id, access })
    })
}

export default useCustomerScreen