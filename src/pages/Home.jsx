import Services from '../components/Services'
import MoviesFinder from '../components/MoviesFinder'
import { useEffect } from 'react'

const Home = () => {

  const regExp = /^(?=.*[0-9])(?=.*[a-z])/
  // (?=.*[a-z])

  useEffect(() => {
    console.log('testing', regExp.test('13angulo'));
  })

  return (
    <>  
        <div className='hero' id='movies_finder'>
          <div className='main-body'>
            <h1>Paga menos y disfruta de la mejor calidad en streaming</h1>
            <MoviesFinder />  
          </div>
        </div>
        <Services />
    </>
  )
}

export default Home