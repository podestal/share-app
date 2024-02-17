import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { activateEmail } from '../api/api'
import { useMutation } from '@tanstack/react-query'

const ConfirmEmailPage = () => {

    const params = useParams()
    const navigate = useNavigate()
    const {mutate: activateEmailMutation} = useMutation({
        mutationFn: data => activateEmail(data),
    })

    useEffect(() => {
        activateEmailMutation({ uid:params.uid, token:params.token, })
        setTimeout(() => {
            navigate('/login')
        }, 3000)
    }, [])

  return (
    <div className='empty-body'>
        <div>
            <h2>Muchas gracias por confirmar su correo electrónico</h2>
            <br />
            <h2>Lo estamos redireccionando ...</h2>
        </div>
    </div>
  )
}

export default ConfirmEmailPage