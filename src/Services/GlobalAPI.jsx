import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "0a9021436a3d0164bea78309c5cbfae7";

const getTrendingVideo = axios.get(movieBaseUrl + '/trending/all/day?api_key=' + api_key);
const getMovieByGenreId = (id) => axios.get(movieBaseUrl + "/discover/movie?api_key=" + api_key + "&with_genres=" + id);

export default {
    getTrendingVideo,
    getMovieByGenreId
}