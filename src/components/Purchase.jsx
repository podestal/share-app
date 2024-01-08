import React from 'react'
import Select from 'react-select'

const Purchase = ({ screen }) => {

  const options = [
    {value: 'T', label: 'Three Months'},
    {value: 'S', label: 'Six Months'},
    {value: 'N', label: 'Nine Months'},
  ]

  return (
    <div className='purchase-card'>
        <h2>{screen.service.platform}</h2>
        <h3>Price: {screen.service.price}</h3>
        <p>Period:</p>
        <Select options={options}/>
        <form>
            <button>Cancelar</button>
            <button>Ir a Pagar</button>
        </form>
    </div>
  )
}

export default Purchase