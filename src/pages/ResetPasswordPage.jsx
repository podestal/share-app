import React from 'react'
import ResetPassword from '../components/ResetPassword'

const ResetPasswordPage = () => {
  return (
    <div className='main-body'>
        <div className='access-container'>
            <h2 className='access-container-title'>Olvidé mi contraseña</h2>
            <ResetPassword />
        </div>
    </div>
  )
}

export default ResetPasswordPage