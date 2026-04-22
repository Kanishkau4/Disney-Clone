import React from 'react'
import GenersList from '../Constant/GenersList'
import MovieList from './MovieList'

const GenereMovieList = () => {
    return (
        <div>
            {GenersList.map((item, index) => index <= 4 && (
                <div key={item.id} className='p-8 px-8 md:px-16'>
                    <h2 className='text-[20px] font-bold text-white'>{item.name}</h2>
                    <MovieList genreId={item.id} index_={index} />
                </div>
            ))}
        </div>
    )
}

export default GenereMovieList