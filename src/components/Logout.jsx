import React from 'react'
import useUser from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';


const Logout = () => {

    const {setUser} = useUser()
    const navigate = useNavigate()

    const handleLogout = e => {
        e.preventDefault()
        setUser()
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        navigate('/login')
    }

  return (
    <form onSubmit={handleLogout}>
        <button className='btn btn-danger'>Logout</button>
    </form>
  )
}

export default Logout