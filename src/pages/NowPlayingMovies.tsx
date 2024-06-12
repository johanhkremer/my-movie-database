import { getNowPlayingMovies } from "../service/TMDB_API"
import MovieCard from "../components/MoviesCard"
import { useMovies } from "../hooks/useMovies"

function NowPlayingMovies() {
    const {
        isPending,
        isError,
        data,
        error } = useMovies({
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