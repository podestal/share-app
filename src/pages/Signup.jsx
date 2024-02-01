import React, { useEffect, useState } from 'react'
import useUser from '../hooks/useUser'
import useSignup from '../hooks/useSignup'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Signup = () => {

    const {user, setUser} = useUser()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [pwd, setPwd] = useState("")
    const [err, setErr] = useState("")
    const navigate = useNavigate()

    const {mutate: signup} = useSignup(user, setUser, username, password)


    const handleSubmit = e => {
        setErr("")
        e.preventDefault()
        if (password === pwd) {
            signup({ email, username, password })
            navigate('/login')
        } else {
            setErr("Passwords must match")
        }

    }

    useEffect(() => {
        console.log("user", user)

    }, [user])

  return (
        <div className='main-body'>
            <div className='access-container access-container-signup'>
                <h2 className='access-container-title'>Regístrate</h2>
                {err && <p className='access-container-error'>{err}</p>}
                <form onSubmit={handleSubmit}>
                    <input 
                        type='email'
                        placeholder='Correo Electrónico'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type='text'
                        placeholder='Usuario'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input 
                        type='password'
                        placeholder='Contraseña'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input 
                        type='password'
                        placeholder='Contraseña otra vez'
                        value={pwd}
                        onChange={e => setPwd(e.target.value)}
                    />
                    <button className='btn btn-primary' type='submit'>Regístrate</button>
                </form>
                <p>Ya tienes una cuenta? <Link to={'/login'}>Inicia sesión</Link></p>
            </div>
        </div>
  )
}

export default Signup