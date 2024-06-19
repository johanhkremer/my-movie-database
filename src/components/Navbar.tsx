import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import GenresList from './GenresList';
import { useTheme } from '../context/ThemeContext';
import "../assets/scss/navbar.scss"

function Navigation() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="navbar-wrapper">
            <Navbar expand="lg" className="navbar-custom">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">🎬 TMDB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavDropdown title="Movies" id="navbarScrollingDropdownMovies">
                                <NavDropdown.Item as={Link} to="/nowplayingmovies">Now Playing</NavDropdown.Item >
                                <NavDropdown.Item as={Link} to="/popularmovies">Popular</NavDropdown.Item >
                                <NavDropdown.Item as={Link} to="/TopRatedMovies">Top Rated</NavDropdown.Item >

                                <NavDropdown.Divider />

                                <NavDropdown title="Genre" id="navbarScrollingDropdownGenres">
                                    <GenresList />
                                </NavDropdown>
                            </NavDropdown>

                            <NavDropdown title="People" id="navbarScrollingDropdownPeople">

                                <NavDropdown.Item as={Link} to="/popularpeople">Popular People</NavDropdown.Item >

                            </NavDropdown>

                        </Nav>

                        {/* Button for light och dark mode */}
                        <Button className='theme' onClick={toggleTheme}>
                            {theme === 'light' ? '🌙' : '☀️'}
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </header>
    );
}

export default Navigation;