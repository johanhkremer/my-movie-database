import { keepPreviousData, useQuery, UseQueryResult } from '@tanstack/react-query'
import { TMDBResponse } from '../types/TMDB'

//Type definitions for useMovie hook
export type UseMovies<T> = {
    queryKey: string[],
    queryFn: (page: number) => Promise<TMDBResponse<T>>,
    page: number
}

//useMovie generic <T> custom hook
export const useMovies = <T>({ queryKey, queryFn, page }: UseMovies<T>): UseQueryResult<TMDBResponse<T>, Error> => {
    return useQuery<TMDBResponse<T>, Error>({
        queryKey: [...queryKey, page],
        queryFn: () => queryFn(page),
        enabled: !!queryKey,
        //Keeps the old data as placeholder until the new data loads
        placeholderData: keepPreviousData,
    })
}