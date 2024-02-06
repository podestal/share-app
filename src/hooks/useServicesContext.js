import { useContext } from "react"
import ServicesContext from "../context/ServicesProivder"

const useServicesContext = () => {
    return useContext(ServicesContext)
}

export default useServicesContext