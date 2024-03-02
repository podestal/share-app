import React, { useState } from 'react'
import useUser from '../hooks/useUser'
import useLogin from '../hooks/useLogin'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { createCustomer, signup, login } from '../api/api'
import Spinner from '../components/Spinner'

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
    const [loading, setLoading] = useState(false)
    const regExp = /^(?=.*[0-9])(?=.*[a-z])/

    // mutate({ username, password })
    // export const login = async data => baseAxios.post(LOGIN, data)
    // useLogin = (user, setUser, setError, setUsername, setPassword)

    const {mutate: loginMutation} = useMutation({
        mutationFn: data => login(data),
        onSuccess: res => {
            console.log(res)
            localStorage.setItem('refresh', JSON.stringify(res.data.refresh))
            localStorage.setItem('access', JSON.stringify(res.data.access))
            setUser({ ...user, accessToken: res.data.access, refreshToken: res.data.refresh})
            setTimeout(() => {
                setLoading(false)    
            }, 12000)
            console.log('user from login mutation', user)
            navigate('/home')
            
        },
        onError: err => {
            setLoading(false)   
            console.log(err)},
    })

    const {mutate: createCustomerMutation} = useMutation({
        mutationFn: data => createCustomer(data),
        onSuccess: res => {
            setUser({ ...user, customerId: res.data.id })
            loginMutation({ username, password })
        },
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
        setLoading(true)
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
        }
    }

  return (
        <div className='main-body'>
            {loading 
            ? 
            <Spinner />
            :
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
            </div>}
        </div>
  )
}

export default Signup