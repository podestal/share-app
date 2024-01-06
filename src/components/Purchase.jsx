import React from 'react'

const Purchase = () => {
  return (
    <div className='purchase-card'>
        <h3>Price: 10</h3>
        <p>Period:</p>
        <form>
            <label htmlFor="three">3 Months</label>
            <input id='three' type='checkbox'/>
            <label htmlFor="three">6 Months</label>
            <input id='six' type='checkbox'/>
            <label htmlFor="three">9 Months</label>
            <input id='nine' type='checkbox'/>
        </form>
    </div>
  )
}

export default Purchase