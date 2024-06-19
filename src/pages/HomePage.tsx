import { useMovies } from "../hooks/useMovies";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies } from "../service/TMDB_API";
import { Movies } from "../types/Movies";
import MovieCardHome from "../components/MoviesCardHome";
import { Container } from 'react-bootstrap';
import "../assets/scss/homePage.scss";

const HomePage: React.FC = () => {

    const nowPlaying = useMovies<Movies>({
        queryKey: ['nowPlaying'],
        queryFn: getNowPlayingMovies,
        page: 1
    });

    const popular = useMovies<Movies>({
        queryKey: ['popular'],
        queryFn: getPopularMovies,
        page: 1
    });

    const topRated = useMovies<Movies>({
        queryKey: ['topRated'],
        queryFn: getTopRatedMovies,
        page: 1
    });

    const getRandomBackdrop = (movies: Movies[]): string | null => {
        if (movies.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * movies.length);
        return movies[randomIndex]?.backdrop_path || null;
    };

    if (nowPlaying.isLoading || popular.isLoading || topRated.isLoading) {
        return <div>Loading...</div>;
    }

    if (nowPlaying.isError || popular.isError || topRated.isError) {
        return <div>Error: {(nowPlaying.error || popular.error || topRated.error)?.message}</div>;
    }

    const nowPlayingMovies = nowPlaying.data?.results.slice(0, 20) || [];
    const popularMovies = popular.data?.results.slice(0, 20) || [];
    const topRatedMovies = topRated.data?.results.slice(0, 20) || [];

    const randomBackdrop = getRandomBackdrop(nowPlayingMovies);

    return (
        <div className="homepage">
            <div
                className="backdrop"
                style={{
                    backgroundImage: randomBackdrop
                        ? `linear-gradient(rgba(45, 0, 78, 0.6), rgba(45, 0, 78, 0.6)), url(https://image.tmdb.org/t/p/original${randomBackdrop})`
                        : 'none'
                }}
            >
            </div>

            <Container>
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
            </Container>
        </div>
    );
};

export default HomePage;
