import React, { useEffect, useState } from 'react'
import useUser from '../hooks/useUser'
import { Outlet, Navigate } from 'react-router-dom'

const AuthRequired = () => {

    const {user} = useUser()
    const [access, setAccess] = useState(JSON.parse(localStorage.getItem('access')) || "")

    useEffect(() => {
        console.log('from require auth', user)
    }, [])

  return (
        access
        ? <Outlet />
        : <Navigate to='/login' />
  )
}

export default AuthRequired