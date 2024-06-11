import { useQuery } from "@tanstack/react-query"
import { getNowPlayingMovies } from "../service/TMDB_API"
import MovieCard from "../components/MovieCard"

function NowPlayingMovies() {
    const {
        isPending,
        isError,
        data,
        error } = useQuery({
            queryKey: ['nowPlaingMovies'],
            queryFn: getNowPlayingMovies,
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


export default NowPlayingMovies