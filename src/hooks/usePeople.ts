import { keepPreviousData, useQuery, UseQueryResult } from '@tanstack/react-query'
import { TMDBResponse } from '../types/TMDB'

//Type definitions for useMovie hook
export type UsePeople<T> = {
    queryKey: string[],
    queryFn: (page: number) => Promise<TMDBResponse<T>>,
    page: number
}

//usePeople generic <T> custom hook
export const usePeople = <T>({ queryKey, queryFn, page }: UsePeople<T>): UseQueryResult<TMDBResponse<T>, Error> => {
    return useQuery<TMDBResponse<T>, Error>({
        queryKey: [...queryKey, page],
        queryFn: () => queryFn(page),
        enabled: !!queryKey,
        //Keeps the old data as placeholder until the new data loads
        placeholderData: keepPreviousData,
    })
}