import React from 'react'

const Purchase = () => {
  return (
    <div className='purchase-card'>
        <h3>Price: 10</h3>
        <p>Period:</p>
        <form>
            <label htmlFor="three">3 Months</label>
            <input id='three' type='checkbox'/>
            <label htmlFor="six">6 Months</label>
            <input id='six' type='checkbox'/>
            <label htmlFor="nine">9 Months</label>
            <input id='nine' type='checkbox'/>
            <button>Cancelar</button>
            <button>Ir a Pagar</button>
        </form>
    </div>
  )
}

export default Purchase