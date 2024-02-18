import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { resetPassword } from '../api/api'

const ResetPassword = () => {

    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [successful, setSuccsessful] = useState("")

    const {mutate} = useMutation({
        mutationFn: data => resetPassword(data),
        onSuccess: res => {
            console.log(res)
            setSuccsessful('Revise su correo electronico')},
        onError: err => setError(err.message),
    })

    const handleSubmit = e => {
        e.preventDefault()
        setError("")
        setSuccsessful("")
        mutate( {
            email
        })
        setEmail("")
    }

  return (
    <>
        {successful && <p className='access-container-success'>{successful}</p>}
        {error && <p className='access-container-error'>{error}</p>}   
        <form onSubmit={handleSubmit}>
            <input 
                type='email'
                placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button className='btn btn-primary'>Submit</button>
        </form>
    </>
  )
}

export default ResetPassword