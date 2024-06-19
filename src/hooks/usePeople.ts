import { keepPreviousData, useQuery, UseQueryResult } from '@tanstack/react-query'
import { TMDBPeopleResponse } from '../types/People'

export type UsePeople<T> = {
    queryKey: string[],
    queryFn: (page: number) => Promise<TMDBPeopleResponse<T>>,
    page: number
}

export const usePeople = <T>({ queryKey, queryFn, page }: UsePeople<T>): UseQueryResult<TMDBPeopleResponse<T>, Error> => {
    return useQuery<TMDBPeopleResponse<T>, Error>({
        queryKey: [...queryKey, page],
        queryFn: () => queryFn(page),
        enabled: !!queryKey,
        placeholderData: keepPreviousData,
    })
}