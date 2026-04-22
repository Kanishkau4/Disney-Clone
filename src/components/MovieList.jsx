import React, { useEffect, useState, useRef } from 'react'
import GlobalAPI from '../Services/GlobalAPI'
import MovieCard from './MovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

const MovieList = ({ genreId }) => {

    const elementRef = useRef(null);

    const [movieList, setMovieList] = useState([]);

    const getMovieByGenreId = () => {
        GlobalAPI.getMovieByGenreId(genreId).then((resp) => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }

    useEffect(() => {
        getMovieByGenreId();
    }, [])

    const slideRight = (element) => {
        element.scrollLeft += 500;
    }
    const slideLeft = (element) => {
        element.scrollLeft -= 500;
    }
    return (
        <div className='relative'>
            <IoChevronBackOutline onClick={() => slideLeft(elementRef.current)} className='text-[40px] p-2 z-10 hidden md:block absolute left-0 top-[150px] text-white cursor-pointer' />
            <div ref={elementRef} className='flex overflow-x-auto scrollbar-hide px-8 md:px-16 scroll-smooth gap-8'>
                {movieList.map((item, index) => (
                    <MovieCard key={index} movie={item} />
                ))}
            </div>
            <IoChevronForwardOutline onClick={() => slideRight(elementRef.current)} className='text-[40px] p-2 z-10 hidden md:block absolute right-0 top-[150px] text-white cursor-pointer' />
        </div>
    )
}

export default MovieList