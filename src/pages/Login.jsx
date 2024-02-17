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

  return (
    <div className='main-body'>
        <div className='access-container'>
            <h2 className='access-container-title'>Inicia Sesión</h2>
            {error && <p className='access-container-error'>{error}</p>}
            <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder='Usuario'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder='Contraseña'
                        value={password}
                        onChange={e => setPassowrd(e.target.value)}
                    />
                <button type="submit" className="btn btn-primary">Ingresa</button>
            </form>
            <p>Aún no tienes cuenta? <Link to={'/signup'}>Regístrate</Link> </p>
            <Link to={'/reset'}>Olvidaste tu contraseña? </Link>
        </div>
    </div>
    
  )
}

export default Login