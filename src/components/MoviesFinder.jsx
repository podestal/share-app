import React, { useEffect, useState } from 'react'
import { moviesData } from '../../movies/moviesData'
import useMovies from '../hooks/useMovies'
import { useNavigate } from 'react-router-dom'

const MoviesFinder = () => {

    const [title, setTitle] = useState("")
    const [notFoundMessage, setNotFoundMessage] = useState("")
    const {movies, setMovies} = useMovies()
    const navigate = useNavigate()

    useEffect(() => {
      console.log(moviesData)
    }, [])

    const handleSearch = e => {
        e.preventDefault()
        setNotFoundMessage("")
        const lowerTitle = title.toLocaleLowerCase()
        const myTitles = moviesData.filter(movie => {
          if (movie.original_title.toLocaleLowerCase().includes(lowerTitle)) {
            return movie.original_title
          }
          else if (movie.title_two.toLocaleLowerCase().includes(lowerTitle)) {
            return movie.title_two
          }
          else if (movie.title_three.toLocaleLowerCase().includes(lowerTitle)) {
            return movie.title_three
          }
          else if (movie.title_four.toLocaleLowerCase().includes(lowerTitle)) {
            return movie.title_four
          }
        })
        if (myTitles.length > 1) {
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
            placeholder='Titulo de la película'
            value={title}
            onChange={e => setTitle(e.target.value)}
        />
        <button type='submit' className='btn btn-primary'>Buscar</button>
    </form>
  )
}

export default MoviesFinder