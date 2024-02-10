import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { resetPassword } from '../api/api'

const ResetPassword = () => {

    const {mutate} = useMutation({
        mutationFn: data => resetPassword(data),
        onSuccess: res => console.log(res),
        onError: err => console.log(err)
    })

    const handleSubmit = e => {
        e.preventDefault()
        mutate( {
            "uid": 'MzM',
            "token": "c27bhs-110e0d448d9bc2324dba43d00e9d1adc",
            "new_password": "13angulos",
            "re_new_password": "13angulos",
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <button>Submit</button>
    </form>
  )
}

export default ResetPassword