import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">TMDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/nowplayingmovies">Now Playing</Nav.Link>
                        <Nav.Link as={Link} to="/popularmovies">Popular</Nav.Link>
                        <Nav.Link as={Link} to="/TopRatedMovies">Top Rated</Nav.Link>
                        <Nav.Link as={Link} to="/popularpeople">Popular</Nav.Link>

                        <NavDropdown title="Genre" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/genre/action">Action</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/adventure">Adventure</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/animation">Animation</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/comedy">Comedy</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/crime">Crime</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/documentary">Documentary</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/drama">Drama</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/family">Family</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/fantasy">Fantasy</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/history">History</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/horror">Horror</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/music">Music</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/mystery">Mystery</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/romance">Romance</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/science-fiction">Science Fiction</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/tv-movie">TV Movie</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/thriller">Thriller</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/war">War</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/genre/western">Western</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;