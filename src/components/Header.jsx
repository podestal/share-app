import { Link } from 'react-router-dom'
import Logout from './Logout'
import useUser from '../hooks/useUser'
import { useState } from 'react'

const Header = () => {

  const { user } = useUser()
  const [show, setShow] = useState(false)

  const handleNavBar = () => {
    setShow(!show)
  }

  return (
    <div className={show ? 'header header-mobile' : 'header'} id='header'>
      <div className='header-logo-container'>
        <Link to={user?.accessToken ? '/home' : '/'} ><div className='logo'></div></Link>
      </div>
      <nav className='header-nav' id='links'>
        {user?.accessToken
        ?
        <>
          <Link to={'/subscription'}>Subscripciones</Link>
          <Link to={'/about-us'}>Nosotros</Link>
          {/* <Link to={'/profile'}>Profile</Link> */}
          {user?.username == 'podestal' && <Link to={'/orders'}>Orders</Link>}
          <Logout />
        </>
        :
        <>
          <Link to={'/'}>Home Page</Link>
          <Link to={'/about'}>Nosotros</Link>
          <Link to={'/login'}>Login</Link>
        </>
        }
      </nav>
      {show &&
        <nav className='header-nav header-nav-mobile' id='links'>
          {user?.accessToken
          ?
          <>
            <Link to={'/subscription'}>Subscripciones</Link>
            <Link to={'/about-us'}>Nosotros</Link>
            {/* <Link to={'/profile'}>Profile</Link> */}
            {user?.username == 'podestal' && <Link to={'/orders'}>Orders</Link>}
            <Logout />
          </>
          :
          <>
            <Link to={'/'}>Home Page</Link>
            <Link to={'/about'}>Nosotros</Link>
            <Link to={'/login'}>Login</Link>
          </>
          }
        </nav>
      }
        <a className={show ? 'hamburger' : 'hamburger hamburger-noshow'} onClick={handleNavBar}>
          <i class="fa fa-bars"></i>
        </a>
    </div>
  )
}

export default Header