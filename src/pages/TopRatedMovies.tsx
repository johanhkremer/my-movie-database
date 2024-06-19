import { getTopRatedMovies } from "../service/TMDB_API"
import MovieCard from "../components/MoviesCard"
import { useMovies } from "../hooks/useMovies"
import { useState } from "react"
import TMDBPagination from "../components/TMDBPagination"

function TopRatedMovies() {
    const [page, setPage] = useState(1)


    const {
        isPending,
        isError,
        data,
        error,
        isFetching
    } = useMovies({
        queryKey: ['nowPlaingMovies'],
        queryFn: getTopRatedMovies, page
    })

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
                setPage={setPage}
                isFetching={isFetching}
            />

            <MovieCard movies={data.results} />

            <TMDBPagination
                currentPage={page}
                totalPages={data.total_pages > 500 ? 500 : data.total_pages}
                setPage={setPage}
                isFetching={isFetching}
            />
        </>
    )
}

export default TopRatedMovies