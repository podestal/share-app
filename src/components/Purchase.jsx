import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import usePurchase from '../hooks/usePurchase'
import useUser from '../hooks/useUser'
import Features from './Features'
import YapeModal from './YapeModal'
import { createOrder } from '../api/api'
import { useMutation } from '@tanstack/react-query'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: 'black',
    padding: 10,
  }),
}

const Purchase = ({ screen }) => {

  const [errorMsg, setErrorMsg] = useState("")
  const [price, setPrice] = useState(screen?.service.price.toFixed(2) || 0)

  const options = [
    {value: 'T', label: 'Tres Meses', price, days: 90},
    {value: 'S', label: 'Seis Meses', price: (price * 0.95).toFixed(2), days: 180},
    {value: 'N', label: 'Nueve Meses', price: (price * 0.90).toFixed(2), days: 270},
  ]

  const {user} = useUser()
  const [period, setPeriod] = useState("")
  const [days, setDays] = useState("")
  const {mutate} = usePurchase()
  const [order, setOrder] = useState({})
  const [modal, setModal] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)
  
  const {mutate: createOrderMutation} = useMutation({
    mutationFn: data => createOrder(data),
    onSuccess: res => setOrder(res.data),
    onError: err => console.log(err),
  })

  const handleSubmit = e => {
    e.preventDefault()
    setErrorMsg("")
    if (period == "") {
      return setErrorMsg("Selecciona un periodo")
    }
    setModal(true)
    createOrderMutation({ access: user.accessToken, order: {service: screen.service.id, period} })
  }

  return (
    <>
      {console.log('screen', screen)}
      {screen
      ?
        <div className='purchase-container'>
          <div className='purchase-options-container'>
            <p>{errorMsg}</p>
            <h2>Price</h2>
            {days ? <p>S/.{(price*3.7).toFixed(2)} al mes</p> : <p>S/.0.00 al mes</p>}
            <p>Total: S/.{((price*3.7) * (days / 30)).toFixed(2)}</p>
            <h2>Periodo</h2>
            <form onSubmit={handleSubmit}>
              <Select 
                options={options}
                styles={customStyles}
                onChange={option => {
                  setTotalPrice(((option.price*3.7) * (option.days / 30)).toFixed(2))
                  setDays(option.days)
                  setPrice(option.price)
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
        {modal && <YapeModal 
          order={order}
          screenId={screen.id}
          days={days}
          setModal={setModal}
          totalPrice={totalPrice}
        />}  
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