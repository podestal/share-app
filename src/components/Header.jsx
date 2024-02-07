import { Link } from 'react-router-dom'
import Logout from './Logout'
import useUser from '../hooks/useUser'

const Header = () => {

  const { user } = useUser()

  return (
    <div className='header' id='header'>
      <dir className='header-logo-container'>
        {/* <Link to={user ? '/home' : '/'}><h1 className='header-logo'>MyShare</h1></Link> */}
        <Link to='/' ><h1 className='header-logo'>MyShare</h1></Link>
      </dir>
      
      <nav className='header-nav'>
        {user?.accessToken
        ?
        <>
          <Link to={'/subscription'}>Subscription</Link>
          <Link to={'/about-us'}>About Us</Link>
          <Link to={'/profile'}>Profile</Link>
          <Logout />
        </>
        :
        <>
          <Link to={'/'}>Home Page</Link>
          <Link to={'/about'}>About Us</Link>
          <Link to={'/login'}>Login</Link>
        </>
        }

      </nav>
    </div>
  )
}

export default Header