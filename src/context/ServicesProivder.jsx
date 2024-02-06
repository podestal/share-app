import { createContext, useState } from "react"

const ServicesContext = createContext()

export const ServicesProvider = ({ children }) => {

    const [services, setServices] = useState()

    return (
        <ServicesContext.Provider value={{services, setServices}}>
            {children}
        </ServicesContext.Provider>
    )
}

export default ServicesContext