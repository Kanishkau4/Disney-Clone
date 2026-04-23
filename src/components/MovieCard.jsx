import React from 'react'
import { Link } from 'react-router-dom'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.id}`} className='shrink-0'>
            <img src={IMAGE_BASE_URL + movie.poster_path} alt=""
                className='w-[110px] md:w-[200px] mt-6 rounded-lg hover:border-[4px] border-gray-400 transition-all duration-150 ease-in-out cursor-pointer hover:scale-110 shadow-lg shadow-black' />
        </Link>
    )
}

export default MovieCard