import { useQuery } from "@tanstack/react-query"
import { getTopRatedMovies } from "../service/TMDB_API"
import MovieCard from "../components/MoviesCard"
import { useMovies } from "../hooks/useMovies"

function TopRatedMovies() {
    const {
        isPending,
        isError,
        data,
        error } = useMovies({
            queryKey: ['nowPlaingMovies'],
            queryFn: getTopRatedMovies,
        })

    if (isPending) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <MovieCard movies={data.results} />
    )
}

export default TopRatedMovies