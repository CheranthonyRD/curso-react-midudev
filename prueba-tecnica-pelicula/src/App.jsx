import useMovies from "./hooks/useMovies.js";
import Movie from './components/Movie.jsx'
import './App.css'
import { useRef, useState } from "react";

function App() {
const [query, setQuery] = useState("");
const {movies, updateMovies} = useMovies({search: query});


function handleQuery(e){
  const newQuery = e.target.value
  setQuery(newQuery);
}

function handleSubmit(e){
  e.preventDefault();

  if(!query || query.startsWith(" ")){
    updateMovies({search: ''})
    return;
  }
  updateMovies({search: query});
}


return (
    <section>
      <header className='header-peliculas'>
        <h1 className='title'>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleQuery} type="text" placeholder='avengers,sherlock holmes, equalizer...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <p className='paragraph'>Tus peliculas se mostraran aqui</p>

        <section className='movies-section'>
            {movies && movies.length > 0 
            ? 
            (movies.map(movie => (<Movie key={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster}/>)))
            :              
              (<div>No se encuentran peliculas con esa busqueda</div>)
            }
        </section>
      </main>
    </section>
  )
}

export default App
