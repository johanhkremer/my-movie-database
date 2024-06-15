import MovieCard from "../components/MoviesCard"
import { useState } from "react"
import TMDBPagination from "../components/TMDBPagination"
import { useQuery } from "@tanstack/react-query"
import { Movies, TMDBMovieResponse } from "../types/Movies"
import { getMoviesByGenre } from "../service/TMDB_API"
import { useParams } from "react-router-dom"


const GenreMovies: React.FC = () => {
    const [page, setPage] = useState(1);
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
                totalPages={data.total_pages}
                setPage={setPage}
                isFetching={isFetching}
            />

            <MovieCard movies={data.results} />

            <TMDBPagination
                currentPage={page}
                totalPages={data.total_pages}
                setPage={setPage}
                isFetching={isFetching}
            />
        </>
    )
}

export default GenreMovies