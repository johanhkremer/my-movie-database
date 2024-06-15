import axios from "axios";
import { Genre, Movie, Movies, TMDBMovieResponse } from "../types/Movies";
import { People, Person, TMDBPeopleResponse } from "../types/People";

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
const getMovies = async <T>(endpoint: string, params?: object): Promise<TMDBMovieResponse<T>> => {
    const results = await instance.get<TMDBMovieResponse<T>>(endpoint, { params })

    return results.data
}

const getPeople = async <T>(endpoint: string, params?: object): Promise<TMDBMovieResponse<T>> => {
    const results = await instance.get<TMDBPeopleResponse<T>>(endpoint, { params })

    return results.data
}

//GET details data with id
export const getMovieDetails = async (id: number) => {
    const results = await instance.get<Movie>(`movie/${id}?language=en-US`)

    return results.data
}

export const getPersonDetails = async (id: number) => {
    const results = await instance.get<Person>(`person/${id}?language=en-US`)

    return results.data
}

//Get list of genres
export const getGenres = async () => {
    const results = await instance.get<Genre>(`genre/movie/list?language=en'`)

    return results.data
}

//Send movie request to generic GET functions
export const getNowPlayingMovies = (page: number) => {
    const params = {
        page: page.toString(),
        language: 'en-US',
        include_adult: 'false'
    }

    return getMovies<Movies>('movie/now_playing', params)
}

export const getPopularMovies = (page: number) => {
    const params = {
        page: page.toString(),
        language: 'en-US',
        include_adult: 'false'

    }

    return getMovies<Movies>(`movie/popular`, params)
}

export const getTopRatedMovies = (page: number) => {
    const params = {
        page: page.toString(),
        language: 'en-US',
        include_adult: 'false'

    }

    return getMovies<Movies>(`movie/top_rated`, params)
}

export const getMoviesByGenre = (genreId: number, page: number) => {
    const params = {
        page: page.toString(),
        with_genres: genreId.toString(),
        language: 'en-US',
        include_adult: 'false'
    }

    return getMovies<Movies>(`discover/movie`, params)
}

//Send people request to generic GET functions
export const getPopularPeople = async (page: number) => {
    const params = {
        page: page.toString(),
        language: 'en-US',
        include_adult: 'false'
    }

    return getPeople<People>(`person/popular`, params)
}






//Search keyword: 'https://api.themoviedb.org/3/search/keyword?query=batman&page=1'
//Genres: 'https://api.themoviedb.org/3/genre/movie/list?language=en'