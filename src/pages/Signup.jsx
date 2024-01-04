import React, { useState } from 'react'

const Signup = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [pwd, setPwd] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
    }

  return (
    <form>
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
    </form>
  )
}

export default Signup