import React from 'react';
import { getPopularPeople } from "../service/TMDB_API"
import MovieCard from "../components/PeopleCard"
import { usePeople } from "../hooks/usePeople"
import TMDBPagination from "../components/TMDBPagination"
import { useSearchParams } from "react-router-dom"

function PopularPeople() {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get('page')) || 1;

    const {
        isPending,
        isError,
        data,
        error,
        isFetching
    } = usePeople({
        queryKey: ['PopularPeople'],
        queryFn: getPopularPeople, page
    })

    const handlePageChange = (newPage: number) => {
        setSearchParams({ page: newPage.toString() });
    };

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <>
            <TMDBPagination
                currentPage={page}
                totalPages={data.total_pages > 500 ? 500 : data.total_pages}
                setPage={handlePageChange}
                isFetching={isFetching}
            />

            <MovieCard people={data.results} />

            <TMDBPagination
                currentPage={page}
                totalPages={data.total_pages > 500 ? 500 : data.total_pages}
                setPage={handlePageChange}
                isFetching={isFetching}
            />
        </>
    )
}

export default PopularPeople