import './index.css'
import MoviesSlider from '../MoviesSlider'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === actionMovie,
  )
  const comedyMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === comedyMovie,
  )

  return (
    <div className="prime-video-bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-image"
      />
      <div className="movies-container">
        <h1 className="movie-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovieList} />
        <h1 className="movie-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovieList} />
      </div>
    </div>
  )
}

export default PrimeVideo
