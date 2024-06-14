import { getPopularMovies } from "../service/TMDB_API"
import MovieCard from "../components/MoviesCard"
import { useMovies } from "../hooks/useMovies"
import { useState } from "react"

function PopularMovies() {
    const [page, setPage] = useState(1)


    const {
        isPending,
        isError,
        data,
        error } = useMovies({
            queryKey: ['PopularMovies'],
            queryFn: getPopularMovies, page
        })

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <>
            <MovieCard movies={data.results} />
            {/* Pagination Controls */}
            <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
                Previous
            </button>
            <button onClick={() => setPage((prev) => prev + 1)}>
                Next
            </button>
        </>
    )
}

export default PopularMovies