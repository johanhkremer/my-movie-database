import { useMovies } from "../hooks/useMovies";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, searchMovie } from "../service/TMDB_API";
import { Movies } from "../types/Movies";
import MovieCardHome from "../components/MoviesCardHome";
import "../assets/scss/homePage.scss";
import Search from "../components/SearchMovies";
import { useState } from "react";

const HomePage: React.FC = () => {
    //Statmanegement for search function 
    const [searchResults, setSearchResults] = useState<Movies[]>([]);
    const [searching, setSearching] = useState<boolean>(false);

    //Functions for featching top 20 now playing, popular and top rated movies
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

    //Function for state handeling searchresult
    const handleSearchResults = (results: Movies[]) => {
        setSearchResults(results);
        setSearching(true);
    };

    // Function to randomly select a movie backdrop image from currently playing movies.
    const getRandomBackdrop = (movies: Movies[]): string | null => {
        if (movies.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * movies.length);
        return movies[randomIndex]?.backdrop_path || null;
    };

    // Handling loading states and errors during data fetching.
    if (nowPlaying.isLoading || popular.isLoading || topRated.isLoading) {
        return <div>Loading...</div>;
    }

    if (nowPlaying.isError || popular.isError || topRated.isError) {
        return <div>Error: {(nowPlaying.error || popular.error || topRated.error)?.message}</div>;
    }

    // Extracts the first 20 movies from now playing, popular and top rated movies
    const nowPlayingMovies = nowPlaying.data?.results.slice(0, 20) || [];
    const popularMovies = popular.data?.results.slice(0, 20) || [];
    const topRatedMovies = topRated.data?.results.slice(0, 20) || [];

    const randomBackdrop = getRandomBackdrop(nowPlayingMovies);

    return (
        <div className="homepage">
            {/* Backdrop image (random current movie) */}
            <div className="backdropContainer">
                <div
                    className="backdrop"
                    style={{
                        backgroundImage: randomBackdrop
                            ? `linear-gradient(rgba(45, 0, 78, 0.6), rgba(45, 0, 78, 0.6)), url(https://image.tmdb.org/t/p/original${randomBackdrop})`
                            : 'none'
                    }}
                >
                </div>
            </div>

            {/* Search component */}
            <div className="search-container">
                <Search<Movies>
                    searchFunction={(query: string) => searchMovie(query, 1).then(data => data.results)}
                    onSearchResults={handleSearchResults}
                />
                <h1>Welcome to The Movie Database</h1>
            </div>
            {searching ? (
                // Renders first 20 movies from now playing, popular and top rated movies
                <div className="movie-section">
                    <h2>Search Results</h2>
                    <div className="movie-list">
                        {searchResults.map(movie => (
                            <MovieCardHome key={movie.id} movies={[movie]} />
                        ))}
                    </div>
                </div>
            ) : (
                <>
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
                </>
            )}
        </div>
    );
};

export default HomePage;