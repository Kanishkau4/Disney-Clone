import React from 'react'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
    return (
        <>
            <img src={IMAGE_BASE_URL + movie.poster_path} alt=""
                className='w-[110px] md:w-[200px] mt-5 rounded-lg hover:border-[3px] border-gray-400 transition-all duration-100 ease-in-out cursor-pointer' />
        </>
    )
}

export default MovieCard