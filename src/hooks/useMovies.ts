import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { TMDBMovieResponse } from '../types/Movies'

export type UseMovies<T> = {
    queryKey: string[],
    queryFn: (page: number) => Promise<TMDBMovieResponse<T>>,
    page: number
}

export const useMovies = <T>({ queryKey, queryFn, page }: UseMovies<T>): UseQueryResult<TMDBMovieResponse<T>, Error> => {
    return useQuery<TMDBMovieResponse<T>, Error>({
        queryKey: [...queryKey, page],
        queryFn: () => queryFn(page),
    })
}

//! Måste fixa med keepPreviousData