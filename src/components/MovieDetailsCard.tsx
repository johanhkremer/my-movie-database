import { Movie } from "../types/Movies"

type MovieDetailsProps = {
    movie: Movie
}

const MovieDetailsCard: React.FC<MovieDetailsProps> = ({ movie }) => {
    return (
        <div key={movie.id}>
            <div>
                <h1>{movie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />

            </div>
            <div></div>
        </div>
    )
}

export default MovieDetailsCard