import axios from "axios";
import { Movie, Movies, TMDBMovieResponse } from "../types/Movies";

const BASE_URL = import.meta.env.VITE_API_BASEURL
const API_TOKEN = import.meta.env.VITE_ADRESS_TOKEN

//Axios instance
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000, //1 sec
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`
    }
})

//Generic GET function to handel different GET requests from TMDB API
const getMovies = async <T>(endpoint: string): Promise<TMDBMovieResponse<T>> => {
    const results = await instance.get<TMDBMovieResponse<T>>(endpoint)

    return results.data
}

export const getMovieDetails = async (id: number) => {
    const results = await instance.get<Movie>(`movie/${id}?language=en-US`)

    return results.data
}

export const getNowPlayingMovies = async () => {
    return getMovies<Movies>('movie/now_playing?language=en-US&page=1')
}

export const getPopularMovies = async () => {
    return getMovies<Movies>('movie/popular?language=en-US&page=1')
}

export const getTopRatedMovies = async () => {
    return getMovies<Movies>('movie/top_rated?language=en-US&page=1')
}