import React, { useState } from 'react'

const MoviesFinder = () => {

    const [title, setTitle] = useState("")

    const handleSearch = e => {
        e.preventDefault()
        alert(title)
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