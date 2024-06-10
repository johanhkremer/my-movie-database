import { getPopularMovies } from "../service/TMDB_API"

const HomePage = () => {

    try {
        const movies = getPopularMovies();
        console.log(movies);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }

    return (
        <div>HomePage</div>
    )
}

export default HomePage