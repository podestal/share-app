import React, { useEffect } from 'react'
import moment from 'moment'

const SubscriptionItem = ({ subscription }) => {

    const period = {
        'T': 30,
        'S': 60,
        'N': 90,
    }

    const addDays = period[subscription?.period]
    
    const dueDate = moment(subscription?.subscribed_at).add(addDays, 'days').calendar()

  return (
    <div className='service-container subscription-container'>
            {console.log('days', addDays)}
        <div className='subscription-header'>
            <h2 className={`subscription-platform subscription-platform-${(subscription.service.platform).toLowerCase()}`}>{subscription.service.platform}</h2>
            <button>Renovar</button>
        </div>
        <div className='subscription-body'>
            <div className='subscription-details'>
                <p>Periodo: {period[subscription.period]} días</p>
                <p>Usuario: {subscription.username}</p>
                <p>Contraseña: </p>
                <p>Fecha de vencimiento: {dueDate}</p>
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