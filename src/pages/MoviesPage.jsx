import React from 'react'
import useMovies from '../hooks/useMovies'
import { Link } from 'react-router-dom'

const MoviesPage = () => {

    const {movies} = useMovies()
    const mytr = 'hola'
    mytr.toLowerCase()

  return (
    <div className='main-body'>
        {movies && movies.map(title => (
            <div key={title.original_title}>
              <h3>{title.original_title}</h3>
              <p>Streaming at:</p>
              <div className='logos-container'>
                {title.streaming.map(stream => <div className={`logo ${stream.toLowerCase().replace(' ', '-').replace('+', '')}-logo`}></div> )}
              </div>

            </div>
        ))}
    </div>
  )
}

export default MoviesPage