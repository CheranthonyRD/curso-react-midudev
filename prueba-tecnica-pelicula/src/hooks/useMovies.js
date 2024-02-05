import { useState, useEffect } from "react";
import {getMovies} from "../services/getMovies.js"


const useMovies = ({search})=>{
    const [movies, setMovies] = useState();

    const updateMovies = ({search}) => {
        getMovies({search}).then(data =>{
            setMovies(data);
        });
    }

    useEffect(()=>{updateMovies({search})}, [search]);

    return {movies, updateMovies}
}


export default useMovies;