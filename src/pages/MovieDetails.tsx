import { useQuery } from "@tanstack/react-query"
import { getMovieDetails } from "../service/TMDB_API"
import { useParams } from "react-router-dom"
import MovieDetailsCard from "../components/MovieDetailsCard";

function MovieDetails() {
    // Extracting the 'id' parameter from the URL using useParams.
    const { id } = useParams<{ id: string }>();

    //Using React Query (TanStack) to featch data
    const {
        isPending,
        isError,
        data,
        error } = useQuery({
            queryKey: ['MovieDetails', id],
            queryFn: () => getMovieDetails(Number(id))
        })

    // Handling loading states and errors during data fetching.
    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    if (!data) {
        return <span>No data found</span>
    }

    return (
        // Component with detailed information about a movie
        <MovieDetailsCard movie={data} />
    )
}

export default MovieDetails