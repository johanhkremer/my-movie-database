import { useMovies } from "../hooks/useMovies"
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies } from "../service/TMDB_API"
import { Movies } from "../types/Movies"
import MovieCardHome from "../components/MoviesCardHome"
import "../assets/scss/homePage.scss"

const HomePage: React.FC = () => {

    const nowPlaying = useMovies<Movies>({
        queryKey: ['nowPlaying'],
        queryFn: getNowPlayingMovies,
        page: 1
    })

    const popular = useMovies<Movies>({
        queryKey: ['popular'],
        queryFn: getPopularMovies,
        page: 1
    })

    const topRated = useMovies<Movies>({
        queryKey: ['topRated'],
        queryFn: getTopRatedMovies,
        page: 1
    })

    if (nowPlaying.isLoading || popular.isLoading || topRated.isLoading) {
        return <div>Loading...</div>
    }

    if (nowPlaying.isError || popular.isError || topRated.isError) {
        return <div>Error: {(nowPlaying.error || popular.error || topRated.error)?.message}</div>
    }

    const nowPlayingMovies = nowPlaying.data?.results.slice(0, 20) || [];
    const popularMovies = popular.data?.results.slice(0, 20) || [];
    const topRatedMovies = topRated.data?.results.slice(0, 20) || [];

    return (
        <div className="container homepage">
            <h1>Welcome!</h1>
            <div className="movie-section">
                <h2>Now Playing</h2>
                <div className="movie-list">
                    {nowPlayingMovies.map(movie => (
                        <MovieCardHome key={movie.id} movies={[movie]} />
                    ))}
                </div>
            </div>

            <div className="movie-section">
                <h2>Popular</h2>
                <div className="movie-list">
                    {popularMovies.map(movie => (
                        <MovieCardHome key={movie.id} movies={[movie]} />
                    ))}
                </div>
            </div>

            <div className="movie-section">
                <h2>Top Rated</h2>
                <div className="movie-list">
                    {topRatedMovies.map(movie => (
                        <MovieCardHome key={movie.id} movies={[movie]} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage