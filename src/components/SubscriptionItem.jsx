import React, { useEffect, useState } from 'react'

const SubscriptionItem = ({ subscription }) => {

    const [renew, setRenew] = useState(false)
    const profiles = Array.from(Array(subscription.service.screen_limit).keys())
    

    const profilesOrder = {
        1: 'primer',
        2: 'segundo',
        3: 'tercero',
        4: 'cuarto',
        5: 'quinto',
        6: 'sexto',
    }

    const period = {
        'O': 30,
        'T': 90,
        'S': 180,
        'N': 270,
    }

    useEffect(() => {
        for (let i = 1; i <= subscription.service.screen_limit; i++) {
            profiles[i-1] = i
        }
    }, [])

    const handleRenew = () => {
        setRenew(prev => !prev)
    }

  return (
    <div className='service-container subscription-container'>
        <div className='subscription-header'>
            <h2 className={`subscription-platform subscription-platform-${(subscription.service.platform).toLowerCase()}`}>{subscription.service.platform}</h2>
            {/* <button onClick={handleRenew}>Renovar</button> */}
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
                <p>Contraseña: {subscription.password}</p>
                <p>Fecha de vencimiento: {subscription.due_date}</p>
                <h3>Perfil: # {subscription.position}</h3>
                <span>Utilice el {profilesOrder[subscription.position]} perfil</span>
                <div className='profiles-container'>
                    {profiles.map(profile => <div className={profile == subscription.position - 1 ? 'profile-active profile-item' : 'profile-item'} key={profile}></div>)}
                </div>
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