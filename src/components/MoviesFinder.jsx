import React, { useEffect, useState } from 'react'
import { moviesData } from '../movies/moviesData'
import useMovies from '../hooks/useMovies'
import { useNavigate } from 'react-router-dom'

const MoviesFinder = () => {

    const [title, setTitle] = useState("")
    const [notFoundMessage, setNotFoundMessage] = useState("")
    const {movies, setMovies} = useMovies()
    const navigate = useNavigate()

    const handleSearch = e => {
        e.preventDefault()
        setNotFoundMessage("")
        if (title.length == 0) {
          return
        }
        const lowerTitle = title.toLocaleLowerCase()
        const myTitles = moviesData.filter(movie => {
          if (movie.original_title.toLowerCase().includes(lowerTitle)) {
            return movie
          }
           else if (movie.title_two.includes(lowerTitle)) {
            return movie
          } else if (movie.title_three.includes(lowerTitle)){
            return movie
          } else if (movie.title_four.includes(lowerTitle)){
            return movie
          } 
        })
        if (myTitles.length > 0) {
          setMovies(myTitles)
          navigate('/movies')
        } else {
          setMovies([])
          setNotFoundMessage("Lo sentimos pero, no pudimos encontrar el título que está buscando")
        }
        setTitle('')
    }

  return (
    <form className='movies-finder-form' onSubmit={handleSearch}>
        {notFoundMessage && <p>{notFoundMessage}</p>}
        <input 
            type="text" 
            placeholder='Titulo de la película o serie'
            value={title}
            onChange={e => setTitle(e.target.value)}
        />
        <button type='submit' className='btn btn-primary'>Buscar</button>
    </form>
  )
}

export default MoviesFinder