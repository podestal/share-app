import React, { useEffect } from 'react'
import { Outlet, json } from 'react-router-dom'
import useUser from '../hooks/useUser'
import useCustomer from '../hooks/useCustomer'

const PersistLogin = () => {

    const {user, setUser} = useUser()
    const {mutate} = useCustomer(user, setUser)

    useEffect(() => {
        const access = JSON.parse(localStorage.getItem('access'))
        if (!user?.accessToken) {
            setUser({ ...user, accessToken: access })
        }
        mutate({ access })
    }, [])

  return (
    <div>
        {<Outlet />}
    </div>
  )
}

export default PersistLogin