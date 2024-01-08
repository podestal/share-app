import React, {useEffect, useState} from 'react'
import useUser from '../hooks/useUser'
import useLogin from '../hooks/useLogin'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'

const Login = () => {

    const {user, setUser} = useUser()
    const [username, setUsername] = useState("")
    const [password, setPassowrd] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const {mutate} = useLogin(user, setUser, setError, setUsername, setPassowrd, navigate)

    const handleSubmit = e => {
        e.preventDefault()
        mutate({ username, password })
    }

    useEffect(() => {
        console.log("logged user", user);
    }, [user])

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <p>{error}</p>
                <input 
                    type="text" 
                    placeholder='Username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassowrd(e.target.value)}
                />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p>Don't have an account? <Link to={'/signup'}>Signup</Link> </p>
    </div>
    
  )
}

export default Login