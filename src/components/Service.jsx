import React from 'react'

const Service = ({ service }) => {

    const handleBuy = () => {

    }

  return (
    <>
        <div>
            <h2>{service.title}</h2>
            <p>{service.screen_price}</p>
            <button onClick={handleBuy}>Comprar Ahora</button>
            <p>Detalles</p>
        </div>
    </>
  )
}

export default Service