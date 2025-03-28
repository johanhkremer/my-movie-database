import '../assets/scss/homePage.scss'
import '../assets/scss/movieCards.scss'
import { Link } from 'react-router-dom';
import { Movies } from '../types/Movies';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import placeholderMovie from '../assets/img/placeholderMovie.png'
import '../assets/scss/movieCardHome.scss'

interface MovieCardProp {
    movies: Movies[];
}

const MovieCard: React.FC<MovieCardProp> = ({ movies }) => {
    return (
        <Container className='movie-card-container'>
            <Row className="justify-content-md-center">
                {movies.map((movie) => (
                    <Col key={movie.id} className='mb-3'>
                        <Link to={`/movie/${movie.id}`} className="movie-card-link" >
                            <Card style={{ width: '8rem' }} className='movie-card'>
                                <Card.Img
                                    variant="top"
                                    src={movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                        : placeholderMovie}
                                    alt={movie.title}
                                    className='cardImg'
                                />
                                <Card.Body>
                                    <Card.Title className='movie-card-title'>{movie.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container >
    );
}

export default MovieCard;

