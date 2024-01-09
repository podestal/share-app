import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import usePurchase from '../hooks/usePurchase'
import useUser from '../hooks/useUser'

const Purchase = ({ screen }) => {

  const options = [
    {value: 'T', label: 'Tres Meses'},
    {value: 'S', label: 'Seis Meses'},
    {value: 'N', label: 'Nueve Meses'},
  ]

  const {user} = useUser(screen.id)
  const [period, setPeriod] = useState("")
  const {mutate} = usePurchase()

  const handleSubmit = e => {
    e.preventDefault()
    console.log(screen.id)

    // Fix the mutation, URL is good,
    // data is not getting through
    mutate({ id: screen.id, updates: {
      available: false, 
      period, 
      customer: user.customerId,
    }})
    //   id,
    // { 
    //   available: false, 
    //   period,
    //   customer: user.customerId,
    // })
  }

  return (
    <div className='purchase-card'>
        <h2>{screen.service.platform}</h2>
        <h3>Price: {screen.service.price}</h3>
        <p>Period:</p>
        <form onSubmit={handleSubmit}>
          <Select 
            options={options}
            onChange={option => setPeriod(option.value)}
          />
          <button type='submit'>Ir a Pagar</button>
        </form>
    </div>
  )
}

export default Purchase