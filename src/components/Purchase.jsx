import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import usePurchase from '../hooks/usePurchase'
import useUser from '../hooks/useUser'
import Features from './Features'
import { createOrder } from '../api/api'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: 'black',
    padding: 10,
  }),
}

const Purchase = ({ screen }) => {

  const [errorMsg, setErrorMsg] = useState("")
  const [initialPrice, setInitialPrice] = useState((screen?.service.price * 3.7).toFixed(2) || 0)
  const [price, setPrice] = useState(0)
  const navigate = useNavigate()

  const priceOne = screen?.service.one_price
  const priceThree = screen?.service.three_price
  const priceSix = screen?.service.six_price
  const priceNine = screen?.service.nine_price

  const options = [
    {value: 'O', label: 'Un Mes', price: priceOne, totalPrice: priceOne , days: 30},
    {value: 'T', label: 'Tres Meses', price: priceThree, totalPrice: (priceThree * 3).toFixed(2) , days: 90},
    {value: 'S', label: 'Seis Meses', price: priceSix, totalPrice: (priceSix * 6).toFixed(2) ,days: 180},
    // {value: 'N', label: 'Nueve Meses', price: priceNine, totalPrice: (priceNine * 9).toFixed(2) ,days: 270},
  ]

  const {user} = useUser()
  const [period, setPeriod] = useState("")
  const [days, setDays] = useState("")
  const {mutate} = usePurchase()
  const [modal, setModal] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  
  const {mutate: createOrderMutation} = useMutation({
    mutationFn: data => createOrder(data),
    onSuccess: res => {
      navigate('/payment', { replace: true, state: {order: res.data, screenId: screen.id, days, totalPrice} })
    },
  })

  const handleSubmit = e => {
    e.preventDefault()
    setErrorMsg("")
    if (period == "") {
      return setErrorMsg("Selecciona un periodo")
    }
    createOrderMutation({ 
      access: user.accessToken, 
      order: {
        total: totalPrice, 
        period, 
        days, 
        screen: screen.id,
        customer_first_name: user.firstName,
        customer_last_name: user.lastName,
        service_platform: screen.service.platform,
        customer_id: user.customerId,
        customer_email: user.email,
        screen_username: screen.username,
        screen_password: screen.password,
        screen_profile: screen.position,
        screen_id: screen.id,
      } 
    })
  }
  return (
    <>
      {screen
      ?

        <div className='purchase-container'>
          <div className='purchase-options-container'>
            {console.log('screen', screen)}
            <p>{errorMsg}</p>
            <h2>Price</h2>
            {days ? <p>S/.{price} al mes</p> : <p>S/.0.00 al mes</p>}
            <p>Total: S/.{totalPrice}</p>
            <h2>Periodo</h2>
            <form onSubmit={handleSubmit}>
              <Select 
                options={options}
                styles={customStyles}
                onChange={option => {
                  setPrice(option.price)
                  setTotalPrice(option.totalPrice)
                  setDays(option.days)
                  setPeriod(option.value)}}
              />
              <button className='btn btn-primary' type='submit'>Ir a Pagar</button>
            </form>
          </div>
          <div className={`purchase-platform-logo subscription-platform-${(screen?.service.platform).toLowerCase()}`}>
            <h2>
              {screen?.service.platform}
            </h2>
          </div>
          <div className='purchase-features-container'>
            <Features 
              serviceId={screen.service.id}
              serviceTitle={screen.service.platform}
            />
          </div>
      </div>
      :
      <div className="empty-body">
        <h3>Este servicio no está disponible actualmente</h3>
      </div>
      }
    </>
  )
}

export default Purchase