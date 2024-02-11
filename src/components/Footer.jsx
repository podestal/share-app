import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Footer = () => {

  const year = moment().format('YYYY')

  return (
    <div className='footer'>
      <dir className='footer-info-container'>
        <div className='customer-service'>
          <h3>Servicio al cliente</h3>
          <p>Los 7 días de la semana, 24 horas al día</p>
          <p>Contáctanos al 973000006</p>
        </div>
        <div className='search'>
          <h3>Encuentra Títuos de Series y Pelíulas</h3>
          <a className='btn btn-primary' href="/home/#movies_finder">Buscador</a>
        </div>
        <div className='about'>
          <h3>Acerca de</h3>
          <Link to={'/about'}>Conoce quiénes somos</Link>
        </div>
      </dir>
      <p className='copyright-message'>MyShare &copy; {year}, Todos los derechos reservados</p>
    </div>
  )
}

export default Footer