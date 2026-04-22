import React, { useEffect, useRef, useState } from "react";
import GlobalAPI from "../Services/GlobalAPI";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const screenWidth = window.innerWidth;

const Slider = () => {

    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);
    const getTrendingMovies = () => {
        GlobalAPI.getTrendingVideo.then((resp) => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })
    }

    useEffect(() => {
        getTrendingMovies();
    }, [])

    const slideRight = (element) => {
        element.scrollLeft += screenWidth - 110;
    }
    const slideLeft = (element) => {
        element.scrollLeft -= screenWidth - 110;
    }
    return (
        <div>
            <HiChevronLeft onClick={() => slideLeft(elementRef.current)} className="absolute left-0 top-[280px] z-10 transform -translate-y-1/2 text-white text-3xl cursor-pointer hidden md:block" />
            <HiChevronRight onClick={() => slideRight(elementRef.current)} className="absolute right-0 top-[280px] z-10 transform -translate-y-1/2 text-white text-3xl cursor-pointer hidden md:block" />
            <div ref={elementRef} className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth">
                {movieList.map((item) => (
                    <img src={IMAGE_BASE_URL + item.backdrop_path} alt="" className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out" />
                ))}
            </div>
        </div>
    )
}

export default Slider