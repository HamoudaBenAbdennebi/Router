import React from 'react';
import MovieList from './MovieList'
import './card.css'
const Filter = ({movies}) =>{
    return(
        <div className="FilterContainer">
            <input 
            type="text" 
            placeholder="name"
            onChange={(e)=> e.target.value}
            />

        </div>
    )
}

export default Filter;