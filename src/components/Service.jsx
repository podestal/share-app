import React from 'react'

const Service = ({ service }) => {
  return (
    <div>
        <h3>{service.platform}</h3>
        <p>$.{service.price}.00</p>
    </div>
  )
}

export default Service