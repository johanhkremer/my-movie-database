import React from 'react';
import { Card, Col, Container, Row } from "react-bootstrap"
import { Movie } from "../types/Movies"
import { Link } from "react-router-dom"
import '../assets/scss/movieDetailsCards.scss'
import placeholderPerson from '../assets/img/placeholderPerson.png'
import placeholderMovie from '../assets/img/placeholderMovie.png'

type MovieDetailsProps = {
    movie: Movie
}

const MovieDetailsCard: React.FC<MovieDetailsProps> = ({ movie }) => {
    return (
        <div className="movie-details-page">
            <div className="backdrop-container">
                <img
                    className="movie-backdrop"
                    src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                    alt={movie.title}
                />
                <div className="overlay"></div>
                <div className="movie-details-content">
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} md={4} className="poster-container">
                                <img
                                    className="movie-poster"
                                    src={movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                        : placeholderMovie}
                                    alt={movie.title}
                                />
                            </Col>
                            <Col xs={12} md={8} className="text-container">
                                <h1>{movie.title}</h1>
                                <p className="release-date">{movie.release_date}</p>
                                <p className="overview">{movie.overview}</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <Container className="cast-container">
                <h2>Cast</h2>
                <div className="cast-scroll">
                    {movie.credits.cast.map((person) => (
                        <Link key={`${person.id}-${person.cast_id}`} to={`/person/${person.id}`} className="person-card-link">
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
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default MovieDetailsCard
