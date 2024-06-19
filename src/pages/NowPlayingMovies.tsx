import React from 'react';
import { getNowPlayingMovies } from "../service/TMDB_API"
import MovieCard from "../components/MoviesCard"
import { useMovies } from "../hooks/useMovies"
import TMDBPagination from "../components/TMDBPagination"
import { useSearchParams } from "react-router-dom"

function NowPlayingMovies() {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get('page')) || 1;

    const {
        isPending,
        isError,
        data,
        error,
        isFetching
    } = useMovies({
        queryKey: ['nowPlaingMovies'],
        queryFn: getNowPlayingMovies, page,
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

            <MovieCard movies={data.results} />

            <TMDBPagination
                currentPage={page}
                totalPages={data.total_pages > 500 ? 500 : data.total_pages}
                setPage={handlePageChange}
                isFetching={isFetching}
            />
        </>
    )
}


export default NowPlayingMovies