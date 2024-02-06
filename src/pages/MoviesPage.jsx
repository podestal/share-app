import React from 'react'
import useMovies from '../hooks/useMovies'
import { Link } from 'react-router-dom'

const MoviesPage = () => {

    const {movies} = useMovies()
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
              <p>Streaming at:</p>
              <div className='logos-container'>
                {title.streaming.map(stream => (
                  <div className='logo-container'>
                    <Link to={`/service/${purchaseOptions[stream]}`}><div className={`logo ${stream.toLowerCase().replace(' ', '-').replace('+', '')}-logo`}></div></Link>
                    <p className='logo-text'>10 PEN</p>
                  </div>))}
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