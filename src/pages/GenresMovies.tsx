import MovieCard from "../components/MoviesCard"
import TMDBPagination from "../components/TMDBPagination"
import { useQuery } from "@tanstack/react-query"
import { Movies, TMDBMovieResponse } from "../types/Movies"
import { getMoviesByGenre } from "../service/TMDB_API"
import { useParams, useSearchParams } from "react-router-dom"


const GenreMovies: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get('page')) || 1;
    const { id } = useParams<{ id: string }>();

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

    const handlePageChange = (newPage: number) => {
        setSearchParams({ page: newPage.toString() });
    };

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

export default GenreMovies