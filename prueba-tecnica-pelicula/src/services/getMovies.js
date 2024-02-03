
const API = "http://www.omdbapi.com/?apikey=f6bd168d&s="

export const getMovies = async ({search}) => {

    const URL = `${API}${search}`;
    const response = await fetch(URL);
    const movies = await response.json();
    const {Search} = movies;
    return Search;
}