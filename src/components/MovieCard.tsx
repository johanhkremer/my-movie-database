import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Movies } from '../types/Movies';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface MovieCardProp {
    movies: Movies[];
}

const MovieCard: React.FC<MovieCardProp> = ({ movies }) => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                {movies.map((movie) => (
                    <Col key={movie.id} >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {movie.overview}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>{movie.genre_ids}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Details</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                ))}
            </Row>
        </Container >
    );
}

export default MovieCard;