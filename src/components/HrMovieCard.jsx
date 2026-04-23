import React from 'react'
import { Link } from 'react-router-dom'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const HrMovieCard = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.id}`} className='hover:scale-105 transition-all duration-150 ease-in-out cursor-pointer inline-block'>
            <img src={IMAGE_BASE_URL + movie.backdrop_path} alt="" className='w-[110px] md:w-[300px] mt-5 rounded-lg hover:border-[3px] border-gray-400' />
            <h2 className='w-[110px] md:w-[300px] text-white text-[20px] font-bold mt-2'>{movie.title}</h2>
        </Link>
    )
}

export default HrMovieCard