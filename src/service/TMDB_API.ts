import axios from "axios";
import { GenreList, Movie, MovieListItem } from "../types/Movies";
import { People, Person } from "../types/People";
import { TMDBResponse } from "../types/TMDB";

const BASE_URL = import.meta.env.VITE_API_BASEURL
const API_TOKEN = import.meta.env.VITE_ADRESS_TOKEN

//Axios instance
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000, //10 sec
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`
    }
})

//Generic GET function for TMDB list endpoints (movies, people)
const getList = async <T>(endpoint: string, params?: object): Promise<TMDBResponse<T>> => {
    const results = await instance.get<TMDBResponse<T>>(endpoint, { params })

    return results.data
}

//GET details data with id
export const getMovieDetails = async (id: number) => {
    const results = await instance.get<Movie>(`movie/${id}`, {
        params: {
            language: 'en-US',
            append_to_response: 'credits'
        }
    })

    return results.data
}

export const getPersonDetails = async (id: number) => {
    const results = await instance.get<Person>(`person/${id}`, {
        params: {
            language: 'en-US',
            include_adult: 'false',
            append_to_response: 'combined_credits'
        }
    })

    return results.data
}

//Get list of genres
export const getGenres = async () => {
    const results = await instance.get<GenreList>(`genre/movie/list`, {
        params: {
            language: 'en-US',
            include_adult: 'false'
        }
    })

    return results.data
}

//Send movie request to generic GET functions
export const getNowPlayingMovies = (page: number) => {
    const params = {
        page: page.toString(),
        language: 'en-US',
        include_adult: 'false'
    }

    return getList<MovieListItem>('movie/now_playing', params)
}

export const getPopularMovies = (page: number) => {
    const params = {
        page: page.toString(),
        language: 'en-US',
        include_adult: 'false'
    }

    return getList<MovieListItem>(`movie/popular`, params)
}

export const getTopRatedMovies = (page: number) => {
    const params = {
        page: page.toString(),
        language: 'en-US',
        include_adult: 'false'
    }

    return getList<MovieListItem>(`movie/top_rated`, params)
}

export const getMoviesByGenre = (genreId: number, page: number) => {
    const params = {
        page: page.toString(),
        with_genres: genreId.toString(),
        language: 'en-US',
        include_adult: 'false'
    }

    return getList<MovieListItem>(`discover/movie`, params)
}

//Send people request to generic GET functions
export const getPopularPeople = async (page: number) => {
    const params = {
        page: page.toString(),
        language: 'en-US',
        include_adult: 'false'
    }

    return getList<People>(`person/popular`, params)
}

// Search movies
export const searchMovie = async (query: string, page: number) => {
    const results = await instance.get<TMDBResponse<MovieListItem>>(`search/movie`, {
        params: {
            query,
            page: page.toString(),
            language: 'en-US',
            include_adult: 'false'
        }
    })

    return results.data
}