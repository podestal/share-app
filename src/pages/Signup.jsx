import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { signup } from '../api/api'

const Signup = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [pwd, setPwd] = useState("")
    const [err, setErr] = useState("")

    const {mutate} = useMutation({
        mutationFn: data => signup(data),
        onSuccess: res => console.log(res),
        onError: err => console.log(err),
    })

    const handleSubmit = e => {
        setErr("")
        e.preventDefault()
        if (password === pwd) {
            mutate({ email, username, password })
        }
        setErr("Passwords must match")
    }

  return (
    <>
        <p>{err}</p>
        <form onSubmit={handleSubmit}>
            <input 
                type='email'
                placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input 
                type='text'
                placeholder='Username'
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input 
                type='password'
                placeholder='Password'
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <input 
                type='password'
                placeholder='Re-Password'
                value={pwd}
                onChange={e => setPwd(e.target.value)}
            />
            <button type='submit'>Signup</button>
        </form>
    </>
  )
}

export default Signup