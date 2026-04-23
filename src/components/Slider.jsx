import React, { useEffect, useRef, useState } from "react";
import GlobalAPI from "../Services/GlobalAPI";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";



const Slider = () => {

    const [movieList, setMovieList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const elementRef = useRef(null);

    const getTrendingMovies = () => {
        GlobalAPI.getTrendingVideo.then((resp) => {
            setMovieList(resp.data.results);
        })
    }

    const slideToIndex = (index) => {
        setCurrentIndex(index);
        const scrollAmount = index * (window.innerWidth - 102); // Adjusted for px-16 (32*2) and some margin
        elementRef.current.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    const slideRight = () => {
        const nextIndex = (currentIndex + 1) % movieList.length;
        slideToIndex(nextIndex);
    }

    const slideLeft = () => {
        const prevIndex = (currentIndex - 1 + movieList.length) % movieList.length;
        slideToIndex(prevIndex);
    }

    useEffect(() => {
        getTrendingMovies();
    }, [])

    useEffect(() => {
        if (movieList.length > 0) {
            const interval = setInterval(() => {
                const nextIndex = (currentIndex + 1) % movieList.length;
                slideToIndex(nextIndex);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [movieList, currentIndex]);

    return (
        <div className="relative group">
            <HiChevronLeft onClick={slideLeft} className="absolute left-8 top-[155px] z-10 transform -translate-y-1/2 text-white text-4xl cursor-pointer hidden group-hover:block transition-all" />
            <HiChevronRight onClick={slideRight} className="absolute right-8 top-[155px] z-10 transform -translate-y-1/2 text-white text-4xl cursor-pointer hidden group-hover:block transition-all" />

            <div ref={elementRef} className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth">
                {movieList.map((item, index) => (
                    <Link key={index} to={`/movie/${item.id}`} className="min-w-full mr-5 shrink-0 block">
                        <img src={IMAGE_BASE_URL + item.backdrop_path} alt="" className="w-full md:h-[310px] object-cover object-left-top rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out" />
                    </Link>
                ))}
            </div>

            <div className="flex justify-center gap-2 mt-[-20px] pb-5">
                {movieList.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => slideToIndex(index)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex ? 'bg-white w-4' : 'bg-gray-500'}`}
                    ></div>
                ))}
            </div>
        </div>
    )
}


export default Slider