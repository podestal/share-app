import React, { useEffect, useState } from 'react'
import { Outlet, json } from 'react-router-dom'
import useUser from '../hooks/useUser'
import useCustomer from '../hooks/useCustomer'
import useRefresh from '../hooks/useRefresh'
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

const PersistLogin = () => {

    const [access, setAccess] = useState(JSON.parse(localStorage.getItem('access')) || "")
    const [refreshToken, setRefresh] = useState(JSON.parse(localStorage.getItem('refresh')) || "")
    const {user, setUser} = useUser()
    const {mutate: getCustomer} = useCustomer(user, setUser)
    const {mutate: refresh} = useRefresh(user, setUser, setAccess)

    useEffect(() => {
        const exp = jwtDecode(access).exp
        const isExpired = dayjs.unix(exp).diff(dayjs()) < 1
        if (isExpired) {
            refresh({ refresh: refreshToken })
        }
        else if (!user?.accessToken) {
            setUser({ ...user, accessToken: access })
        }
        getCustomer({ access })
    }, [access])

  return (
    <div>
        {<Outlet />}
    </div>
  )
}

export default PersistLogin