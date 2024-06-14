import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { People } from '../types/People';

interface PersonCardProp {
    people: People[];
}

const PersonCard: React.FC<PersonCardProp> = ({ people }) => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                {people.map((person) => (
                    <Col key={person.id} className='mb-3'>
                        <Link to={`/person/${person.id}`} className="person-card-link" >
                            <Card style={{ width: '15rem' }} className='person-card'>
                                <Card.Img
                                    variant="top"
                                    src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                                    alt={person.name}
                                    className='cardImg'
                                />
                                <Card.Body>
                                    <Card.Title className='person-card-title'>{person.name}</Card.Title>
                                    <Card.Text className='person-card-text'>Real Name: {person.original_name}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>

                ))}
            </Row>
        </Container >
    );
}

export default PersonCard;

