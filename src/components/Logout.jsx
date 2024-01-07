import React from 'react'
import useUser from '../hooks/useUser';

const Logout = () => {

    const {setUser} = useUser()

    const handleLogout = () => {
        setUser({})
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
    }

  return (
    <button onClick={handleLogout}>
        Logout
    </button>
  )
}

export default Logout