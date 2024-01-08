import { Link } from 'react-router-dom'
import Logout from './Logout'
import useUser from '../hooks/useUser'

const Header = () => {

  const { user } = useUser()

  return (
    <>
      <h1><Link to={'/'}>Logo</Link></h1>
      <nav>
        {user?.accessToken
        ?
        <>
          <p><Link to={'/subscription'}>Subscription</Link></p>
          <p><Link to={'/profile'}>Profile</Link></p>
          <Logout />
        </>
        :
        <>
          <p><Link to={'/'}>Home Page</Link></p>
          <p><Link to={'/about'}>About Us</Link></p>
          <p><Link to={'/login'}>Login</Link></p>
        </>
        }

      </nav>
    </>
  )
}

export default Header