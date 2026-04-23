import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GlobalAPI from '../Services/GlobalAPI'
import { HiPlay } from 'react-icons/hi'
import { LuAirplay } from 'react-icons/lu'

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieDetail = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [video, setVideo] = useState(null)

    useEffect(() => {
        getMovie()
        window.scrollTo(0, 0)
    }, [id])

    const getMovie = () => {
        GlobalAPI.getMovieDetailById(id).then((resp) => {
            console.log(resp.data)
            setMovie(resp.data)
            // finding a trailer
            if (resp.data.videos && resp.data.videos.results.length > 0) {
                const trailer = resp.data.videos.results.find(vid => vid.type === "Trailer" && vid.site === "YouTube")
                if (trailer) {
                    setVideo(trailer.key)
                } else {
                    setVideo(resp.data.videos.results[0].key) // fallback to any video
                }
            }
        })
    }

    if (!movie) return <div className="text-white text-center mt-20">Loading...</div>

    return (
        <div className="text-white min-h-screen pb-10">
            <div className="relative w-full h-[60vh] md:h-[80vh]">
                <div className="absolute w-full h-full bg-gradient-to-t from-[#131520] to-transparent z-10 bottom-0"></div>
                <img
                    src={IMAGE_BASE_URL + (movie.backdrop_path || movie.poster_path)}
                    alt={movie.title}
                    className="w-full h-full object-cover object-top"
                />

                <div className="absolute z-20 bottom-0 p-8 md:p-16 w-full md:w-2/3">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>
                    <div className="flex items-center gap-4 mb-4 text-gray-300 text-sm md:text-base">
                        <span>{movie.release_date?.substring(0, 4)}</span>
                        <span>•</span>
                        <span>{movie.runtime} min</span>
                        <span>•</span>
                        <span>{movie.genres?.map(g => g.name).join(', ')}</span>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-6">
                        <button className="bg-white text-black font-bold py-2 md:py-3 px-6 md:px-8 rounded flex items-center gap-2 hover:scale-105 transition-all outline-none">
                            <span className="text-xl md:text-2xl"><HiPlay /></span> PLAY
                        </button>
                        <button className="bg-[rgba(0,0,0,0.5)] border border-gray-400 text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded flex items-center gap-2 hover:scale-105 hover:bg-[rgba(0,0,0,0.8)] hover:border-white transition-all outline-none">
                            <LuAirplay />TRAILER
                        </button>
                        <button className="w-10 h-10 md:w-12 md:h-12 bg-[rgba(0,0,0,0.5)] border-2 border-white rounded-full flex items-center justify-center text-xl hover:bg-white hover:text-black transition-all">
                            +
                        </button>
                        <button className="w-10 h-10 md:w-12 md:h-12 bg-[rgba(0,0,0,0.5)] border-2 border-white rounded-full flex items-center justify-center text-xl hover:bg-white hover:text-black transition-all">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>
                        </button>
                    </div>
                    <p className="text-sm md:text-lg text-gray-200 line-clamp-4 md:line-clamp-none">
                        {movie.overview}
                    </p>
                </div>
            </div>

            {video && (
                <div className="px-8 md:px-16 mt-[-40px] md:mt-[-80px] relative z-20">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 mt-10">Trailer</h2>
                    <div className="aspect-video w-full md:w-2/3 rounded-lg overflow-hidden shadow-2xl shadow-black border border-gray-800">
                        <iframe
                            src={`https://www.youtube.com/embed/${video}?autoplay=0`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieDetail
