import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
        <p><Link to={'/'}>Home</Link></p>
        <p><Link to={'/login'}>Login</Link></p>
        <p><Link to={'/signup'}>Signup</Link></p>
    </nav>
  )
}

export default Header