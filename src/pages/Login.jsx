import React, {useEffect, useState} from 'react'
import useUser from '../hooks/useUser'
import useLogin from '../hooks/useLogin'
import { useNavigate } from "react-router-dom"

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
    <form className='container-sm w-50' onSubmit={handleSubmit}>
        <p>{error}</p>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input 
                type="text" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder='Username'
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder='Password'
                value={password}
                onChange={e => setPassowrd(e.target.value)}
            />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Login