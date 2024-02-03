import '../App.css';

const Movie = ({title, year, poster }) => {
  return (
    <div className="movie-card">
        <picture className='movie-picture'>
            <img className="movie-img" src={poster} alt={title} />
        </picture>

        <div className="movie-info">
            <h3 className="movie-title">{title}</h3>
            <span className="movie-year">Año: {''}{year}</span>
        </div>
    </div>
  )
}

export default Movie
