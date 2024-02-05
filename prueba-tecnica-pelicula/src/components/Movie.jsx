import '../App.css';

const notFound = "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"


const Movie = ({title, year, poster }) => {
  const moviePoster = (poster !== "N/A") ? poster : notFound
  return (
    <div className="movie-card">
        <picture className='movie-picture'>
            <img className="movie-img" src={moviePoster} alt={title} />
        </picture>

        <div className="movie-info">
            <h3 className="movie-title">{title}</h3>
            <span className="movie-year">Año: {''}{year}</span>
        </div>
    </div>
  )
}

export default Movie
