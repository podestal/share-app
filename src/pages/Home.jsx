import Services from '../components/Services'
import MoviesFinder from '../components/MoviesFinder'

const Home = () => {

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