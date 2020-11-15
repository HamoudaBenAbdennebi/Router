import React from 'react'
import movie from "../../movie.mp4"
const Video = () => {
    return (
        <div>
            <video style={{ width: "320px", height: "240px" }} controls>
                <source src={movie} type="video/mp4" />
            </video>
        </div>
    )
}

export default Video
