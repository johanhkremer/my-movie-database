import { getPopularMovies } from "../service/TMDB_API"
import MovieCard from "../components/MoviesCard"
import { useMovies } from "../hooks/useMovies"
import TMDBPagination from "../components/TMDBPagination"
import { useSearchParams } from "react-router-dom"

function PopularMovies() {
    // Page value is used to determine the current pagination state for displaying paged data.
    const [searchParams, setSearchParams] = useSearchParams();
    // Retrieves the search parameters from the URL using useSearchParams.
    const page = Number(searchParams.get('page')) || 1;

    //Using React Query (TanStack) via custom useMovie hook to featch data
    const {
        isPending,
        isError,
        data,
        error,
        isFetching
    } = useMovies({
        queryKey: ['PopularMovies'],
        queryFn: getPopularMovies, page
    })

    //Function setting current page to params
    const handlePageChange = (newPage: number) => {
        setSearchParams({ page: newPage.toString() });
    };

    // Handling loading states and errors during data fetching.
    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <>
            {/* Pagination component (Limited to 500 pages to prevent performance issues and crashes that occur with very high page numbers) */}
            <TMDBPagination
                currentPage={page}
                totalPages={data.total_pages > 500 ? 500 : data.total_pages}
                setPage={handlePageChange}
                isFetching={isFetching}
            />

            {/* Component with moviecards */}
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

export default PopularMovies