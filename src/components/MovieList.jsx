import React, { useEffect, useState, useRef } from 'react'
import GlobalAPI from '../Services/GlobalAPI'
import MovieCard from './MovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';

const MovieList = ({ genreId, index_ }) => {

    const elementRef = useRef(null);

    const [movieList, setMovieList] = useState([]);
    const [showBackIcon, setShowBackIcon] = useState(false);

    const getMovieByGenreId = () => {
        GlobalAPI.getMovieByGenreId(genreId).then((resp) => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }

    useEffect(() => {
        getMovieByGenreId();
    }, [])

    const handleScroll = (e) => {
        if (e.target.scrollLeft > 50) {
            setShowBackIcon(true);
        } else {
            setShowBackIcon(false);
        }
    }

    const slideRight = (element) => {
        element.scrollLeft += 500;
        setTimeout(() => {
            if (element.scrollLeft > 50) setShowBackIcon(true);
        }, 300);
    }
    const slideLeft = (element) => {
        element.scrollLeft -= 500;
        setTimeout(() => {
            if (element.scrollLeft <= 50) setShowBackIcon(false);
        }, 300);
    }
    return (
        <div className='relative'>
            {showBackIcon && <IoChevronBackOutline onClick={() => slideLeft(elementRef.current)} className={'text-[40px] p-2 z-10 hidden md:block absolute left-0 ' + (index_ % 3 == 0 ? 'top-[70px]' : 'top-[150px]') + ' text-white cursor-pointer'} />}
            <div ref={elementRef} onScroll={handleScroll} className='flex overflow-x-auto scrollbar-hide px-8 md:px-16 scroll-smooth gap-8'>
                {movieList.map((item, index) => (
                    <React.Fragment key={index}>
                        {index_ % 3 == 0 ? <HrMovieCard movie={item} /> : <MovieCard movie={item} />}
                    </React.Fragment>
                ))}
            </div>
            <IoChevronForwardOutline onClick={() => slideRight(elementRef.current)} className={'text-[40px] p-2 z-10 hidden md:block absolute right-0 ' + (index_ % 3 == 0 ? 'top-[70px]' : 'top-[150px]') + ' text-white cursor-pointer'} />
        </div>
    )
}


export default MovieList