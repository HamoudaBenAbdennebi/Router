import React from 'react'
import { Link } from 'react-router-dom'
import MovieList from '../movie/MovieList'
import Video from './Video'
import Main from  "./Main"

const Desc = (props) => {
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <p style={{maxWidth:"1000px",margin:"20px"}}>{props.para}</p>
            <Video/>
        </div>
    )
}

export default Desc