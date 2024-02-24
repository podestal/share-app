import React, { useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const AuthRequired = () => {

    const [access, setAccess] = useState(JSON.parse(localStorage.getItem('access')) || "")

  return (
        access 
        ? <Outlet />
        : <Navigate to='/login' />
  )
}

export default AuthRequired