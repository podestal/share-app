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

  const {user} = useUser()
  const [period, setPeriod] = useState("")
  const {mutate} = usePurchase()

  const handleSubmit = e => {
    e.preventDefault()
    mutate({ 
      available: true, 
    })
  }

  return (
    <div className='purchase-card'>
        {console.log('from purchase', user)}
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