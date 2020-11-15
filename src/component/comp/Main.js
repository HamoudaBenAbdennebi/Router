import React,{useState} from 'react'
import Filter from '../movie/Filter'
import MovieForm from '../movie/MovieForm'
import MovieList from '../movie/MovieList'

const Main = () => {
    const [movies,setMovies] = useState([]);

    const addMovie = movie =>{
        setMovies([movie,...movies]);
    }
    return (
        <div>
            <Filter movies={movies}/>
            <MovieForm addMovie={addMovie}/>
            <MovieList movies={movies}/>
        </div>
    )
}

export default Main
