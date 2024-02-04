import React, { useEffect, useState } from 'react'
import { moviesData } from '../../movies/moviesData'

const MoviesFinder = () => {

    const [title, setTitle] = useState("")

    useEffect(() => {
      console.log(moviesData)
    }, [title])

    const handleSearch = e => {
        e.preventDefault()
        const lowerTitle = title.toLocaleLowerCase()
        moviesData.filter(movie => {
          if (movie.original_title.toLocaleLowerCase().includes(lowerTitle)) {
            console.log(movie.original_title)
          }
          else if (movie.title_two.toLocaleLowerCase().includes(lowerTitle)) {
            console.log(movie.title_two)
          }
          else if (movie.title_three.toLocaleLowerCase().includes(lowerTitle)) {
            console.log(movie.title_three)
          }
          else if (movie.title_four.toLocaleLowerCase().includes(lowerTitle)) {
            console.log(movie.title_four)
          }
        })
        setTitle('')
    }

  return (
    <form className='movies-finder-form' onSubmit={handleSearch}>
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