import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { resetPassword } from '../api/api'

const ResetPassword = () => {

    const [email, setEmail] = useState("")

    const {mutate} = useMutation({
        mutationFn: data => resetPassword(data),
        onSuccess: res => console.log(res),
        onError: err => console.log(err)
    })

    const handleSubmit = e => {
        e.preventDefault()
        mutate( {
            email
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        <button className='btn btn-primary'>Submit</button>
    </form>
  )
}

export default ResetPassword