import React from 'react'
import useMovies from '../hooks/useMovies'
import { Link } from 'react-router-dom'
import useServicesContext from '../hooks/useServicesContext'

const MoviesPage = () => {

    const {movies} = useMovies()
    const {services} = useServicesContext()
    const purchaseOptions = {
        'HBO Max': 8,
        'Paramount': 4,
        'Amazon Prime Video': 3,
        'Disney+': 2,
        'Netflix': 1
    }

  return (
    <div className='main-body'>
      {movies && movies.map(title => (
          <div key={title.original_title} className='title-container'>
            <div className='title-data'>
              <h3>{title.original_title}</h3>
              <p>Disponible en:</p>
              <div className='logos-container'>
                {services.map(service =>  title.streaming.indexOf(service.comercial_name) != -1 &&                
                    <div className='logo-container'>
                      <Link to={`/service/${service.id}`}><div className={`logo ${service.comercial_name.toLowerCase().replace(' ', '-').replace('+', '')}-logo`}></div></Link>
                      <span className='logo-text'>{((service.price * 3.7) * 0.9).toFixed(2)}</span>
                      <span className='logo-text'>Al mes</span>
                    </div>
                )}
              </div>
            </div>
            <div className='title-img'>
              <img src={title.poster[0] == 'None' ? title.poster[1] : title.poster[0]} alt={title.original_title} />
            </div>
          </div>
        ))}
    </div>
  )
}

export default MoviesPage