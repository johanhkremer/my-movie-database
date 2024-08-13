import MovieCard from "../components/MoviesCard"
import TMDBPagination from "../components/TMDBPagination"
import { useQuery } from "@tanstack/react-query"
import { Movies, TMDBMovieResponse } from "../types/Movies"
import { getMoviesByGenre } from "../service/TMDB_API"
import { useParams, useSearchParams } from "react-router-dom"
import '../assets/scss/genresMovies.scss'

//Function for retriving and rendering movies from choosen genre
const GenreMovies: React.FC = () => {
    //
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get('page')) || 1;
    const { id } = useParams<{ id: string }>();
    const { name } = useParams<{ name: string }>()

    //Using React Query (TanStack) to fetch data
    const {
        data,
        isLoading,
        isError,
        error,
        isFetching
    } = useQuery<TMDBMovieResponse<Movies>, Error>({
        queryKey: ['moviesByGenre', id, page],
        queryFn: () => getMoviesByGenre(Number(id), page)
    });

    //Function setting current page to params
    const handlePageChange = (newPage: number) => {
        setSearchParams({ page: newPage.toString() });
    };


    // Handling loading states and errors during data fetching.
    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error?.message}</span>
    }

    if (!data) {
        return <span>No data found</span>
    }

    return (
        <>
            <h2 className="genre-name">{name}</h2>
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

export default GenreMovies