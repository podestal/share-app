import React, { useEffect, useState } from 'react'
import useUser from '../hooks/useUser'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { createCustomer, signup } from '../api/api'

const Signup = () => {

    const {user, setUser} = useUser()
    const [username, setUsername] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [pwd, setPwd] = useState("")
    const [err, setErr] = useState("")
    const navigate = useNavigate()
    const regExp = /^(?=.*[0-9])(?=.*[a-z])/

    const {mutate: createCustomerMutation} = useMutation({
        mutationFn: data => createCustomer(data),
        onSuccess: res => setUser({ ...user, customerId: res.data.id }),
    })  

    const {mutate: createUserMutation} = useMutation({
        mutationFn: (data) => signup(data),
        onSuccess: res => {
            setUser({ ...res.data, active: false })
            createCustomerMutation({ user: res.data.id })
        },
        onError: err => setErr(err.message),
    })

    const handleSubmit = e => {
        setErr("")
        e.preventDefault()
        if (password !== pwd) {
            setErr("Passwords must match")
        }
        else if (!regExp.test(password)) {
            setErr("Passwords must be alphanumerical")
        }
        else if (password.length < 8) {
            setErr("Password must be at least 8 characters long")
        } 
        else {
            createUserMutation({ email, username, password, first_name: firstName, last_name: lastName })
            navigate('/confirm')
        }
    }

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
                        type='text'
                        placeholder='Nombre'
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <input 
                        type='text'
                        placeholder='Apellido'
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
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