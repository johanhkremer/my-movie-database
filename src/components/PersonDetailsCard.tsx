import { Person } from "../types/People"
import "../assets/scss/personDetailsCards.scss"
import { Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import placeholderMovie from '../assets/img/placeholderMovie.png'

type PersonDetailsProps = {
    person: Person
}

const PersonDetailsCard: React.FC<PersonDetailsProps> = ({ person }) => {
    return (
        <div key={person.id}>
            <div className="person-details-container">
                <div className="person-image">
                    {person.profile_path && (
                        <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`} alt={person.name} />
                    )}
                </div>
                <div className="person-info">
                    <h1>{person.name}</h1>
                    <p>{person.biography}</p>
                    <p>Born: {person.birthday}</p>
                    {person.deathday && <p>Died: {person.deathday}</p>}
                    <p>Popularity: {person.popularity}</p>
                    {person.homepage && <p><a href={person.homepage} target="_blank" rel="noopener noreferrer">{person.homepage}</a></p>}
                </div>
            </div>
            <Container className="cast-container">
                <h2>Credits</h2>
                <div className="cast-scroll">
                    {person.combined_credits.cast.map((movie) => (
                        <Link key={`${movie.id}`} to={`/movie/${movie.id}`} className="movie-card-link">
                            <Card className='movie-card'>
                                <Card.Img
                                    variant="top"
                                    src={movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                        : placeholderMovie}
                                    alt={person.name}
                                    className='cardImg'
                                />
                                <Card.Body>
                                    <Card.Title className='person-card-title'>{movie.title}</Card.Title>
                                    <Card.Text className='person-card-text'>{movie.release_date}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default PersonDetailsCard