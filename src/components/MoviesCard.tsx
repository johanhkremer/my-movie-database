import Card from 'react-bootstrap/Card';
import { Movies } from '../types/Movies';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/scss/movieCards.scss'
import { Link } from 'react-router-dom';
import '../assets/scss/movieCards.scss'

interface MovieCardProp {
    movies: Movies[];
}

const MovieCard: React.FC<MovieCardProp> = ({ movies }) => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                {movies.map((movie) => (
                    <Col key={movie.id} >
                        <Link to={`/movie/${movie.id}`} className="movie-card-link" >
                            <Card style={{ width: '10rem' }} className='movie-card'>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                <Card.Body>
                                    <Card.Title>{movie.title}</Card.Title>
                                    <Card.Text>{movie.release_date}</Card.Text>
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

