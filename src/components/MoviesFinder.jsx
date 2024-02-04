import React, { useEffect, useState } from 'react'
import { moviesData } from '../../movies/moviesData'

const MoviesFinder = () => {

    const [title, setTitle] = useState("")
    const [foundTitles, setFoundTitles] = useState([])

    const handleSearch = e => {
        e.preventDefault()
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

        setFoundTitles(myTitles)
        setTitle('')
    }

  return (
    <form className='movies-finder-form' onSubmit={handleSearch}>
        {foundTitles && foundTitles.map(title => (
            <div key={title.original_title}>
              <h3>{title.original_title}</h3>
              <p>Streaming in {title.streaming[0]}</p>
            </div>
          ))}
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