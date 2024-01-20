import React from 'react'
import moment from 'moment'

const Footer = () => {

  const year = moment().format('YYYY')

  return (
    <div className='footer'>
      <p>MyShare &copy; {year}, Todos los derechos reservados</p>
    </div>
  )
}

export default Footer