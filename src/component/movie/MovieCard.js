import React from 'react';
import MovieList from './MovieList';
import './card.css'
import { Link, Route } from 'react-router-dom';
import Desc from '../comp/Desc'
const MovieCard = ({movie},) =>{
    return(
        <div className="card">
            <img src={movie.url} alt="error"/>
            <h3>{movie.title}</h3>
            <div>
            <p>{movie.desc}</p>
            </div>
            <p>{movie.rating}☆</p>
            <Link to="/desc">DESCRIPTION</Link>
        </div>
    )
}

export default MovieCard