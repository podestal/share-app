import React, { useEffect, useState } from 'react'
import { Outlet, json } from 'react-router-dom'
import useUser from '../hooks/useUser'
import useCustomer from '../hooks/useCustomer'
import useRefresh from '../hooks/useRefresh'
import { jwtDecode } from "jwt-decode";
import { Navigate } from 'react-router-dom'
import dayjs from "dayjs";
import { getCustomer } from '../api/api'
import { useMutation } from '@tanstack/react-query'

const PersistLogin = () => {

    const [access, setAccess] = useState(JSON.parse(localStorage.getItem('access')) || "")
    const [refreshToken, setRefresh] = useState(JSON.parse(localStorage.getItem('refresh')) || "")
    const {user, setUser} = useUser()
    const {mutate: getCustomerMutation} = useMutation({
        mutationFn: data => getCustomer(data),
        onSuccess: res => {
            setUser({
             accessToken: access,
             customerId: res.data.id,
             active: res.data.active,
             userId: res.data.user.id,
             email: res.data.user.email,
             firstName: res.data.user.first_name,
             lastName: res.data.user.last_name,
             username: res.data.user.username
            })},
    })
    // const {mutate: getCustomer} = useCustomer(user, setUser)
    const {mutate: refresh} = useRefresh(user, setUser, setAccess)

    useEffect(() => {
        const exp = jwtDecode(access).exp
        const isExpired = dayjs.unix(exp).diff(dayjs()) < 1
        if (isExpired) {
            refresh({ refresh: refreshToken })
        }
        getCustomerMutation({ access })
    }, [access])

  return (
    <>
        {access ? <Outlet /> : <Navigate to={'/login'}/>}
    </>
  )
}

export default PersistLogin