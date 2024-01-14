import React, { useEffect, useState } from 'react'

const SubscriptionItem = ({ subscription }) => {

    const [renew, setRenew] = useState(false)

    const period = {
        'T': 30,
        'S': 60,
        'N': 90,
    }

    const handleRenew = () => {
        setRenew(prev => !prev)
    }

  return (
    <div className='service-container subscription-container'>
        <div className='subscription-header'>
            <h2 className={`subscription-platform subscription-platform-${(subscription.service.platform).toLowerCase()}`}>{subscription.service.platform}</h2>
            <button onClick={handleRenew}>Renovar</button>
        </div>
        {renew && 
        <div className='subscription-body'>
            <p>Select</p>
            <button className='btn btn-primary'>ir a pagar</button>
        </div>}
        <div className='subscription-body'>
            <div className='subscription-details'>
                <p>Periodo: {period[subscription.period]} días</p>
                <p>Usuario: {subscription.username}</p>
                <p>Contraseña: </p>
                <p>Fecha de vencimiento: {subscription.due_date}</p>
            </div>
            <dir className='subscription-features'>
                <ul>
                    <li>Renueva la misma subscripción sin cambiarla</li>
                    <li>Atención al cliente las 24 horas</li>
                    <li>Garantía y devolución de tu dinero</li>
                </ul>
            </dir>
        </div>
    </div>
  )
}

export default SubscriptionItem