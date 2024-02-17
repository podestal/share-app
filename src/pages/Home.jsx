import Services from '../components/Services'
import MoviesFinder from '../components/MoviesFinder'
import { useEffect } from 'react'
import { moviesData } from '../movies/moviesData'

const Home = () => {

  return (
    <>  
        <div className='hero' id='movies_finder'>
          <div className='main-body'>
            <h1>Encuentra donde se transmite el título de película o serie que estés buscando</h1>
            <MoviesFinder />  
          </div>
        </div>
        <Services />
    </>
  )
}

export default Home