import { useQuery } from "@tanstack/react-query"
import { getMovieDetails } from "../service/TMDB_API"
import { useParams } from "react-router-dom"
import MovieDetailsCard from "../components/MovieDetailsCard";

function MovieDetails() {
    const { id } = useParams<{ id: string }>();


    const {
        isPending,
        isError,
        data,
        error } = useQuery({
            queryKey: ['MovieDetails', id],
            queryFn: () => getMovieDetails(Number(id))
        })

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
        <MovieDetailsCard movie={data} />
    )
}

export default MovieDetails