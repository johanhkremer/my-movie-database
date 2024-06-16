import { Card, Col, Container, Row } from "react-bootstrap"
import { Movie } from "../types/Movies"
import { Link } from "react-router-dom"
import '../assets/scss/movieDetailsCards.scss'
import placeholderPerson from '../assets/img/placeholderPerson.png'

type MovieDetailsProps = {
    movie: Movie
}

const MovieDetailsCard: React.FC<MovieDetailsProps> = ({ movie }) => {
    return (
        // Movie Details
        <div key={movie.id}>
            <div>
                <h1>{movie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />

            </div>

            {/* Actors in movie */}
            <Container>
                <Row className="justify-content-md-center mt-3">
                    {movie.credits.cast.map((person) => (
                        <Col key={person.id} className='mb-3'>
                            <Link to={`/person/${person.id}`} className="person-card-link" >
                                <Card className='person-card'>
                                    <Card.Img
                                        variant="top"
                                        src={person.profile_path
                                            ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                                            : placeholderPerson}
                                        alt={person.name}
                                        className='cardImg'
                                    />
                                    <Card.Body>
                                        <Card.Title className='person-card-title'>{person.name}</Card.Title>
                                        <Card.Text className='person-card-text'>{person.character}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>

                    ))}
                </Row>
            </Container >
        </div>
    )
}

export default MovieDetailsCard



