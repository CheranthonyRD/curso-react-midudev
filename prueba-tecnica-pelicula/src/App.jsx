import useMovies from "./hooks/useMovies.js";
import Movie from './components/Movie.jsx'
import './App.css'

const search = "kun-fu";
function App() {

const {movies, updateMovies} = useMovies({search});


return (
    <section>
      <header className='header-peliculas'>
        <h1 className='title'>Buscador de peliculas</h1>
        <form>
          <input type="text" placeholder='avengers,sherlock holmes, equalizer...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <p className='paragraph'>Tus peliculas se mostraran aqui</p>

        <section className='movies-section'>
            peliculas aqui
        </section>
      </main>
    </section>
  )
}

export default App
