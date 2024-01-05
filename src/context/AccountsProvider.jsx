import { useState, createContext } from "react"

const AccountContext = createContext()

export const AccountProvier = ({children}) => {
    const [accounts, setAccounts] = useState([
        {name: "Netflix", price: 12},
        {name: "HBO Max", price: 10},
        {name: "Prime Video", price:8},
        {name: "Disney", price: 10}
    ])
}