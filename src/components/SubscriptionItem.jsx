import React, { useEffect } from 'react'
import moment from 'moment'

const SubscriptionItem = ({ subscription }) => {

    const period = {
        'T': [30, '30 Días'],
        'S': [60, '60 Días'],
        'N': [90, '90 Días'],
    }
    

    const dueDate = moment(subscription?.subscribed_at).add(period[subscription?.period][0], 'days').calendar()

  return (
    <div className='service-container subscription-container'>
        <div className='subscription-header'>
            <h2 className={`subscription-platform subscription-platform-${(subscription.service.platform).toLowerCase()}`}>{subscription.service.platform}</h2>
            <button>Renovar</button>
        </div>
        <div className='subscription-body'>
            <div className='subscription-details'>
                <p>Periodo: {period[subscription.period][1]}</p>
                <p>Usuario: {subscription.username}</p>
                <p>Contraseña: {subscription.password}</p>
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