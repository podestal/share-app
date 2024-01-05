import React, { useEffect, useState } from 'react'
import useUser from '../hooks/useUser'
import Account from '../components/Account'

const Home = () => {

    const {user} = useUser()

    const [accounts, setAccounts] = useState([
        {name: "Netflix", price: 12},
        {name: "HBO Max", price: 10},
        {name: "Prime Video", price:8},
        {name: "Disney", price: 10}
    ])

    useEffect(() => {
        console.log("user from home", user)
    }, [user])

  return (
    <>
        {accounts.map(account => <Account key={account.name} account={account}/>)}
    </>
  )
}

export default Home