import { useQuery, UseQueryResult, QueryFunction } from '@tanstack/react-query'
import { TMDBMovieResponse } from '../types/Movies'

type UseMovies<T> = {
    queryKey: string[],
    queryFn: QueryFunction<TMDBMovieResponse<T>>,
}

export const useMovies = <T>({ queryKey, queryFn }: UseMovies<T>): UseQueryResult<TMDBMovieResponse<T>, Error> => {
    return useQuery<TMDBMovieResponse<T>, Error>({
        queryKey,
        queryFn,
    })
}