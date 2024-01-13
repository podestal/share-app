import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import usePurchase from '../hooks/usePurchase'
import useUser from '../hooks/useUser'
import moment from 'moment'
import Features from './Features'

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: 'black',
    padding: 10,
  }),
}

const Purchase = ({ screen }) => {

  const options = [
    {value: 'T', label: 'Tres Meses', price: (screen?.service.price).toFixed(2)},
    {value: 'S', label: 'Seis Meses', price: (screen?.service.price * 0.95).toFixed(2)},
    {value: 'N', label: 'Nueve Meses', price: (screen?.service.price * 0.90).toFixed(2)},
  ]

  const [price, setPrice] = useState(screen?.service.price.toFixed(2))
  const {user} = useUser()
  const [period, setPeriod] = useState("")
  const {mutate} = usePurchase()
  

  const handleSubmit = e => {
    e.preventDefault()
    console.log(screen.id)

    mutate({ id: screen.id, updates: {
      available: false, 
      period, 
      customer: user.customerId,
      subscribed_at:moment().format('YYYY-MM-DD'),
    }})
  }

  return (
    <div className='purchase-container'>
        <div className='purchase-options-container'>
          <h2>{screen?.service.platform}</h2>
          <h3>Price: {price}</h3>
          <p>Period:</p>
          <form onSubmit={handleSubmit}>
            <Select 
              options={options}
              styles={customStyles}
              onChange={option => {
                setPrice(option.price)
                setPeriod(option.value)}}
            />
            <button className='btn btn-primary' type='submit'>Ir a Pagar</button>
          </form>
        </div>
        <div className='purchase-features-container'>
          <Features 
            serviceId={screen.service.id}
          />
        </div>
    </div>
  )
}

export default Purchase